const { generateOptionEditorConstructs } = require("./option-editor");

const { WithApplicationMenuSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "ApplicationMenuSettings",
	editorButtonSelector: ".menu-bar-settings-control",
	editorSelector: ".menu-bar-settings-container.open",
	mainMethodName: "openApplicationMenuSettingsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openApplicationMenuSettingsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithApplicationMenuSettingsOptionEditor,
};
