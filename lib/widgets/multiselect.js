const mixin = require("../mixin");
const { Widget } = require("./widget");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");

class MultiSelect extends mixin(Widget, WithWidgetExtensionsOptionEditor, WithWidgetActions) {
	selectAll() {
		this.webElement.find(".select-all").click();
		return this;
	}
	isSelectAllDisabled() {
		const selectAllDisabled = this.webElement.findIfAny(
			".select-action.select-all.action-disabled"
		);
		return selectAllDisabled.any();
	}
	selectNone() {
		this.webElement.find(".select-none").click();
		return this;
	}
	isSelectNoneDisabled() {
		const selectNoneDisabled = this.webElement.findIfAny(
			".select-action.select-none.action-disabled"
		);
		return selectNoneDisabled.any();
	}

	getSelectAllText() {
		const selectAllText = this.webElement.findIfAny(".select-action.select-all").getText();
		return selectAllText;
	}

	getDeselectText() {
		const selectAllText = this.webElement.findIfAny(".select-action.select-none").getText();
		return selectAllText;
	}

	select(itemsToSelect = []) {
		itemsToSelect.forEach((itemName) => {
			this.webElement
				.find(`.searchable-list li:not(.active) .name:textMatches(/^${itemName}$/)`)
				.click();
		});
		return this;
	}
	deselect(itemsToSelect = []) {
		itemsToSelect.forEach((itemName) => {
			this.webElement
				.find(`.searchable-list li.active .name:textMatches(/^${itemName}$/)`)
				.click();
		});
		return this;
	}
	mouseHoverOverItem(itemName) {
		return this.webElement.find(`.searchable-list .name:textMatches(/^${itemName}$/)`).moveTo();
	}
	getSearchBox() {
		const searchBox = this.webElement.findIfAny(".filterinput:isVisible");
		return searchBox.any() ? searchBox : "None";
	}
	searchItem(item) {
		const searchBoxLocator = this.webElement.find(`.filterinput:isVisible`);
		searchBoxLocator.click();
		browser.keys([SPECIAL_KEYS.left_control, "a"]);
		browser.keys([SPECIAL_KEYS.delete]);
		return searchBoxLocator.click().keys(item);
	}

	pressKeys(textOrKeys, keyDelay) {
		return this.webElement.find(`.filterinput:isVisible`).keys(textOrKeys, keyDelay);
	}

	getSelectedItemsList() {
		const selectedItemslocator = this.webElement.findIfAny(".searchable-list li.active .name");
		let selectedItems = [];
		if (selectedItemslocator.any()) {
			selectedItems = selectedItemslocator.getText();
		}
		return selectedItems;
	}

	getAllEntries() {
		return [].concat(this.webElement.find(".searchable-list li").getAttribute("data-id"));
	}

	getAllFilteredEntries() {
		return [].concat(
			this.webElement.find(".searchable-list li[data-flags]").getAttribute("data-id")
		);
	}

	getSingleEntry(entryName) {
		return this.webElement.find(`.searchable-list li[data-id= "${entryName}"]`);
	}

	hasParticularClass(entryName, className) {
		const getLocator = this.getSingleEntry(entryName);
		return getLocator.hasClass(className);
	}

	getButtonsText() {
		const buttonText = [];

		this.webElement
			.findIfAny(`.awf-select-actions .select-action`)
			.webElements.forEach((button) => {
				buttonText.push(button.getText());
			});

		return buttonText;
	}
}

module.exports = {
	MultiSelect,
	onRegisterWidgetTypes(registry) {
		registry["multiselect"] = MultiSelect;
	},
};
