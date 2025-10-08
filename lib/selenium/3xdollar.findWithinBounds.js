const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const $$$ = require("./3xdollar");

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getBoundingClientRect of a DOM element found through 'jQuery' css selector in the browser.
//
const Browser_findWithinBounds = function(scopeCssSelector, childCssSelector, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone({});
	};

	const $ = window.jQuery;
	const scopeElQ = $(scopeCssSelector);
	const scopeBounds = scopeElQ[0].getBoundingClientRect();
	const elQsFoundWithinBounds = $.makeArray(scopeElQ.find(childCssSelector)).filter((child) => {
		const childBounds = child.getBoundingClientRect();

		return (
			childBounds.top >= scopeBounds.top &&
			childBounds.right <= scopeBounds.right &&
			childBounds.bottom <= scopeBounds.bottom &&
			childBounds.left >= scopeBounds.left
		);
	});

	onDone(elQsFoundWithinBounds.map((e) => $(e).idify()));
};

const findWithinBoundsInBrowserContext = (scopeCssSelector, childCssSelector) => {
	const ids = browser.executeAsync(Browser_findWithinBounds, scopeCssSelector, childCssSelector);

	log.debug(`executeAsync(Browser_findWithinBounds, '${scopeCssSelector}') => ${ids}`);

	if (ids.length === 0) {
		throw new Error("Browser_findWithinBounds yielded no result: " + scopeCssSelector);
	}

	return ids;
};

module.exports = {
	// Find all (descendant) elements matching the cssSelector
	findWithinBounds(childCssSelector, ...args) {
		if (this.webElements.length === 1) {
			const ids = findWithinBoundsInBrowserContext(
				this.webElement.origCssSelector,
				childCssSelector,
				...args
			);
			const webElements = ids.map((id) => {
				const webElement = $(`#${id}`);
				webElement.origCssSelector = childCssSelector;
				return webElement;
			});
			return $$$.create(childCssSelector, webElements);
		}

		throw new Error(
			`Refusing to findWithinBounds on multiple elements at once, as this is probably unintentional!
			 (it will at least be very slow, so better to find another way) (webElements: ${JSON.stringify(
					this.webElements
				)})`
		);
	},
};
