const { generateOptionEditorConstructs } = require("./option-editor");
const { WithMiscellaneousOptionEditor } = generateOptionEditorConstructs({
	name: "Miscellaneous",
	editorButtonSelector: ".miscellaneous-control.toolbar-button",
	editorSelector: ".miscellaneous-container.open",
	mainMethodName: "openMiscellaneousOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openMiscellaneousOptionEditor() {
				return this;
			}
			getMiscOption(optionName) {
				let miscOptionEntry = null;
				this.OptionName = optionName;
				const optionEntryLabelElement = this.webElement.findIfAny(
					`label:contains("${optionName}")`
				);

				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.IsOldOptionEntryType =
						this.OptionEntry.parent()
							.getAttribute("class")
							.split(" ")
							.indexOf("literal-or-aimms-single-line-option-editor") === -1;

					miscOptionEntry = this;
				}
				return miscOptionEntry;
			}
		},
});

module.exports = {
	WithMiscellaneousOptionEditor,
};
