const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getComputedStyle of a DOM element found through 'jQuery' css selector in the browser.
//
const Browser_getComputedStyle = function(cssSelector, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone({});
	};

	const $ = window.jQuery;
	onDone(JSON.parse(JSON.stringify(window.getComputedStyle($(cssSelector)[0]))));
};

const getComputerStyleInBrowserContext = (cssSelector) => {
	const boundingClientRect = browser.executeAsync(Browser_getComputedStyle, cssSelector);

	log.debug(
		`executeAsync(Browser_getComputedStyle, '${cssSelector}') => ${JSON.stringify(
			boundingClientRect
		)}`
	);

	if (boundingClientRect === null) {
		throw new Error("Browser_getComputedStyle yielded no result: " + cssSelector);
	}

	return boundingClientRect;
};

module.exports = {
	getComputedStyle(cssSelector, ...args) {
		if (this.webElements.length === 1) {
			return getComputerStyleInBrowserContext(this.webElement.origCssSelector, ...args);
		}

		throw new Error(
			`Refusing to getComputedStyle on multiple elements at once, as this is probably unintentional!
			 (it will at least be very slow, so better to find another way) (webElements: ${JSON.stringify(
					this.webElements
				)})`
		);
	},
};
