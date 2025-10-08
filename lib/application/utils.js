const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");

const isElementVisible = (selector) => $(selector).isDisplayed();

const mouseHoverMenuButton = () => {
	$$$("body .menu-holder .menu-btn").moveTo();
};

const isElementVisibleRoot = new RootAction("isElementVisible", isElementVisible);
const mouseHoverMenuButtonRoot = new RootAction("mouseHoverMenuButton", mouseHoverMenuButton);

module.exports = {
	isElementVisible,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(isElementVisibleRoot, mouseHoverMenuButtonRoot);
	},
};
