const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getElementScale of a DOM element found through 'jQuery' css selector in the browser.
// Compares the offsetWidths with the BoundingClientRect width, to see if transformations have been applied
//
const Browser_getElementScale = function(cssSelector, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone(1);
	};

	const $ = window.jQuery;
	const element = $(cssSelector)[0];

	const scale =
		element.getBoundingClientRect().width /
		(!!element.closest("svg") ? element.getAttribute("width") : element.offsetWidth);

	onDone(scale);
};

const getElementScaleInBrowserContext = (cssSelector) => {
	const scale = browser.executeAsync(Browser_getElementScale, cssSelector);

	log.debug(`executeAsync(Browser_getElementScale, '${cssSelector}') => ${scale}`);

	if (scale === null) {
		throw new Error("Browser_getElementScale yielded no result: " + cssSelector);
	}

	return scale;
};

module.exports = {
	getElementScale(cssSelector, ...args) {
		if (this.webElements.length === 1) {
			return getElementScaleInBrowserContext(this.webElement.origCssSelector, ...args);
		}

		throw new Error(
			`Refusing to getElementScale on multiple elements at once, as this is probably unintentional!
			(webElements: ${JSON.stringify(this.webElements)})`
		);
	},
};
