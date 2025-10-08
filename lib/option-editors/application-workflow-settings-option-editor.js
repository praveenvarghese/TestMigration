const { generateOptionEditorConstructs } = require("./option-editor");

const { WithApplicationWorkflowSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "ApplicationWorkflowSettings",
	editorButtonSelector: ".workflow-settings-control",
	editorSelector: ".workflow-settings-container.open",
	mainMethodName: "openApplicationWorkflowSettingsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openApplicationWorkflowSettingsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithApplicationWorkflowSettingsOptionEditor,
};
