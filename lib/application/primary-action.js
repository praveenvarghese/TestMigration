const { FrameworkObject } = require("../framework-object");

class PrimaryAction extends FrameworkObject {
	_getButton() {
		const primaryActionElement = this.webElement.findIfAny(".primary-btn:isVisible");
		return primaryActionElement.any() ? primaryActionElement : null;
	}

	getButton() {
		const primaryActionElement = this.webElement.findIfAny(".primary-btn:isVisible");
		return primaryActionElement.any() ? primaryActionElement : "None";
	}

	getTitle() {
		const optimizeButton = this._getButton();
		return optimizeButton ? optimizeButton.find(".primary-btn-name").getText() : "";
	}

	_hasClass(className) {
		const primaryActionElement = this._getButton();
		if (!primaryActionElement) throw new Error(`Cannot find Primary page action.`);

		return (
			primaryActionElement
				.find(".primary-btn-icon")
				.webElement.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}

	hasIcon(icon) {
		return this._hasClass(icon);
	}

	isAnActiveAction() {
		return this._hasClass("primary-page-action-inactive") ? false : true;
	}

	click() {
		const primaryActionElement = this._getButton().find(".primary-btn-icon");
		if (primaryActionElement) {
			primaryActionElement.click();
		} else {
			throw new Error(`Cannot find Primary page action.`);
		}
	}
}

module.exports = PrimaryAction;
