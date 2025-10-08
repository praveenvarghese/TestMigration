const mixin = require("../mixin");
const { Widget } = require("./widget");
const {
	WithCustomCollapsibleTitlesOptionEditor,
} = require("../option-editors/custom-collapsible-title-category1-option-editor.js");

class CustomCollapsibleTitle extends mixin(Widget, WithCustomCollapsibleTitlesOptionEditor) {
	isBlue() {
		return false;
	}
}

module.exports = {
	CustomCollapsibleTitle,
	onRegisterWidgetTypes(registry) {
		registry["custom-collapsible-title"] = CustomCollapsibleTitle;
	},
};
