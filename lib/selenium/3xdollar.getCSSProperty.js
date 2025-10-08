const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getCSSStyleProperty of a DOM element found through 'jQuery' css selector in the browser.
//
const Browser_getCSSStyleProperty = function(cssSelector, property, onDone) {
	try {
		// Per selenium.executeAsync, we must return upon unload event:
		window.onunload = function() {
			return onDone(null);
		};

		const $ = window.jQuery;
		if (!$) {
			throw new Error("jQuery is not loaded on the page.");
		}

		if (!cssSelector || !property) {
			throw new Error(`Invalid inputs: cssSelector: ${cssSelector}, property: ${property}`);
		}

		const element = $(cssSelector);
		if (element.length === 0) {
			throw new Error(`No element found for selector: ${cssSelector}`);
		}

		const propertyValue = element.css(property);
		return onDone(propertyValue);
	} catch (error) {
		return onDone(null);
	}
};

const getCSSStylePropertyInBrowserContext = (cssSelector, property) => {
	try {
		const propertyValue = browser.executeAsync(
			Browser_getCSSStyleProperty,
			cssSelector,
			property
		);

		log.debug(
			`executeAsync(Browser_getCSSStyleProperty, '${cssSelector}', '${property}') => ${JSON.stringify(
				propertyValue
			)}`
		);

		if (propertyValue === null) {
			throw new Error(
				`Browser_getCSSStyleProperty yielded no result: ${cssSelector} for property: ${property}`
			);
		}

		return propertyValue;
	} catch (error) {
		log.error(`Error in getCSSStylePropertyInBrowserContext: ${error.message}`);
		throw error;
	}
};

module.exports = {
	getCSSStyleProperty(property) {
		if (this.webElements.length === 1) {
			return getCSSStylePropertyInBrowserContext(this.webElement.origCssSelector, property);
		}

		throw new Error(
			`Refusing to getCSSStyleProperty on multiple elements at once, as this is probably unintentional! ` +
				`(it will at least be very slow, so better to find another way) (webElements: ${JSON.stringify(
					this.webElements
				)})`
		);
	},
};
