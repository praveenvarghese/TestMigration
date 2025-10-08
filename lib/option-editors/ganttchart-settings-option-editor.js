const { generateOptionEditorConstructs } = require("./option-editor");

const { WithGanttchartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "GanttchartSettings",
	editorButtonSelector: ".ganttchart-control",
	editorSelector: ".ganttchart-container.open",
	mainMethodName: "openGanttchartSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openGanttchartSettingsEditor() {
				return this;
			}
		},
});

module.exports = {
	WithGanttchartSettingsOptionEditor,
};
