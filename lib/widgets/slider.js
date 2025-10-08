const mixin = require("../mixin");
const { Widget } = require("./widget");
const { WithOptionDialog } = require("../option-editors/optiondialog");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");
const { WithMiscellaneousOptionEditor } = require("../option-editors/misc-option-editor.js");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");

class Slider extends mixin(
	Widget,
	WithOptionDialog,
	WithGenericContentsOptionEditor,
	WithIdentifierSettingsOptionEditor,
	WithMiscellaneousOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions
) {
	getMessage() {
		return this.webElement.find(".icon-equalizer2").getText();
	}

	slideLeft() {
		// @TODO
		return this;
	}

	slideLeftToEnd() {
		// @TODO
		return this;
	}

	slideRight() {
		// @TODO
		return this;
	}

	slideRightToEnd() {
		// @TODO
		return this;
	}

	moveSlider(textOrKeys, keyDelay) {
		this.webElement.find(".slider-body").click();
		this.webElement.find(".slider-body").keys(textOrKeys, keyDelay);
		return this;
	}

	getIdentifier() {
		return this.webElement.find(".slider-identifier").getText();
	}

	getValue() {
		return this.webElement.find(".slider-value").getText();
	}

	isSliderDisabled() {
		return (
			this.webElement
				.find(".slider-body")
				.getAttribute("class")
				.split(" ")
				.indexOf("ui-state-disabled") !== -1
		);
	}
}

module.exports = {
	Slider,
	onRegisterWidgetTypes(registry) {
		registry["slider"] = Slider;
	},
};
