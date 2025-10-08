module.exports = {
	simsort(options) {
		const Browser_simsort = (cssSelector, options_) => {
			$(cssSelector).simsort(options_);
		};
		const cssSelector = this.webElement.selector;
		browser.execute(Browser_simsort, cssSelector, options);
	},
};
