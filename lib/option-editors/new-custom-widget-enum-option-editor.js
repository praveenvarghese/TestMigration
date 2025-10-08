const { generateOptionEditorConstructs } = require("./option-editor");

const { WithNewCustomWidgetEnumOptionEditor } = generateOptionEditorConstructs({
	name: "NewCustomWidgetEnum",
	editorButtonSelector: ".category-1-control",
	editorSelector: ".category-1-container.open",
	mainMethodName: "getNewCustomWidgetEnumOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getNewCustomWidgetEnumOptionEditor() {
				return this;
			}

			addSet(
				contentsType,
				contentsIndexFrom,
				contentsIndexTo,
				contentsIndentifier,
				contentsNumDecimals
			) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Title list entry set.`);
				}

				//Because of zero based index. Get the count of Sets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				contentsType &&
					this._setValue(
						`contents.${listEntryIndex}.type`,
						"VALUE",
						contentsType.type,
						contentsType.value,
						contentsType.slice
					);

				contentsIndexFrom &&
					this._setValue(
						`contents.${listEntryIndex}.indexfrom`,
						"VALUE",
						contentsIndexFrom.type,
						contentsIndexFrom.value,
						contentsIndexFrom.slice
					);

				contentsIndexTo &&
					this._setValue(
						`contents.${listEntryIndex}.indexto`,
						"VALUE",
						contentsIndexTo.type,
						contentsIndexTo.value,
						contentsIndexTo.slice
					);

				contentsIndentifier &&
					this._setValue(
						`contents.${listEntryIndex}.identifier`,
						"VALUE",
						contentsIndentifier.type,
						contentsIndentifier.value,
						contentsIndentifier.slice
					);

				contentsNumDecimals &&
					this._setValue(
						`contents.${listEntryIndex}.numdecimals`,
						"VALUE",
						contentsNumDecimals.type,
						contentsNumDecimals.value,
						contentsNumDecimals.slice
					);
				return this;
			}

			editSet(
				listSetsIndexNumber,
				contentsType,
				contentsIndexFrom,
				contentsIndexTo,
				contentsIndentifier,
				contentsNumDecimals
			) {
				if (!this._hasListEntrySet(`contents-${listSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "contents.${listSetsIndexNumber}"  list entry set.`
					);
				}
				contentsType &&
					this._setValue(
						`contents.${listSetsIndexNumber}.type`,
						"VALUE",
						contentsType.type,
						contentsType.value,
						contentsType.slice
					);

				contentsIndexFrom &&
					this._setValue(
						`contents.${listSetsIndexNumber}.indexfrom`,
						"VALUE",
						contentsIndexFrom.type,
						contentsIndexFrom.value,
						contentsIndexFrom.slice
					);

				contentsIndexTo &&
					this._setValue(
						`contents.${listSetsIndexNumber}.indexto`,
						"VALUE",
						contentsIndexTo.type,
						contentsIndexTo.value,
						contentsIndexTo.slice
					);

				contentsIndentifier &&
					this._setValue(
						`contents.${listSetsIndexNumber}.identifier`,
						"VALUE",
						contentsIndentifier.type,
						contentsIndentifier.value,
						contentsIndentifier.slice
					);

				contentsNumDecimals &&
					this._setValue(
						`contents.${listSetsIndexNumber}.numdecimals`,
						"VALUE",
						contentsNumDecimals.type,
						contentsNumDecimals.value,
						contentsNumDecimals.slice
					);

				return this;
			}

			deleteSet(listSetsIndexNumber) {
				this._deleteListEntrySet(`contents-${listSetsIndexNumber}`);
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
	WithNewCustomWidgetEnumOptionEditor,
};
