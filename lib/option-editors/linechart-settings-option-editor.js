const { generateOptionEditorConstructs } = require("./option-editor");

const { WithLinechartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "LinechartSettings",
	editorButtonSelector: ".line-chart-settings-control",
	editorSelector: ".line-chart-settings-container.open",
	mainMethodName: "openLinechartSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openLinechartSettingsEditor() {
				return this;
			}
		},
});

module.exports = {
	WithLinechartSettingsOptionEditor,
};
