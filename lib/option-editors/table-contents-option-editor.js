const { generateOptionEditorConstructs } = require("./option-editor");

const { WithTableContentsOptionEditor } = generateOptionEditorConstructs({
	name: "TableContents",
	editorButtonSelector: ".datasource-contents-control.toolbar-button",
	editorSelector: ".datasource-contents-container.list-entry-items-container.open",
	mainMethodName: "openTableContentsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openTableContentsOptionEditor() {
				return this;
			}

			UncollapseListEntrySet(listEntryIndex) {
				return this.openListEntrySet({ listEntryName: `contents-${listEntryIndex}` });
			}

			addContents(
				indexInfo = null,
				displayDomainInfo = null,
				decimalPlacesInfo = null,
				showUnitsInfo = null,
				identifierVisibilityInfo = null,
				readOnlyInfo = null
			) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Contents list entry set.`);
				}

				//Because of zero based index. Get the count of NodeSets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				this.openListEntrySet({ listEntryName: `nodes-${listEntryIndex}` });
				indexInfo &&
					this._setValue(
						`contents.${listEntryIndex}.index`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				displayDomainInfo &&
					this._setValue(
						`contents.${listEntryIndex}.displaydomain`,
						"VALUE",
						displayDomainInfo.type,
						displayDomainInfo.value,
						displayDomainInfo.slice
					);

				decimalPlacesInfo &&
					this._setValue(
						`contents.${listEntryIndex}.numdecimals`,
						"VALUE",
						decimalPlacesInfo.type,
						decimalPlacesInfo.value,
						decimalPlacesInfo.slice
					);

				showUnitsInfo &&
					this._setValue(
						`contents.${listEntryIndex}.show.units`,
						"VALUE",
						showUnitsInfo.type,
						showUnitsInfo.value,
						showUnitsInfo.slice
					);

				identifierVisibilityInfo &&
					this._setValue(
						`contents.${listEntryIndex}.visibility`,
						"VALUE",
						identifierVisibilityInfo.type,
						identifierVisibilityInfo.value,
						identifierVisibilityInfo.slice
					);

				readOnlyInfo &&
					this._setValue(
						`contents.${listEntryIndex}.readonly`,
						"VALUE",
						readOnlyInfo.type,
						readOnlyInfo.value,
						readOnlyInfo.slice
					);
				return this;
			}

			modifyContents(
				listSetsIndexNumber = null,
				indexInfo = null,
				displayDomainInfo = null,
				decimalPlacesInfo = null,
				showUnitsInfo = null,
				identifierVisibilityInfo = null,
				readOnlyInfo = null
			) {
				if (!this._hasListEntrySet(`contents-${listSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "contents.${listSetsIndexNumber}" contents list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `contents-${listSetsIndexNumber}` });
				indexInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.identifier`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				displayDomainInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.displaydomain`,
						"VALUE",
						displayDomainInfo.type,
						displayDomainInfo.value,
						displayDomainInfo.slice
					);

				decimalPlacesInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.numdecimals`,
						"VALUE",
						decimalPlacesInfo.type,
						decimalPlacesInfo.value,
						decimalPlacesInfo.slice
					);

				showUnitsInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.show.units`,
						"VALUE",
						showUnitsInfo.type,
						showUnitsInfo.value,
						showUnitsInfo.slice
					);

				identifierVisibilityInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.visibility`,
						"VALUE",
						identifierVisibilityInfo.type,
						identifierVisibilityInfo.value,
						identifierVisibilityInfo.slice
					);

				readOnlyInfo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.readonly`,
						"VALUE",
						readOnlyInfo.type,
						readOnlyInfo.value,
						readOnlyInfo.slice
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
	WithTableContentsOptionEditor,
};
