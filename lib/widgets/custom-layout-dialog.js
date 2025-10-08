const { RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");

class CustomLayout extends FrameworkObject {
	getCustomLayoutTitle() {
		return this.webElement.find(".layout-editor__layout-name-input").getValue();
	}
	_setLayoutName(layoutName) {
		return this.webElement.find(".layout-editor__layout-name-input").setValue(layoutName);
	}

	_setLayoutContent(layoutContent) {
		this.webElement.find(".view-lines").click();
		browser.keys([SPECIAL_KEYS.left_control, "a"]);
		browser.keys([SPECIAL_KEYS.delete]);
		return this.webElement.keys(JSON.stringify(layoutContent));
	}

	edit({ layoutName = null, layoutContent = null }) {
		if (layoutName !== null && layoutContent !== null) {
			this._setLayoutName(layoutName);
			this._setLayoutContent(layoutContent);
		} else if (layoutContent !== null && layoutName === null) {
			this._setLayoutContent(layoutContent);
		} else if (layoutContent === null && layoutName !== null) {
			this._setLayoutName(layoutName);
		}
	}

	getLayoutContent() {
		return JSON.stringify(this.webElement.find(".view-lines").innerText);
	}

	save() {
		return this.webElement.find(`.ui-button-text:textMatches(/Save/i)`).click();
	}

	cancel() {
		return this.webElement.find(`.ui-button-text:textMatches(/Cancel/i)`).click();
	}
}

// get does not guarantee to find; can be used with .should(.not).exist
CustomLayout.get = () => {
	const webElement = $$$.findIfAny("body > .awf-dialog");
	return webElement.any() ? new CustomLayout(webElement) : null;
};

const getCustomLayoutDialog = new RootAction("getCustomLayoutDialog", () => CustomLayout.get());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getCustomLayoutDialog);
	},
};
