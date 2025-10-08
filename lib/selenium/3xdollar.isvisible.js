module.exports = {
	isVisible() {
		const Browser_isVisible = function(cssSelector, onDone) {
			// Per selenium.executeAsync, we must return upon unload event:
			window.onunload = function() {
				onDone();
			};

			const $ = window.jQuery;
			onDone($(cssSelector).isVisible());
		};

		const cssSelector = this.webElement.selector;
		return browser.executeAsync(Browser_isVisible, cssSelector);
	},
};
