const { generateOptionEditorConstructs } = require("./option-editor");

const { WithBarchartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "BarchartSettings",
	editorButtonSelector: ".bar-chart-settings-control",
	editorSelector: ".bar-chart-settings-container.open",
	mainMethodName: "openBarchartSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openBarchartSettingsEditor() {
				return this;
			}
		},
});

module.exports = {
	WithBarchartSettingsOptionEditor,
};
