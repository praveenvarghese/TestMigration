const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const proxyMethodMissing = require("proxy-method-missing");

const _ = require("lodash");

const HtmlEntities = require("html-entities").XmlEntities;

class Abstract$$$ {
	get length() {
		return this.webElements.length;
	}
	get selector() {
		return this.webElement.selector;
	}
	get origCssSelector() {
		return this.webElement.origCssSelector;
	}
	hasClass(x) {
		const _class = this.getAttribute("class");
		return _class ? _class.split(" ").includes(x) : false;
	}
	any() {
		return this.length > 0;
	}
	click(...args) {
		// Note: length of 0 is not possible, as the constructor would have thrown.
		if (this.length === 1) {
			this.method_missing("click", ...args);
			return this;
		}
		throw new Error(
			`Refusing to click on multiple elements at once, as this is probably unintentional! (${JSON.stringify(
				this.webElements
			)})`
		);
	}

	dragAndDrop(target, ...args) {
		this.method_missing("dragAndDrop", target.webElement, ...args);
		return this;
	}
	keys(textOrKeys, keyDelay) {
		if (Array.isArray(textOrKeys)) {
			textOrKeys.forEach((key) => {
				this.apply((webElement) => {
					// !CAVEAT REFACTOR!CAVEAT REFACTOR!CAVEAT REFACTOR!
					// We do a natural pause between each key-press.
					// This is about the only valid use for using the
					// browser.pause function. Please do not change it
					// back to a complicated setTimeout construct.
					// We execute using a patched wdio binary in synchronous
					// mode, so browser.pause will just halt execution on our
					// end for a while.
					browser.pause(keyDelay || 10);
					webElement.keys(key);
					// !CAVEAT REFACTOR!CAVEAT REFACTOR!CAVEAT REFACTOR!
				});
			});
		} else {
			this.apply((webElement) => webElement.keys(textOrKeys));
		}
		return this;
	}
	getText() {
		return this.apply((webElement) =>
			HtmlEntities.decode(
				webElement
					.getHTML()
					.replace(/<[^>]*>/g, "")
					.trim()
			)
		);
	}
	inspect() {
		return `$$$('${this.cssSelector}', ${JSON.stringify(this.webElements)})`;
	}
	element() {
		throw new Error("#element() has been disabled because it is brittle, use #find() instead.");
	}
	elements() {
		throw new Error(
			"#elements() has been disabled because it is brittle, use #find() instead."
		);
	}
	// Will apply callback for each webElement in this.webElements;
	// if there is only 1 webElement, will return the unwrapped array
	// (i.e. the first item in the array).
	apply(callback) {
		const ddd = this;
		let result;

		const performCallbackSafely = (webElement, index) => {
			let innerResult;

			try {
				innerResult = callback(webElement);
			} catch (e) {
				// Try to refind the element in the page and try again
				try {
					log.warn(`Refinding the webElement[${index}]: ` + webElement.origCssSelector);
					// Update the original ddd using the refound ddd
					const refoundDDD = this.constructor.find(webElement.origCssSelector);
					webElement = refoundDDD.webElement;
					ddd.webElement = refoundDDD.webElement;

					// Empty the original ddd's webElements
					ddd.webElements.splice(0, ddd.webElements.length);
					refoundDDD.webElements.forEach((webElement_, index_) => {
						ddd.webElements[index_] = webElement_;
					});
					innerResult = callback(webElement);
				} catch (e2) {
					log.warn("An error occurred, consuming the error to trigger a retry!!!");
					log.warn("  `--> Original error: " + e.message);
				}
			}

			return innerResult;
		};

		if (this.webElements.length === 1) {
			result = performCallbackSafely(this.webElement);
		} else {
			result = this.webElements.map(performCallbackSafely);
		}

		return result;
	}
	[Symbol.toPrimitive]() {
		return `$$$("${this.origCssSelector}")`;
	}
	method_missing(name = "", ...args) {
		try {
			// For symbols we need explicit toString()...
			name = name.toString();

			let result;
			if (this.webElement[name] !== undefined) {
				log.debug(`Proxying ${name}(${JSON.stringify(args).slice(1, -1)})`);
				result = this.apply((webElement) => webElement[name](...args));
				log.debug(`=> ${JSON.stringify(result)}`);
			} else {
				// Method does not exist in original, so there is nothing to proxy...
				throw new Error(`WebElement: No such method: ${name}`);
			}

			return result;
		} catch (e) {
			log.error(e);
			throw e;
		}
	}
}

class Empty$$$ extends Abstract$$$ {
	constructor() {
		super();

		this.webElements = [];
		this.webElement = this.webElements[0];
	}
	get length() {
		return 0;
	}
	get selector() {
		return "";
	}
	get origCssSelector() {
		return "";
	}
	click() {
		/* abstract func */
	}
	dragAndDrop() {
		/* abstract func */
	}

	getText() {
		return "";
	}
	inspect() {
		return `Empty$$$()`;
	}
	apply() {
		return [];
	}
	method_missing() {
		return [];
	}
}

class $$$ extends Abstract$$$ {
	constructor(cssSelector, webElements) {
		super();

		this.cssSelector = cssSelector;
		this.webElements = webElements;
		this.webElement = webElements[0];

		if (!this.webElement) {
			throw new Error("$$$: Must wrap at least one actual webElement");
		}
	}
}

const custom3xDollarCommands = {};
$$$.addCommand = (commandName, command) => {
	custom3xDollarCommands[commandName] = command;
};

$$$.create = (cssSelector, webElements) => {
	const ddd = cssSelector ? new $$$(cssSelector, webElements) : new Empty$$$();
	_.extend(ddd, custom3xDollarCommands);
	return proxyMethodMissing(ddd, (...args) => ddd.method_missing(...args));
};

// This is done to get a jQuery style function operator with some
// public static functions (the $$$ class itself is private):
$$$.find = (...args) => $$$.static_find(...args);
_.extend($$$.find, {
	addCommand: $$$.addCommand,
	create: $$$.create,
});
module.exports = $$$.find;

// This must be done last so that when 3xdollar.find
// imports 3xdollar, the above module.exports already
// is set.
const { static_find, static_findIfAny } = require("./3xdollar.find.js");
$$$.static_find = static_find;
$$$.find.findIfAny = (...args) => static_findIfAny(...args);
