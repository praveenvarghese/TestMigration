const { generateOptionEditorConstructs } = require("./option-editor");

const { WithIndexSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "IndexSettings",
	editorButtonSelector: ".index-category-control",
	editorSelector: ".list-entry-items-container.open",
	//mainMethodName: "setStoreFocusSetting",
	mainMethodName: "openIndexOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openIndexOptionEditor() {
				return this;
			}

			// Kept here for the Combination Chart.
			unCollapseContents(listIdentifierName) {
				return this.webElement.find(`span[title="${listIdentifierName}"]`).click();
			}

			unCollapseIndex(listIndex) {
				return this.webElement
					.find(`.add-or-delete-list-entry-option-editor.indices-${listIndex}`)
					.click();
			}

			getNumberOfListEntrySets() {
				return this._getCountOfListEntrySets();
			}

			addIndices(
				indexSettings // Should be a list of key/value pairs
			) {
				for (const indexSetting of indexSettings) {
					const countOfListEntrySets = this._getCountOfListEntrySets();
					this.addNewListEntrySet();
					const newCountOfListEntrySets = this._getCountOfListEntrySets();
					if (countOfListEntrySets === newCountOfListEntrySets) {
						throw new Error(`Error adding Contents list entry set.`);
					}

					// Because of zero based index. Get the count of Index Sets added on page and then go for the last one added.
					const listEntryIndex = newCountOfListEntrySets - 1;
					this.openListEntrySet({ listEntryName: `indices-${listEntryIndex}` });

					this._setValue(
						`indices.${listEntryIndex}.index`,
						"VALUE",
						"ENUM",
						indexSetting.index,
						null,
						null
					);

					this._setValue(
						`indices.${listEntryIndex}.storefocus`,
						"IDENTIFIER",
						"identifier",
						indexSetting.value,
						null,
						null
					);

					this._setValue(
						`indices.${listEntryIndex}.visibility`,
						"VALUE",
						"ENUM",
						indexSetting.visibility,
						null,
						null
					);
				}
				return this;
			}

			modifyIndices(
				indexSettings // Should be a list of key/value pairs
			) {
				for (const indexSetting of indexSettings) {
					const countOfListEntrySets = this._getCountOfListEntrySets();
					if (countOfListEntrySets === 0) {
						throw new Error(
							`At least one list entry set should exist in order to modify it.`
						);
					}

					// Because of zero based index. Get the count of Index Sets added on page and then go for the last one added.
					this.openListEntrySet({ listEntryName: `indices-${indexSetting.entry}` });

					if (indexSetting.index) {
						this._setValue(
							`indices.${indexSetting.entry}.index`,
							"VALUE",
							"ENUM",
							indexSetting.index,
							null,
							null
						);
					}

					if (indexSetting.value) {
						this._setValue(
							`indices.${indexSetting.entry}.storefocus`,
							"IDENTIFIER",
							"identifier",
							indexSetting.value,
							null,
							null
						);
					}

					if (indexSetting.visibility) {
						// MB: I ran into problems when setting the value "Show" for the second time. Most probably because of the dropdown list
						//     that displays "Show" or something. I spent 2 hours on this and decided to work around it: when the value to be set is "Show",
						//     just force the _setValue to click the 'default cross', to get the value to "Show", instead of selecting it from the list.
						if (indexSetting.visibility !== "Show") {
							this._setValue(
								`indices.${indexSetting.entry}.visibility`,
								"VALUE",
								"ENUM",
								indexSetting.visibility,
								null,
								null
							);
						} else {
							this._setValue(
								`indices.${indexSetting.entry}.visibility`,
								"VALUE",
								"", // To force the clearing cross to be clicked.
								indexSetting.visibility,
								null,
								null
							);
						}
					}
				}
				return this;
			}

			getIndexOption(optionIndex, optionDisplayName) {
				// Expand the main level of this index
				this.unCollapseIndex(optionIndex);

				const optionEntryLabelElement = this.webElement.find(
					`.indices-${optionIndex} label[title="${optionDisplayName}"]`
				);

				const parentElt = optionEntryLabelElement.parent();
				const inputTag = parentElt.find(`:input`);

				return inputTag.getAttribute("title");
			}

			deleteIndex(optionIndex) {
				const deleteButton = this.webElement.find(
					`.add-or-delete-list-entry-option-editor.indices-${optionIndex} .remove-list-entry-button.icon-remove`
				);
				deleteButton.click();
			}

			moveUpIndex(optionIndex) {
				this._moveUpASet(`indices-${optionIndex}`);
				return this;
			}

			moveDownIndex(optionIndex) {
				this._moveDownASet(`indices-${optionIndex}`);
				return this;
			}
		},
});

module.exports = {
	WithIndexSettingsOptionEditor,
};
