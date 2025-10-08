const { generateOptionEditorConstructs } = require("./option-editor");
const $$$ = require("../selenium/3xdollar");
const { Select2 } = require("../misc/select2");

const { WithNamedViewsOptionEditor } = generateOptionEditorConstructs({
	name: "NamedViews",
	editorButtonSelector: ".views-control",
	editorSelector: ".list-entry-items-container.open",
	mainMethodName: "openNamedViewsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openNamedViewsOptionEditor() {
				return this;
			}

			addNamedWidgetView(namedViewName) {
				const countOfListEntrySets = this._getCountOfListEntrySets();
				this.addNewListEntrySet();
				const newCountOfListEntrySets = this._getCountOfListEntrySets();
				if (countOfListEntrySets === newCountOfListEntrySets) {
					throw new Error(`Error adding Title list entry set.`);
				}

				//Because of zero based index. Get the count of Sets added on page and then go for the last one added.
				const listEntryIndex = newCountOfListEntrySets - 1;
				this.openListEntrySet({ listEntryName: `views-${listEntryIndex}` });
				namedViewName &&
					this._setValue(
						`views.${listEntryIndex}.name`,
						"VALUE",
						namedViewName.type,
						namedViewName.value,
						namedViewName.slice
					);

				return this;
			}

			editView(viewsIndexNumber, viewName) {
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

			clearView(viewsIndexNumber) {
				if (!this._hasListEntrySet(`views-${viewsIndexNumber}`)) {
					throw new Error(`Could not find "views.${viewsIndexNumber}"  list entry set.`);
				}
				this.openListEntrySet({ listEntryName: `views-${viewsIndexNumber}` });
				this.clearSetValue(`views.${viewsIndexNumber}.name`);
				return this;
			}

			getDefaultNamedView() {
				return this.webElement
					.find(`[data-option-name="views.default"] .select2-chosen`)
					.getText();
			}

			getCurrentNamedView() {
				return this.webElement
					.find(`[data-option-name="views.current.user"] .select2-chosen`)
					.getText();
			}

			setDefaultViewFromOptionEditor(namedViewName) {
				const defaultViewDropdown = this.webElement.find(
					`.views-default .select2-container`
				);
				const select2 = new Select2(defaultViewDropdown);
				select2.select(namedViewName, false);
			}

			setCurrentViewFromOptionEditor(namedViewName) {
				const currentViewDropdown = this.webElement.find(
					`.views-current-user .select2-container`
				);
				const select2 = new Select2(currentViewDropdown);
				select2.select(namedViewName, false);
			}

			getDefaultViewDropdownList() {
				const viewDetails = [];
				const defaultViewDropdown = this.webElement.find(
					`.views-default .select2-container`
				);
				defaultViewDropdown.click();
				const defaultViewDropdownSel = $$$.findIfAny(
					".select2-results .select2-result-label"
				);
				const dropdownList = [].concat(defaultViewDropdownSel.getText());
				viewDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return viewDetails;
			}

			getCurrentViewDropdownList() {
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

			getNamedViewDropdownList(viewsIndexNumber) {
				const viewDetails = [];
				const namedViewDropdown = this.webElement.find(
					`[data-option-name="views.${viewsIndexNumber}.name"] .select2-container`
				);
				namedViewDropdown.click();
				const namedViewDropdownSel = $$$.findIfAny(
					".select2-results .select2-result-label"
				);
				const dropdownList = [].concat(namedViewDropdownSel.getText());
				viewDetails.push(dropdownList);
				this.webElement.keys(SPECIAL_KEYS.escape);
				return viewDetails;
			}

			getNamedWidgetViewList() {
				const namedViewActionsContainer = $$$.findIfAny(".views-wrapper.optionwrapper");
				const viewDetails = [];

				if (namedViewActionsContainer.any()) {
					const namedViewHeaderSel = namedViewActionsContainer.findIfAny(
						`.add-or-delete-list-entry-option-editor .header[title]`
					);
					const namedViewNameSel = namedViewActionsContainer.findIfAny(
						`.list-entry-item .literal-input`
					);
					const titles = namedViewHeaderSel.any()
						? [].concat(namedViewHeaderSel.getText())
						: [];
					const namedViewValue = namedViewNameSel.any()
						? [].concat(namedViewNameSel.getAttribute("value"))
						: [];

					const viewDetail = {
						ViewsTitle: titles,
						ViewsName: namedViewValue,
					};

					viewDetails.push(viewDetail);
				}

				return viewDetails;
			}

			deleteView(viewName) {
				const getSel = this.webElement.find(`span[title="${viewName}"]`);
				getSel.moveTo();
				const deleteButtonSel = getSel.parent();
				return deleteButtonSel.find(".remove-list-entry-button.icon-remove").click();
			}

			getNumberOfListEntries() {
				return this._getCountOfListEntrySets();
			}

			unCollapseNamedView(viewName) {
				return this.webElement.find(`span[title="${viewName}"]`).click();
			}

			collapseNamedView(viewName) {
				return this.webElement.find(`span[title="${viewName}"]`).click();
			}

			moveUpNamedView(viewsIndexNumber) {
				this._moveUpASet(`views-${viewsIndexNumber}`);
				return this;
			}

			moveDownNamedView(viewsIndexNumber) {
				this._moveDownASet(`views-${viewsIndexNumber}`);
				return this;
			}

			getDerivedTemplateForView(viewName) {
				this.unCollapseNamedView(viewName);
				return this.webElement.find(`.option-value-item:visible`).getText();
			}
		},
});

module.exports = {
	WithNamedViewsOptionEditor,
};
