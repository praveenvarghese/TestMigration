const { generateOptionEditorConstructs } = require("../option-editor");

const { WithCustomListEntryOptionEditor } = generateOptionEditorConstructs({
	name: "CustomListEntry",
	editorButtonSelector: ".custom_list_entry_option-control",
	editorSelector: ".custom_list_entry_option-container.open",
	mainMethodName: "getCustomListEntryOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomListEntryOptionEditor() {
				return this;
			}

			addListEntryInfo(optionsInfo) {
				optionsInfo.forEach(
					({
						optionName,
						listEntryType,
						optionValueType,
						optionValue,
						sliceValue,
						storeFocusValue,
					}) => {
						this._setValue(
							optionName,
							listEntryType,
							optionValueType,
							optionValue,
							sliceValue,
							storeFocusValue
						);
					}
				);
				return this;
			}

			clearListEntryOption(optionsInfo) {
				optionsInfo.forEach(({ optionName }) => {
					this.clearSetValue(optionName);
				});
				return this;
			}
		},
});

module.exports = {
	WithCustomListEntryOptionEditor,
};
