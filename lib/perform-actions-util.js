// Examples can be found in:
// https://github.com/jlipps/simple-wd-spec#perform-actions
// https://w3c.github.io/webdriver/#actions
module.exports = {
	positionClick(element, x, y) {
		browser.performActions([
			{
				type: "pointer",
				id: "finger1",
				parameters: { pointerType: "mouse" },
				actions: [
					{
						type: "pointerMove",
						origin: element,
						x,
						y,
					},
					{ type: "pointerDown", button: 0 },
					{ type: "pause", duration: 300 }, // in ms
					{ type: "pointerUp", button: 0 },
				],
			},
		]);
	},
};
