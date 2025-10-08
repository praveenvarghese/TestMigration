const { generateOptionEditorConstructs } = require("./option-editor");
// const jQuery = require("jquery-node");
const { Select2 } = require("../misc/select2");
const $$$ = require("../selenium/3xdollar");

const { WithDiagramWidgetNodeSetSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "DiagramWidgetNodeSetSettings",
	editorButtonSelector: ".diagram-node-sets-control",
	editorSelector: ".diagram-node-sets-container.open",
	mainMethodName: "openDiagramNodeSetOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openDiagramNodeSetOptionEditor() {
				return this;
			}

			UncollapseNodeEntrySet(listEntryIndex) {
				return this.openListEntrySet({ listEntryName: `contents-${listEntryIndex}` });
			}

			getEditorTitle() {
				return this.webElement.find(`.diagram-node-sets-control.toolbar-button`).getText();
			}

			addNodeSet(indexInfo = null) {
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

				return this;
			}

			editNodeSet(nodeSetsIndexNumber = null, indexInfo = null) {
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

				return this;
			}

			specifyXCoordinate(nodeSetsIndexNumber = null, indexInfo = null) {
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				indexInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.coordinate.x`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				return this;
			}

			specifyYCoordinate(nodeSetsIndexNumber = null, indexInfo = null) {
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				indexInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.coordinate.y`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				return this;
			}

			setButtonVisibilityToIdentifier(nodeSetsIndexNumber = null, indexInfo = null) {
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				indexInfo &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.button.visibility`,
						"VALUE",
						indexInfo.type,
						indexInfo.value,
						indexInfo.slice,
						indexInfo.storeFocus
					);

				return this;
			}

			setButtonVisibility(nodeSetsIndexNumber, visibilityType) {
				const buttonVisibilityDropdown = this.webElement.find(
					`[data-option-name="nodes.${nodeSetsIndexNumber}.button.visibility"] .select2-container`
				);
				const select2 = new Select2(buttonVisibilityDropdown);
				select2.select(visibilityType, true);
			}

			getButtonVisibility(nodeSetsIndexNumber) {
				return this.webElement
					.find(
						`[data-option-name="nodes.${nodeSetsIndexNumber}.button.visibility"] .select2-chosen`
					)
					.getText();
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

				let theOption = "";
				switch (optionName) {
					case "Index":
						theOption = ".index";
						break;
					case "X Coordinate":
						theOption = ".coordinate.x";
						break;
					case "Y Coordinate":
						theOption = ".coordinate.y";
						break;
					default:
						theOption = ".index";
				}

				const uniqueDataOptionName = "nodes." + nodeSetsIndexNumber + theOption;
				this.clearSetValue(uniqueDataOptionName);

				return this;
			}

			expandNodeSet(nodeSetsIndexNumber) {
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				return this;
			}

			isNodeSetCollapsedORExpanded(nodeSetsIndexNumber) {
				const listEntryWebElement = this._getListEntrySetWebElement({
					listEntryName: `nodes-${nodeSetsIndexNumber}`,
				});
				const listEntryState_CollapsedOrExpanded = listEntryWebElement
					.getAttribute("class")
					.includes("expanded")
					? "Expanded"
					: "Collapsed";

				return listEntryState_CollapsedOrExpanded;
			}

			collapseNodeSet(nodeSetsIndexNumber) {
				this.closeListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				return this;
			}

			getNumberOfItemsForNodeSet(nodeSetsIndexNumber) {
				const nodeSetContainer = $$$.findIfAny(".diagram-node-sets-container");
				const listEntriesCount = nodeSetContainer.findIfAny(
					`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetsIndexNumber}.expanded:visible`
				).length;

				return listEntriesCount;
			}

			getDetailsForNodeSetItem(nodeSetsIndexNumber) {
				const nodeSetContainer = $$$.findIfAny(".diagram-node-sets-container");
				const nodeSetDetails = [];

				if (nodeSetContainer.any()) {
					const nodeSetItems = nodeSetContainer.findIfAny(
						`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetsIndexNumber}.expanded label[title]:visible`
					);
					const nodeSetItemValues = nodeSetContainer.findIfAny(
						`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetsIndexNumber}.expanded label + .literal-editor-wrap .literal-input:visible`
					);

					const nodeItems = [].concat(nodeSetItems.getAttribute("title"));
					const nodeItemsValue = [].concat(nodeSetItemValues.getAttribute("title"));

					//To Fetch Node Template,Icon
					const nodeSetTemplateValues = nodeSetContainer.findIfAny(
						`.literal-or-aimms-single-line-option-editor.nodes-${nodeSetsIndexNumber}.expanded .select2-chosen`
					);

					if (nodeSetTemplateValues.any()) {
						nodeItemsValue.splice(1, 0, nodeSetTemplateValues.getText());
					}

					const viewDetail = {
						NodeSetItem: nodeItems,
						NodeSetItemValue: nodeItemsValue,
					};

					nodeSetDetails.push(viewDetail);
				}

				return nodeSetDetails;
			}

			getNumberOfListEntries() {
				return this._getCountOfListEntrySets();
			}

			getNodeSetListDetails() {
				const nodeSetContainer = $$$.findIfAny(".diagram-node-sets-container");
				const nodeSetDetails = [];

				if (nodeSetContainer.any()) {
					const nodeSetTitle = nodeSetContainer.findIfAny(
						`.add-or-delete-list-entry-option-editor .header[title]`
					);
					const namedSetIndex = nodeSetContainer.findIfAny(
						`.list-entry-item [title="Index"]+.literal-editor-wrap .literal-input`
					);
					const titles = [].concat(nodeSetTitle.getText());
					const indexs = [].concat(namedSetIndex.getAttribute("title"));

					const viewDetail = {
						NodeSetTitle: titles,
						NodeSetIndex: indexs,
					};

					nodeSetDetails.push(viewDetail);
				}

				return nodeSetDetails;
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

			getCurrentIndex(nodeSetsIndexNumber) {
				return (
					this.webElement
						.find(`[data-option-name="nodes.${nodeSetsIndexNumber}.index"] input`)
						.getAttribute("title") ?? "None"
				);
			}

			clearNodeIndex(nodeSetsIndexNumber) {
				const templateDropdown = `nodes.${nodeSetsIndexNumber}.index`;
				this.clearSetValue(templateDropdown);
				return this;
			}

			//Template
			getCurrentTemplate(nodeSetsIndexNumber) {
				return this.webElement
					.find(
						`[data-option-name="nodes.${nodeSetsIndexNumber}.template.type"] .select2-chosen`
					)
					.getText();
			}

			setTemplateFromOptionEditor(nodeSetsIndexNumber, templateType, exactMatch) {
				const templateDropdown = this.webElement.find(
					`[data-option-name="nodes.${nodeSetsIndexNumber}.template.type"] .select2-container`
				);
				const select2 = new Select2(templateDropdown);
				select2.select(templateType, exactMatch);
			}

			getTemplatesFromDropdownList(nodeSetsIndexNumber) {
				const templateDetails = [];
				const templateDropdown = this.webElement.find(
					`[data-option-name="nodes.${nodeSetsIndexNumber}.template.type"] .select2-container`
				);
				templateDropdown.click();
				const templateDropdownSel = $$$.findIfAny(".select2-results .select2-result-label");
				const dropdownList = [].concat(templateDropdownSel.getText());
				templateDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return templateDetails;
			}

			clearTemplate(nodeSetsIndexNumber) {
				const templateDropdown = `nodes.${nodeSetsIndexNumber}.template.type`;
				this.clearSetValue(templateDropdown);
				return this;
			}

			//Template-sub details
			editTemplateImage(nodeSetsIndexNumber, viewName) {
				if (!this._hasListEntrySet(`nodes-${nodeSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "nodes-${nodeSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				viewName &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.fields.image.src`,
						"VALUE",
						viewName.type,
						viewName.value,
						viewName.slice
					);

				return this;
			}

			getTemplateImageValue(nodeSetsIndexNumber) {
				return this.webElement
					.find(
						`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.image.src"] input`
					)
					.getAttribute("title");
			}

			editTemplateField1(nodeSetsIndexNumber, viewName) {
				if (!this._hasListEntrySet(`nodes-${nodeSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "nodes-${nodeSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				viewName &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.fields.A`,
						"VALUE",
						viewName.type,
						viewName.value,
						viewName.slice
					);

				return this;
			}

			getTemplateField1Value(nodeSetsIndexNumber) {
				return this.webElement
					.find(`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.A"] input`)
					.getAttribute("title");
			}

			editTemplateField2(nodeSetsIndexNumber, viewName) {
				if (!this._hasListEntrySet(`nodes-${nodeSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "nodes-${nodeSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				viewName &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.fields.B`,
						"VALUE",
						viewName.type,
						viewName.value,
						viewName.slice
					);

				return this;
			}

			getTemplateField2Value(nodeSetsIndexNumber) {
				return this.webElement
					.find(`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.B"] input`)
					.getAttribute("title");
			}

			editTemplateField3(nodeSetsIndexNumber, viewName) {
				if (!this._hasListEntrySet(`nodes-${nodeSetsIndexNumber}`)) {
					throw new Error(
						`Could not find "nodes-${nodeSetsIndexNumber}"  list entry set.`
					);
				}
				this.openListEntrySet({ listEntryName: `nodes-${nodeSetsIndexNumber}` });
				viewName &&
					this._setValue(
						`nodes.${nodeSetsIndexNumber}.fields.C`,
						"VALUE",
						viewName.type,
						viewName.value,
						viewName.slice
					);

				return this;
			}

			getTemplateField3Value(nodeSetsIndexNumber) {
				return this.webElement
					.find(`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.C"] input`)
					.getAttribute("title");
			}

			editTemplateIcon(nodeSetsIndexNumber, icon) {
				const templateDropdown = this.webElement.find(
					`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.icon"] .select2-container`
				);
				const select2 = new Select2(templateDropdown);
				select2.select(icon, false);
			}

			getCurrentTemplateIconValue(nodeSetsIndexNumber) {
				return this.webElement
					.find(
						`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.icon"] .select2-chosen`
					)
					.getText();
			}

			getTemplatesIconValue(nodeSetsIndexNumber) {
				const templateDetails = [];
				const templateDropdown = this.webElement.find(
					`[data-option-name="nodes.${nodeSetsIndexNumber}.fields.icon"] .select2-container`
				);
				templateDropdown.click();
				const templateDropdownSel = $$$.findIfAny(".select2-results .select2-result-label");
				const dropdownList = [].concat(templateDropdownSel.getText());
				templateDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return templateDetails;
			}

			clearTemplateIcon(nodeSetsIndexNumber) {
				const templateDropdown = `nodes.${nodeSetsIndexNumber}.fields.icon`;
				this.clearSetValue(templateDropdown);
				return this;
			}
		},
});

module.exports = {
	WithDiagramWidgetNodeSetSettingsOptionEditor,
};
