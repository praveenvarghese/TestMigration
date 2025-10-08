const { generateOptionEditorConstructs } = require("./option-editor");
const jQuery = require("jquery-node");

const { WithMapV3HeatMapSetOptionEditor } = generateOptionEditorConstructs({
	name: "MapV3HeatMapSet",
	editorButtonSelector: ".map-heatmap-control",
	editorSelector: ".map-heatmap-container.open",
	mainMethodName: "getHeatMapOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getHeatMapOptionEditor() {
				return this;
			}

			addSet(indexInfo, latitudeInfo, longitudeInfo, dataInfo, hideHeatMap) {
				this.addNewListEntrySet();
				this.openListEntrySet({ listEntryName: "heatmaps-0" });
				indexInfo &&
					this._setValue(
						`heatmaps.0.index`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				latitudeInfo &&
					this._setValue(
						`heatmaps.0.latitude`,
						"VALUE",
						latitudeInfo.type,
						latitudeInfo.value,
						latitudeInfo.slice
					);

				longitudeInfo &&
					this._setValue(
						`heatmaps.0.longitude`,
						"VALUE",
						longitudeInfo.type,
						longitudeInfo.value,
						longitudeInfo.slice
					);

				dataInfo &&
					this._setValue(
						`heatmaps.0.data`,
						"VALUE",
						dataInfo.type,
						dataInfo.value,
						dataInfo.slice
					);

				hideHeatMap &&
					this._setValue(
						`heatmaps.0.hide`,
						"BOOLEAN",
						hideHeatMap.type,
						hideHeatMap.value,
						hideHeatMap.slice
					);
				return this;
			}

			editSet(indexInfo, latitudeInfo, longitudeInfo, dataInfo, hideHeatMap) {
				if (!this._hasListEntrySet(`heatmaps-0`)) {
					throw new Error(`Could not find "heatmaps.0" heat map list entry set.`);
				}
				this.openListEntrySet({ listEntryName: "heatmaps-0" });
				indexInfo &&
					this._setValue(
						`heatmaps.0.index`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				latitudeInfo &&
					this._setValue(
						`heatmaps.0.latitude`,
						"VALUE",
						latitudeInfo.type,
						latitudeInfo.value,
						latitudeInfo.slice
					);

				longitudeInfo &&
					this._setValue(
						`heatmaps.0.longitude`,
						"VALUE",
						longitudeInfo.type,
						longitudeInfo.value,
						longitudeInfo.slice
					);

				dataInfo &&
					this._setValue(
						`heatmaps.0.data`,
						"VALUE",
						dataInfo.type,
						dataInfo.value,
						dataInfo.slice
					);

				hideHeatMap &&
					this._setValue(
						`heatmaps.0.hide`,
						"BOOLEAN",
						hideHeatMap.type,
						hideHeatMap.value,
						hideHeatMap.slice
					);

				return this;
			}

			getOptionsInfo() {
				const optionsInfo = [];
				const mapV3HeatMapHTML = jQuery(this.webElement.getHTML());
				const heatMapSetsCount = mapV3HeatMapHTML.find(
					`p.add-or-delete-list-entry-option-editor:not(.option-template)`
				).length;

				// For each of HeatMapSet
				for (
					let heatMapSetIndex = 1;
					heatMapSetIndex <= heatMapSetsCount;
					heatMapSetIndex++
				) {
					const heatMapSetId = mapV3HeatMapHTML
						.find(`p.add-or-delete-list-entry-option-editor:eq(${heatMapSetIndex})`)
						.attr("class")
						.replace(/add-or-delete-list-entry-option-editor heatmaps-/, "");

					const listEntriesCount = mapV3HeatMapHTML.find(
						`.literal-or-aimms-single-line-option-editor.heatmaps-${heatMapSetId}`
					).length;

					const arcSetsInfo = [];
					// For each of Option Entry
					for (
						let listEntryIndex = 0;
						listEntryIndex < listEntriesCount;
						listEntryIndex++
					) {
						const listEntry = mapV3HeatMapHTML.find(
							`.literal-or-aimms-single-line-option-editor.heatmaps-${heatMapSetId}:eq(${listEntryIndex})`
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
					optionsInfo.push({
						Name: `HeatMaps.${heatMapSetId}`,
						nodeSetsInfo: arcSetsInfo,
					});
				}

				return optionsInfo;
			}
		},
});

module.exports = {
	WithMapV3HeatMapSetOptionEditor,
};
