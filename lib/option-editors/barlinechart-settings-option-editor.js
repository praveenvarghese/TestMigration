const { generateOptionEditorConstructs } = require("./option-editor");

const { WithBarLineChartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "BarLineChartSettings",
	editorButtonSelector: ".barline-chart-settings-control",
	editorSelector: ".barline-chart-settings-container.open",
	mainMethodName: "openBarLineChartSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openBarLineChartSettingsEditor() {
				return this;
			}
		},
});

module.exports = {
	WithBarLineChartSettingsOptionEditor,
};
