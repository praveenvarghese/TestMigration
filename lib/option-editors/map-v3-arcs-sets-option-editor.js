const { generateOptionEditorConstructs } = require("./option-editor");
const jQuery = require("jquery-node");

const { WithMapV3ArcSetsOptionEditor } = generateOptionEditorConstructs({
	name: "MapV3ArcSets",
	editorButtonSelector: ".map-v3-arc-sets-control",
	editorSelector: ".map-v3-arc-sets-container.open",
	mainMethodName: "arcSetsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			arcSetsOptionEditor() {
				return this;
			}

			addArcSet(
				valueInfo = null,
				hideLabelInfo = null,
				dynamicWidthInfo = null,
				showStraightLinesInfo = null,
				decimalPointsInfo = null
			) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Arcs list entry set.`);
				}

				//Because of zero based index. Get the count of ArcSets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;

				this.openListEntrySet({ listEntryName: `arcs-${listEntryIndex}` });

				valueInfo &&
					this._setValue(
						`arcs.${listEntryIndex}.value`,
						"VALUE",
						valueInfo.type,
						valueInfo.value,
						valueInfo.slice,
						valueInfo.storeFocus
					);

				hideLabelInfo &&
					this._setValue(
						`arcs.${listEntryIndex}.label.hide`,
						"BOOLEAN",
						hideLabelInfo.type,
						hideLabelInfo.value,
						hideLabelInfo.slice
					);

				dynamicWidthInfo &&
					this._setValue(
						`arcs.${listEntryIndex}.width.dynamic`,
						"BOOLEAN",
						dynamicWidthInfo.type,
						dynamicWidthInfo.value,
						dynamicWidthInfo.slice
					);

				showStraightLinesInfo &&
					this._setValue(
						`arcs.${listEntryIndex}.line.straight`,
						"BOOLEAN",
						showStraightLinesInfo.type,
						showStraightLinesInfo.value,
						showStraightLinesInfo.slice
					);

				decimalPointsInfo &&
					this._setValue(
						`arcs.${listEntryIndex}.numdecimals`,
						"VALUE",
						decimalPointsInfo.type,
						decimalPointsInfo.value,
						decimalPointsInfo.slice
					);

				return this;
			}

			editArcSet(
				arcsSetsIndexNumber,
				valueInfo = null,
				labelInfo = null,
				hideLabelInfo = null,
				dynamicWidthInfo = null,
				showStraightLinesInfo = null,
				decimalPointsInfo = null
			) {
				if (!this._hasListEntrySet(`arcs-${arcsSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "Arcs.${arcsSetsIndexNumber}" Arcs list entry set.`
					);
				}

				this.openListEntrySet({ listEntryName: `arcs-${arcsSetsIndexNumber}` });

				valueInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.value`,
						"VALUE",
						valueInfo.type,
						valueInfo.value,
						valueInfo.slice,
						valueInfo.storeFocus
					);

				labelInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.label`,
						"VALUE",
						labelInfo.type,
						labelInfo.value,
						labelInfo.slice,
						labelInfo.storeFocus
					);

				hideLabelInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.label.hide`,
						"BOOLEAN",
						hideLabelInfo.type,
						hideLabelInfo.value,
						hideLabelInfo.slice
					);

				dynamicWidthInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.width.dynamic`,
						"BOOLEAN",
						dynamicWidthInfo.type,
						dynamicWidthInfo.value,
						dynamicWidthInfo.slice
					);

				showStraightLinesInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.line.straight`,
						"BOOLEAN",
						showStraightLinesInfo.type,
						showStraightLinesInfo.value,
						showStraightLinesInfo.slice
					);

				decimalPointsInfo &&
					this._setValue(
						`arcs.${arcsSetsIndexNumber}.numdecimals`,
						"VALUE",
						decimalPointsInfo.type,
						decimalPointsInfo.value,
						decimalPointsInfo.slice
					);
				return this;
			}

			deleteAnArcSet(arcsSetsIndexNumber) {
				this._deleteListEntrySet(`arcs-${arcsSetsIndexNumber}`);
				return this;
			}

			moveUpAnArcSet(arcsSetsIndexNumber) {
				this._moveUpASet(`arcs-${arcsSetsIndexNumber}`);
				return this;
			}

			moveDownAnArcSet(arcsSetsIndexNumber) {
				this._moveDownASet(`arcs-${arcsSetsIndexNumber}`);
				return this;
			}

			getOptionsInfo() {
				const optionsInfo = [];
				const mapV3ArcSetsHTML = jQuery(this.webElement.getHTML());
				const arcSetsCount = mapV3ArcSetsHTML.find(
					`p.add-or-delete-list-entry-option-editor:not(.option-template)`
				).length;

				// For each of ArcSet
				for (let arcSetIndex = 1; arcSetIndex <= arcSetsCount; arcSetIndex++) {
					const arcSetId = mapV3ArcSetsHTML
						.find(`p.add-or-delete-list-entry-option-editor:eq(${arcSetIndex})`)
						.attr("class")
						.replace(/add-or-delete-list-entry-option-editor arcs-/, "");

					const listEntriesCount = mapV3ArcSetsHTML.find(
						`.literal-or-aimms-single-line-option-editor.arcs-${arcSetId}`
					).length;

					const arcSetsInfo = [];
					// For each of Option Entry
					for (
						let listEntryIndex = 0;
						listEntryIndex < listEntriesCount;
						listEntryIndex++
					) {
						const listEntry = mapV3ArcSetsHTML.find(
							`.literal-or-aimms-single-line-option-editor.arcs-${arcSetId}:eq(${listEntryIndex})`
						);

						// Option Name
						const optionName = listEntry.find(`label:first`).text();

						// Is New or Old Option Type
						const isNewOptionType = listEntry.hasClass(
							"literal-or-aimms-single-line-option-editor-old"
						)
							? false
							: true;

						// Value
						let option_ValueSet = "";
						if (listEntry.hasClass("has-value")) {
							const literalInput = listEntry.find(`input.literal-input`);
							if (listEntry.hasClass("from-model")) {
								option_ValueSet = literalInput.attr("title");
							} else {
								option_ValueSet = literalInput.attr("value");
								if (
									literalInput.hasClass("literal-type-checkbox") &&
									option_ValueSet === ""
								) {
									option_ValueSet = "false";
								}
							}
						}

						arcSetsInfo.push({
							Name: optionName,
							NewOptionType: isNewOptionType,
							Value: option_ValueSet,
							ListEntryOrder: listEntryIndex,
						});
					}
					optionsInfo.push({ Name: `Arcs.${arcSetId}`, nodeSetsInfo: arcSetsInfo });
				}

				return optionsInfo;
			}

			getOptionEntry(arcSetNumber, optionName) {
				let arcSetOptionEntry = null;
				const optionEntryLabelElement = this.webElement.findIfAny(
					`.arcs-${arcSetNumber} [title = "${optionName}"]`
				);

				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.OptionName = this.OptionEntry.getAttribute("data-option-name");
					this.IsOldOptionEntryType = false;
					arcSetOptionEntry = this;
				}
				this.openListEntrySet({ listEntryName: `arcs-${arcSetNumber}` });
				return arcSetOptionEntry;
			}

			expandArcSet(arcSetsIndexNumber) {
				this.openListEntrySet({ listEntryName: `arcs-${arcSetsIndexNumber}` });
				return this;
			}

			collapseArcSet(arcSetsIndexNumber) {
				this.closeListEntrySet({ listEntryName: `arcs-${arcSetsIndexNumber}` });
				return this;
			}

			getNumberOfListEntries(arcSetsIndexNumber) {
				const mapV3ArcSetsHTML = jQuery(this.webElement.getHTML());
				const listEntriesCount = mapV3ArcSetsHTML.find(
					`.literal-or-aimms-single-line-option-editor.arcs-${arcSetsIndexNumber}.expanded`
				).length;

				return listEntriesCount;
			}
		},
});

module.exports = {
	WithMapV3ArcSetsOptionEditor,
};
