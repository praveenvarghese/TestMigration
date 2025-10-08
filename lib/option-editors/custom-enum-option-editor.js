const { generateOptionEditorConstructs } = require("./option-editor");

const { WithCustomEnumOptionEditor } = generateOptionEditorConstructs({
	name: "CustomEnum",
	editorButtonSelector: ".category-1-control",
	editorSelector: ".category-1-container.open",
	mainMethodName: "CustomEnumOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			CustomEnumOptionEditor() {
				return this;
			}

			addSet(option1, option2, option3, option4) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Title list entry set.`);
				}

				//Because of zero based index. Get the count of Sets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				this.openListEntrySet({ listEntryName: `contents-${listEntryIndex}` });
				option1 &&
					this._setValue(
						`contents.${listEntryIndex}.identifier`,
						"VALUE",
						option1.type,
						option1.value,
						option1.slice
					);

				option2 &&
					this._setValue(
						`contents.${listEntryIndex}.index`,
						"VALUE",
						option2.type,
						option2.value
					);

				option3 &&
					this._setValue(
						`contents.${listEntryIndex}.type`,
						"VALUE",
						option3.type,
						option3.value
					);

				option4 &&
					this._setValue(
						`contents.${listEntryIndex}.procedure`,
						"VALUE",
						option4.type,
						option4.value
					);

				return this;
			}

			getTitle(listEntryNumber) {
				// The selector for the Title is different in for the cases in which the title is collapsed or expanded.
				let title = this.webElement.findIfAny(
					`.add-or-delete-list-entry-option-editor.contents-${listEntryNumber}.expanded .header`
				);

				// If a title was found, we were in expanded mode. Return the title.
				if (title.any()) {
					return title.getText();
				}

				// We were in collapsed mode. Find and return the title.
				title = this.webElement
					.find(`.add-or-delete-list-entry-option-editor.contents-${listEntryNumber}`)
					.header.getText();
				return title;
			}

			editSet(listSetsIndexNumber, option1, option2, option3, option4) {
				if (!this._hasListEntrySet(`contents-${listSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "contents.${listSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `contents-${listSetsIndexNumber}` });
				option1 &&
					this._setValue(
						`contents.${listSetsIndexNumber}.identifier`,
						"VALUE",
						option1.type,
						option1.value,
						option1.slice
					);

				option2 &&
					this._setValue(
						`contents.${listSetsIndexNumber}.index`,
						"VALUE",
						option2.type,
						option2.value
					);

				option3 &&
					this._setValue(
						`contents.${listSetsIndexNumber}.type`,
						"VALUE",
						option3.type,
						option3.value
					);

				option4 &&
					this._setValue(
						`contents.${listSetsIndexNumber}.procedure`,
						"VALUE",
						option4.type,
						option4.value
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

			getButtonTitle() {
				return this.webElement.find(`.add-list-entry-button .ui-button-text`).getText();
			}
		},
});

module.exports = {
	WithCustomEnumOptionEditor,
};
