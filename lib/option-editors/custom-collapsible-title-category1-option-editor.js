const { generateOptionEditorConstructs } = require("./option-editor");

const { WithCustomCollapsibleTitlesOptionEditor } = generateOptionEditorConstructs({
	name: "CustomCollapsibleTitles",
	editorButtonSelector: ".category-1-control",
	editorSelector: ".category-1-container.open",
	mainMethodName: "CustomCollapsibleTitlesOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			CustomCollapsibleTitlesOptionEditor() {
				return this;
			}

			addSet(optionAInfo, optionBInfo) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Title list entry set.`);
				}

				//Because of zero based index. Get the count of Sets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				optionAInfo &&
					this._setValue(
						`samples.${listEntryIndex}.optionA`,
						"VALUE",
						optionAInfo.type,
						optionAInfo.value,
						optionAInfo.slice
					);

				optionBInfo &&
					this._setValue(
						`samples.${listEntryIndex}.optionB`,
						"VALUE",
						optionBInfo.type,
						optionBInfo.value,
						optionBInfo.slice
					);

				return this;
			}

			getTitle(listEntryNumber) {
				// The selector for the Title is different in for the cases in which the title is collapsed or expanded.
				const title = this.webElement.findIfAny(
					`.add-or-delete-list-entry-option-editor.samples-${listEntryNumber}.expanded .header[title]`
				);

				// If a title was found, we were in expanded mode. Return the title.
				if (title.any()) {
					return title.getText();
				}

				// We were in collapsed mode. Find and return the title.
				return this.webElement
					.find(
						`.add-or-delete-list-entry-option-editor.samples-${listEntryNumber} .header[title]`
					)
					.getText();
			}

			editSet(listSetsIndexNumber, optionAInfo, optionBInfo) {
				if (!this._hasListEntrySet(`samples-${listSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "samples.${listSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `samples-${listSetsIndexNumber}` });
				optionAInfo &&
					this._setValue(
						`samples.${listSetsIndexNumber}.optionA`,
						"VALUE",
						optionAInfo.type,
						optionAInfo.value,
						optionAInfo.slice
					);

				optionBInfo &&
					this._setValue(
						`samples.${listSetsIndexNumber}.optionB`,
						"VALUE",
						optionBInfo.type,
						optionBInfo.value,
						optionBInfo.slice
					);

				return this;
			}

			deleteSet(listSetsIndexNumber) {
				this._deleteListEntrySet(`samples-${listSetsIndexNumber}`);
				return this;
			}

			getNumberOfListEntries() {
				return this._getCountOfListEntrySets();
			}

			getEditorTitle() {
				return this.webElement.find(`.category-1-control.toolbar-button`).getText();
			}
		},
});

module.exports = {
	WithCustomCollapsibleTitlesOptionEditor,
};
