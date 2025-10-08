const { Widget } = require("./widget");
const mixin = require("../mixin");

const {
	WithApplicationExtensionsOptionEditor,
} = require("../option-editors/application-extensions-option-editor");

const {
	WithApplicationMenuSettingsOptionEditor,
} = require("../option-editors/application-menu-settings-option-editor");

const {
	WithApplicationWorkflowSettingsOptionEditor,
} = require("../option-editors/application-workflow-settings-option-editor");

class Application extends mixin(
	Widget,
	WithApplicationExtensionsOptionEditor,
	WithApplicationWorkflowSettingsOptionEditor,
	WithApplicationMenuSettingsOptionEditor
) {
	// Application widget has a non-standard double optiondialog-nib, because the page optiondialog-nib also lives there
	findOptionDialogNib() {
		return this.webElement.find(".settings-area .optiondialog-nib");
	}

	findPageSettingNib() {
		return this.webElement.find(".tools .optiondialog-nib");
	}
}

module.exports = {
	Application,
	onRegisterWidgetTypes(registry) {
		registry["application"] = Application;
	},
};
