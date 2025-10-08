const { generateOptionEditorConstructs } = require("./option-editor");
const { WithListSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "ListSettings",
	editorButtonSelector: ".list-settings-control.toolbar-button",
	editorSelector: ".list-settings-container.open",
	mainMethodName: "openListSettingsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openListSettingsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithListSettingsOptionEditor,
};
