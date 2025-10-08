const { static_find } = require("./3xdollar.find");

module.exports = {
	idify(cssSelector, ...args) {
		// Find will make sure that there is an id attribute added.
		static_find(`${this.webElement.selector} ${cssSelector}`, ...args);
	},
};
