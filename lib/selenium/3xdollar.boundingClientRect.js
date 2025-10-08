const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getBoundingClientRect of a DOM element found through 'jQuery' css selector in the browser.
//
const Browser_getBoundingClientRect = function(cssSelector, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone({});
	};

	const $ = window.jQuery;
	onDone($(cssSelector)[0].getBoundingClientRect());
};

const getBoundingClientRectInBrowserContext = (cssSelector) => {
	const boundingClientRect = browser.executeAsync(Browser_getBoundingClientRect, cssSelector);

	log.debug(
		`executeAsync(Browser_getBoundingClientRect, '${cssSelector}') => ${JSON.stringify(
			boundingClientRect
		)}`
	);

	if (boundingClientRect === null) {
		throw new Error("Browser_getBoundingClientRect yielded no result: " + cssSelector);
	}

	return boundingClientRect;
};

module.exports = {
	// Example BoundingClientRect:
	// {
	//   top: 163.53125,
	//   left: 10,
	//   bottom: 775,
	//   width: 75.671875,
	//   x: 10,
	//   y: 163.53125,
	//   right: 85.671875,
	//   height: 611.46875
	// }
	getBoundingClientRect(cssSelector, ...args) {
		if (this.webElements.length === 1) {
			return getBoundingClientRectInBrowserContext(this.webElement.origCssSelector, ...args);
		}

		throw new Error(
			`Refusing to getBoundingClientRect on multiple elements at once, as this is probably unintentional!
			 (it will at least be very slow, so better to find another way) (webElements: ${JSON.stringify(
					this.webElements
				)})`
		);
	},
};
