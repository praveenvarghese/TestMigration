const { generateOptionEditorConstructs } = require("./option-editor");
const jQuery = require("jquery-node");

const { WithMapV3NodeSetsOptionEditor } = generateOptionEditorConstructs({
	name: "MapV3NodeSets",
	editorButtonSelector: ".map-v3-node-sets-control",
	editorSelector: ".map-v3-node-sets-container.open",
	mainMethodName: "nodeSetsMapLeafletOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			nodeSetsMapLeafletOptionEditor() {
				return this;
			}

			getOptionsInfo() {
				const optionsInfo = [];
				const mapV3NodeSetsHTML = jQuery(this.webElement.getHTML());
				const nodeSetsCount = mapV3NodeSetsHTML.find(
					`p.add-or-delete-list-entry-option-editor:not(.option-template)`
				).length;

				// For each of NodeSet
				for (let nodeSetIndex = 1; nodeSetIndex <= nodeSetsCount; nodeSetIndex++) {
					const nodeSetId = mapV3NodeSetsHTML
						.find(`p.add-or-delete-list-entry-option-editor:eq(${nodeSetIndex})`)
						.attr("class")
						.replace(/ expanded/, "")
						.replace(/add-or-delete-list-entry-option-editor nodes-/, "");

					const listEntriesCount = mapV3NodeSetsHTML.find(
						`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetId}`
					).length;

					const nodeSetsInfo = [];
					// For each of Option Entry
					for (
						let listEntryIndex = 0;
						listEntryIndex < listEntriesCount;
						listEntryIndex++
					) {
						const listEntry = mapV3NodeSetsHTML.find(
							`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetId}:eq(${listEntryIndex})`
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

						nodeSetsInfo.push({
							Name: optionName,
							NewOptionType: isNewOptionType,
							Value: option_ValueSet,
							ListEntryOrder: listEntryIndex,
						});
					}
					optionsInfo.push({ Name: `Nodes.${nodeSetId}`, nodeSetsInfo });
				}

				return optionsInfo;
			}

			addNodeSet(
				indexInfo = null,
				latitudeInfo = null,
				longitudeInfo = null,
				sizeInfo = null,
				maxRefSizeInfo = null,
				iconInfo = null
			) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Nodes list entry set.`);
				}

				//Because of zero based index. Get the count of NodeSets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				this.openListEntrySet({ listEntryName: `nodes-${listEntryIndex}` });
				indexInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.index`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				latitudeInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.latitude`,
						"VALUE",
						latitudeInfo.type,
						latitudeInfo.value,
						latitudeInfo.slice
					);

				longitudeInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.longitude`,
						"VALUE",
						longitudeInfo.type,
						longitudeInfo.value,
						longitudeInfo.slice
					);

				sizeInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.size`,
						"VALUE",
						sizeInfo.type,
						sizeInfo.value,
						sizeInfo.slice
					);

				maxRefSizeInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.maximumreferencesize`,
						"VALUE",
						maxRefSizeInfo.type,
						maxRefSizeInfo.value,
						maxRefSizeInfo.slice
					);

				iconInfo &&
					this._setValue(
						`nodes.${listEntryIndex}.icon`,
						"VALUE",
						iconInfo.type,
						iconInfo.value,
						iconInfo.slice
					);
				return this;
			}

			editNodeSet(
				nodeSetsIndexNumber = null,
				indexInfo = null,
				latitudeInfo = null,
				longitudeInfo = null,
				sizeInfo = null,
				maxRefSizeInfo = null,
				iconInfo = null
			) {
				if (!this._hasListEntrySet(`nodes-${nodeSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "Nodes.${nodeSetsIndexNumber}" Node list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				indexInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.index`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				latitudeInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.latitude`,
						"VALUE",
						latitudeInfo.type,
						latitudeInfo.value,
						latitudeInfo.slice
					);

				longitudeInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.longitude`,
						"VALUE",
						longitudeInfo.type,
						longitudeInfo.value,
						longitudeInfo.slice
					);

				sizeInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.size`,
						"VALUE",
						sizeInfo.type,
						sizeInfo.value,
						sizeInfo.slice
					);

				iconInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.icon`,
						"VALUE",
						iconInfo.type,
						iconInfo.value,
						iconInfo.slice
					);

				maxRefSizeInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.maximumreferencesize`,
						"VALUE",
						maxRefSizeInfo.type,
						maxRefSizeInfo.value,
						maxRefSizeInfo.slice
					);

				return this;
			}

			deleteNodeSet(nodeSetsIndexNumber) {
				this._deleteListEntrySet(`nodes-${nodeSetsIndexNumber}`);
				return this;
			}

			moveUpANodeSet(nodeSetsIndexNumber) {
				this._moveUpASet(`nodes-${nodeSetsIndexNumber}`);
				return this;
			}

			moveDownANodeSet(nodeSetsIndexNumber) {
				this._moveDownASet(`nodes-${nodeSetsIndexNumber}`);
				return this;
			}

			deleteNodeInformation(nodeSetsIndexNumber, optionName) {
				if (!(nodeSetsIndexNumber || optionName)) {
					throw new Error("Missing inputs to delete Node information.");
				}

				let uniqueDataOptionName;
				switch (optionName.toUpperCase().replace(/ /g, "")) {
					case "INDEX":
						uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + ".index";
						break;
					case "LATITUDE":
						uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + ".latitude";
						break;
					case "LONGITUDE":
						uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + ".longitude";
						break;
					case "SIZE":
						uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + ".size";
						break;
					case "MAXIMUMREFERENCESIZE":
						uniqueDataOptionName =
							"nodes." + nodeSetsIndexNumber + ".maximumreferencesize";
						break;
					case "ICON":
						uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + ".icon";
						break;
					default:
						throw new Error(`Did not find any matching option in Node Set.`);
				}

				this.clearSetValue(uniqueDataOptionName);

				return this;
			}

			getOptionEntry(nodeSetNumber, optionName) {
				let nodeSetOptionEntry = null;
				const optionEntryLabelElement = this.webElement.findIfAny(
					`.nodes-${nodeSetNumber} [title = "${optionName}"]`
				);

				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.OptionName = this.OptionEntry.getAttribute("data-option-name");
					this.IsOldOptionEntryType = false;
					nodeSetOptionEntry = this;
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetNumber}` });
				return nodeSetOptionEntry;
			}

			expandNodeSet(nodeSetsIndexNumber) {
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				return this;
			}

			collapseNodeSet(nodeSetsIndexNumber) {
				this.closeListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				return this;
			}

			getNumberOfListEntries(nodeSetsIndexNumber) {
				const mapV3NodeSetsHTML = jQuery(this.webElement.getHTML());
				const listEntriesCount = mapV3NodeSetsHTML.find(
					`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetsIndexNumber}.expanded`
				).length;

				return listEntriesCount;
			}
		},
});

module.exports = {
	WithMapV3NodeSetsOptionEditor,
};
