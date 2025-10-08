const { generateOptionEditorConstructs } = require("./option-editor");

const { WithHighChartContentsOptionEditor } = generateOptionEditorConstructs({
	name: "HighChartContents",
	editorButtonSelector: ".contents-control.toolbar-button",
	editorSelector: ".contents-container.list-entry-items-container.open",
	mainMethodName: "HighChartContentsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			HighChartContentsOptionEditor() {
				return this;
			}

			UncollapseListEntrySet(listEntryIndex) {
				return this.openListEntrySet({ listEntryName: `contents-${listEntryIndex}` });
			}

			addSet(option1, option2) {
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
						`contents.${listEntryIndex}.displaydomain`,
						"VALUE",
						option1.type,
						option1.value,
						option1.slice
					);

				return this;
			}

			getTitle(listEntryNumber) {
				// The selector for the Title is different in for the cases in which the title is collapsed or expanded.
				let title = this.webElement.findIfAny(
					`.add-or-delete-list-entry-option-editor.contents-${listEntryNumber}.expanded`
				);

				// If a title was found, we were in expanded mode. Return the title.
				if (title.any()) {
					return title.getText();
				}

				// We were in collapsed mode. Find and return the title.
				title = this.webElement
					.find(`.add-or-delete-list-entry-option-editor.contents-${listEntryNumber}`)
					.getText();
				return title;
			}

			editSet(listSetsIndexNumber, option1, option2) {
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
						`contents.${listSetsIndexNumber}.displaydomain`,
						"VALUE",
						option2.type,
						option2.value,
						option2.slice
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

			unCollapseContents(listIdentifierName) {
				// this.openListEntrySet({ listEntryName: `span[title="${listIdentifierName}"]` });
				return this.webElement.find(`span[title="${listIdentifierName}"]`).click();
				// return this.webElement.find(`div[data-option-name="${groupName}"]`).click();
			}

			collapseContents(listIdentifierName) {
				// this.closeListEntrySet({ listEntryName: `span[title="${listIdentifierName}"]` });
				return this.webElement.find(`span[title="${listIdentifierName}"]`).click();
				// return this.webElement.find(`div[data-option-name="${groupName}"]`).click();
			}

			collapseDefaults() {
				return this.webElement.find(`div[data-option-name="Defaults"]`).click();
			}

			getContentsOption(optionIndex, optionDisplayName) {
				let bubbleOptionEntry = null;
				this.OptionName = optionDisplayName;
				const optionEntryLabelElement = this.webElement.findIfAny(
					// `div[data-option-name="contents.${optionIndex}.chart.axis.y.select"] label[title="${optionDisplayName}"]`
					`.contents-${optionIndex} label[title="${optionDisplayName}"]`
				);
				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.IsOldOptionEntryType = false;
					bubbleOptionEntry = this;
				}
				return bubbleOptionEntry;
			}
		},
});

module.exports = {
	WithHighChartContentsOptionEditor,
};
