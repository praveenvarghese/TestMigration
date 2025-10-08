const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

//////////////////////////////////////////////////////////////////////////////////////////////
//
// getElementFromPoint retrives the DOM element found at given viewport coordinates
//
const Browser_getElementFromPoint = function({ x, y }, onDone) {
	// Per selenium.executeAsync, we must return upon unload event:
	window.onunload = function() {
		return onDone();
	};

	const element = document.elementFromPoint(x, y);

	onDone(element);
};

const getElementFromPoint = ({ x, y }) => {
	const element = browser.executeAsync(Browser_getElementFromPoint, { x, y });

	log.debug(`executeAsync(Browser_getElementFromPoint, '@(${x},${y}) => ${element}`);

	if (element === null) {
		throw new Error(`Browser_getElementFromPoint yielded no result: ${x},${y}`);
	}

	return element;
};

module.exports = {
	getElementFromPoint({ x, y }, ...args) {
		if (this.webElements.length === 1) {
			return getElementFromPoint({ x, y }, ...args);
		}

		throw new Error(
			`Refusing to getElementFromPoint on multiple elements at once, as this is probably unintentional!
			(webElements: ${JSON.stringify(this.webElements)})`
		);
	},
};
