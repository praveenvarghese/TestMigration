const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// 'closest' of a DOM element found through 'jQuery' css selector in the browser.
//
const Browser_getClosest = function({ origCssSelector, closestSelector }, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone({});
	};

	const $ = window.jQuery;
	return onDone($(origCssSelector).closest(closestSelector));
};

const getClosestInBrowserContext = (origCssSelector, closestSelector) => {
	const closestElement = browser.executeAsync(Browser_getClosest, {
		origCssSelector,
		closestSelector,
	});

	log.debug(
		`executeAsync(Browser_getClosest, '${origCssSelector}') => ${JSON.stringify(
			closestElement
		)}`
	);

	if (closestElement === null) {
		throw new Error("Browser_getClosest yielded no result: " + closestSelector);
	}

	return closestElement;
};

module.exports = {
	getClosest(cssSelector, ...args) {
		if (this.webElements.length === 1) {
			return getClosestInBrowserContext(
				this.webElement.origCssSelector,
				cssSelector,
				...args
			);
		}

		throw new Error(
			`Refusing to getClosest on multiple elements at once, as this is probably unintentional!
			 (it will at least be very slow, so better to find another way) (webElements: ${JSON.stringify(
					this.webElements
				)})`
		);
	},
};
