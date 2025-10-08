const { generateOptionEditorConstructs } = require("./option-editor");
const { WithBubblechartSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "BubblechartSettings",
	editorButtonSelector: ".bubblechart-control",
	editorSelector: ".bubblechart-container.open",
	mainMethodName: "openBubbleChartSettingsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openBubbleChartSettingsOptionEditor() {
				return this;
			}
			getBubbleChartSetting(optionName) {
				let bubbleOptionEntry = null;
				this.OptionName = optionName;
				const optionEntryLabelElement = this.webElement.findIfAny(
					`[title = "${optionName}"]`
				);

				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.IsOldOptionEntryType =
						this.OptionEntry.parent()
							.getAttribute("class")
							.split(" ")
							.indexOf("literal-or-aimms-single-line-option-editor") === -1;
					bubbleOptionEntry = this;
				}
				return bubbleOptionEntry;
			}
		},
});

module.exports = {
	WithBubblechartSettingsOptionEditor,
};
