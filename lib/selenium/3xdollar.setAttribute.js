module.exports = {
	setAttribute(...options) {
		const Browser_setAttribute = function(cssSelector, ...options_) {
			$(cssSelector).attr(...options_);
		};
		const cssSelector = this.webElement.selector;
		browser.execute(Browser_setAttribute, cssSelector, ...options);
	},
};
