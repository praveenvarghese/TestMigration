const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const mixin = require("../mixin");
const { Widget } = require("./widget");

const { Select2 } = require("../misc/select2");
const $$$ = require("../selenium/3xdollar");

const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");

class SelectionBox extends mixin(Widget, WithIdentifierSettingsOptionEditor) {
	select(itemName) {
		log.debug(`(${JSON.stringify(itemName)})`);

		const dropdownElement = this.webElement.find(".select2-container");
		const select2 = new Select2(dropdownElement);
		select2.search(itemName);
		select2.select(itemName, true);
		return this;
	}

	selectForSpecialCase(itemName) {
		log.debug(`(${JSON.stringify(itemName)})`);
		const dropdownElement = this.webElement.find(".select2-container");
		const select2 = new Select2(dropdownElement);
		select2.search(itemName);
		select2.selectForSpecialCase(itemName, true);
		return this;
	}

	deselect(itemName) {
		log.debug(`(${JSON.stringify(itemName)})`);

		this.webElement
			.find(
				`.select2-container .select2-chosen:textMatches(/^${itemName}$/) + .select2-search-choice-close`
			)
			.click();
		return this;
	}

	clearSelection() {
		this.webElement.find(`.select2-container .select2-search-choice-close`).click();
		return this;
	}

	getValue() {
		return this.webElement.find(".select2-container .select2-chosen").getText();
	}

	getAllFullyVisibleOptions() {
		const dropdownElement = this.webElement.find(".select2-container");
		return new Select2(dropdownElement).open().getAllFullyVisibleOptions();
	}

	hasSearchBox() {
		return $$$("body").exists(".select2-search");
	}

	activateSearchBox() {
		$$$("body")
			.find(".select2-search")
			.click();
	}

	getSearchText() {
		const searchedText = browser.execute(() => {
			const consoleWay = window.jQuery;
			return consoleWay(`.select2-search .select2-input`)[0].value;
		});
		return searchedText;
	}

	clickElement(itemName, xOffset) {
		$$$("body")
			.find(`.select2-results [data-id="${itemName}"]`)
			.click({ button: "left", x: xOffset, y: 0 });
	}

	mouseHoverInDropdown(itemName) {
		$$$("body")
			.find(`.select2-results [data-id="${itemName}"]`)
			.moveTo();
	}

	mouseHoverSelectedItem() {
		return this.webElement.find(".select2-container .select2-chosen").moveTo();
	}

	scrollPageDown() {
		const dropdownElement = this.webElement.find(".select2-container");
		return new Select2(dropdownElement).open().scrollPageDown();
	}
}

class SelectionBoxV2 extends SelectionBox {
	getAllFullyVisibleOptions() {
		const dropdownElement = this.webElement.find(".select2-container");
		return new Select2(dropdownElement).open().getAllFullyVisibleOptionsV2();
	}
}

module.exports = {
	SelectionBox,
	onRegisterWidgetTypes(registry) {
		registry["selectionbox"] = SelectionBox;
		registry["selectionbox-v2"] = SelectionBoxV2;
	},
};
