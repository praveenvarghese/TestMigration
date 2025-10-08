const { generateOptionEditorConstructs } = require("./option-editor");
const $$$ = require("../selenium/3xdollar");
const { Select2 } = require("../misc/select2");

const { WithTemplatesOptionEditor } = generateOptionEditorConstructs({
	name: "Templates",
	editorButtonSelector: ".templates-control",
	editorSelector: ".list-entry-items-container.open",
	mainMethodName: "openTemplatesOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openTemplatesOptionEditor() {
				return this;
			}

			addTemplate(TemplateName) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Title list entry set.`);
				}

				//Because of zero based index. Get the count of Sets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				this.openListEntrySet({ listEntryName: `views-${listEntryIndex}` });
				TemplateName &&
					this._setValue(
						`views.${listEntryIndex}.name`,
						"VALUE",
						TemplateName.type,
						TemplateName.value,
						TemplateName.slice
					);

				return this;
			}

			editTemplate(viewsIndexNumber, viewName) {
				if (!this._hasListEntrySet(`views-${viewsIndexNumber}`)) {
					throw new Error(`Could not find "views.${viewsIndexNumber}"  list entry set.`);
				}
				this.openListEntrySet({ listEntryName: `views-${viewsIndexNumber}` });
				viewName &&
					this._setValue(
						`views.${viewsIndexNumber}.name`,
						"VALUE",
						viewName.type,
						viewName.value,
						viewName.slice
					);

				return this;
			}

			getCurrentTemplate() {
				return this.webElement
					.find(`[data-option-name="views.current.user"] .select2-chosen`)
					.getText();
			}

			setTemplateCurrentViewFromOptionEditor(TemplateName) {
				const currentViewDropdown = this.webElement.find(
					`.views-current-user .select2-container`
				);
				const select2 = new Select2(currentViewDropdown);
				select2.select(TemplateName, false);
			}

			getTemplateCurrentViewDropdownList() {
				const viewDetails = [];
				const currentViewDropdown = this.webElement.find(
					`.views-current-user .select2-container`
				);
				currentViewDropdown.click();
				const currentViewDropdownSel = $$$.findIfAny(
					".select2-results .select2-result-label"
				);
				const dropdownList = [].concat(currentViewDropdownSel.getText());
				viewDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return viewDetails;
			}

			getTemplateDropdownList(viewsIndexNumber) {
				const viewDetails = [];
				const TemplateDropdown = this.webElement.find(
					`[data-option-name="views.${viewsIndexNumber}.name"] .select2-container`
				);
				TemplateDropdown.click();
				const TemplateDropdownSel = $$$.findIfAny(".select2-results .select2-result-label");
				const dropdownList = [].concat(TemplateDropdownSel.getText());
				viewDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return viewDetails;
			}

			getTemplateViewList() {
				const TemplateActionsContainer = $$$.findIfAny(".templates-wrapper.optionwrapper");
				const templateDetails = [];

				if (TemplateActionsContainer.any()) {
					const TemplateHeaderSel = TemplateActionsContainer.findIfAny(
						`.add-or-delete-list-entry-option-editor .header[title]`
					);
					const TemplateNameSel = TemplateActionsContainer.findIfAny(
						`.list-entry-item .literal-input`
					);
					const titles = [].concat(TemplateHeaderSel.getText());
					const TemplateValue = [].concat(TemplateNameSel.getAttribute("value"));

					const templateDetail = {
						TemplateTitle: titles,
						TemplateName: TemplateValue,
					};

					templateDetails.push(templateDetail);
				}

				return templateDetails;
			}

			deleteTemplate(templateName) {
				const getSel = this.webElement.find(`span[title="${templateName}"]`);
				getSel.moveTo();
				const deleteButtonSel = getSel.parent();
				return deleteButtonSel.find(".remove-list-entry-button.icon-remove").click();
			}

			isDeleteTemplateButtonDisabled(templateName) {
				const deleteButtonSel = this.webElement
					.find(`span[title="${templateName}"]`)
					.parent();
				const isDisabled = deleteButtonSel
					.find(".remove-list-entry-button.icon-remove")
					.hasClass("disabled");
				return isDisabled;
			}

			getNumberOfListEntries() {
				return this._getCountOfListEntrySets();
			}

			unCollapseTemplate(templateName) {
				return this.webElement.find(`span[title="${templateName}"]`).click();
			}

			collapseTemplate(templateName) {
				return this.webElement.find(`span[title="${templateName}"]`).click();
			}

			moveUpTemplate(viewsIndexNumber) {
				this._moveUpASet(`views-${viewsIndexNumber}`);
				return this;
			}

			moveDownTemplate(viewsIndexNumber) {
				this._moveDownASet(`views-${viewsIndexNumber}`);
				return this;
			}

			getAsociatedViewsForTemplate(templateName) {
				this.unCollapseTemplate(templateName);
				return this.webElement.find(`.option-value-item:visible`).getText();
			}
		},
});

module.exports = {
	WithTemplatesOptionEditor,
};
