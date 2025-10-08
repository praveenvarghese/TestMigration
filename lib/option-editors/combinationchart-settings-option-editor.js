const { generateOptionEditorConstructs } = require("./option-editor");

const { WithCombinationchartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "CombinationchartSettings",
	editorButtonSelector: ".combinationchart-widget-options-control",
	editorSelector: ".combinationchart-widget-options-container.open",
	mainMethodName: "opencombinationchartSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			opencombinationchartSettingsEditor() {
				return this;
			}

			collapseChartSettingsGroup(groupName) {
				return this.webElement.find(`div[data-option-name="${groupName}"]`).click();
			}

			// scroll() {
			// 	this._getWidgetAction().scrollIntoView(true);
			// }
		},
});

module.exports = {
	WithCombinationchartSettingsOptionEditor,
};
