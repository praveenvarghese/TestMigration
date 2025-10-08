module.exports = {
	async dnd(options) {
		const Browser_dnd = function(cssSelector, options_, onDone) {
			// Per selenium.executeAsync, we must return upon unload event:
			window.onunload = function() {
				onDone();
			};

			try {
				const $ = window.jQuery;
				$(cssSelector)
					.dnd(options_)
					.then(onDone)
					.catch((e) => {
						// eslint-disable-next-line no-console
						console.error(e);
						onDone();
					});
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
				onDone();
			}
		};

		const cssSelector = this.webElement.selector;
		await browser.executeAsync(Browser_dnd, cssSelector, options);
	},
};
