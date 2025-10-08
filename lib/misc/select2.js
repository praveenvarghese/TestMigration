const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");
const { flatten } = require("lodash");

class Select2 extends FrameworkObject {
	constructor(webElement, findDropdownItem) {
		super(webElement);

		const webElementId = webElement.getAttribute("id");
		if (webElementId.startsWith("s2id_autogen")) {
			this.select2Id = webElementId.replace("s2id_autogen", "");
		} else {
			this.select2Id = webElement
				.find("> .select2-container")
				.getAttribute("id")
				.replace("s2id_autogen", "");
		}

		if (findDropdownItem) {
			this.findDropdownItem = findDropdownItem;
		}
	}
	open() {
		const isDropDownEntriesVisible = browser.execute(() => {
			const $ = window.jQuery;
			let isDropDownEntriesVisibleStatus = false;
			if ($) {
				isDropDownEntriesVisibleStatus = $(
					`.select2-drop-active .select2-results`
				).isVisible();
			}
			return isDropDownEntriesVisibleStatus;
		});

		// Open the dropdown if it is not already opened
		if (!isDropDownEntriesVisible) {
			this.webElement.click();
			browser.pause(2000);
		}

		return this;
	}

	search(textOrKeys) {
		this.open();
		const dropDownWebElement = $$$(".select2-drop-active");
		// If there is not input field, we cannot search. But, if there are 5 or less items
		// we do not need to search anyway, we can always select directly from the list.
		if (dropDownWebElement.exists(".select2-search > input:isVisible")) {
			const inputElement = dropDownWebElement.find(".select2-search > input");
			inputElement.click();
			inputElement.keys(textOrKeys);
		}
		return this;
	}

	select(itemName, exactMatch = true) {
		this.open();
		const dropdownItem = this.findDropdownItem(itemName, exactMatch);
		dropdownItem.click();

		return this;
	}

	findDropdownItem(itemName, exactMatch) {
		let searchedItem = null;
		if (exactMatch) {
			searchedItem = $$$(
				`.select2-drop-active .select2-result-label:textMatches(/^${itemName}$/)`
			);
		} else {
			searchedItem = $$$(
				`.select2-drop-active .select2-result-label:contains("${itemName}")`
			);
		}
		return searchedItem;
	}

	selectForSpecialCase(itemName, exactMatch = true) {
		this.open();
		const dropdownItem = this.findDropdownItemForSpecialCase(itemName, exactMatch);
		dropdownItem.click();

		return this;
	}

	findDropdownItemForSpecialCase(itemName, exactMatch) {
		let searchedItem = null;
		if (exactMatch) {
			searchedItem = $$$(`.select2-drop-active .select2-match:textMatches(/^${itemName}$/)`);
		} else {
			searchedItem = $$$(`.select2-drop-active .select2-match:contains("${itemName}")`);
		}
		return searchedItem;
	}

	clear() {
		this.open();

		const firstDropdownElement = $$$(`.select2-drop-active .select2-results li:first-child`);
		firstDropdownElement.click();

		return this;
	}

	getAllFullyVisibleOptions() {
		const tiledPane = $$$(".select2-drop-active .select2-results");
		return flatten([
			tiledPane.findWithinBounds(".select2-result .select2-result-label").getText(),
		]);
	}

	getAllFullyVisibleOptionsV2() {
		const tiledPane = $$$(".select2-drop-active .TiledPane");
		return flatten([
			tiledPane.findWithinBounds(".select2-result .select2-result-label").getText(),
		]);
	}

	getAllOptions() {
		const jQdom = jQuery($$$(`.select2-drop-active`).getHTML());
		return jQuery
			.makeArray(jQdom.find("li .select2-result-label"))
			.map((elem) => jQuery(elem).text());
	}

	scrollPageDown() {
		const thumbContainer = $$$(".select2-drop-active .ui-thumb-container-vertical");
		const { height: containerHeight } = browser.getElementRect(
			thumbContainer.webElement.elementId
		);
		const thumb = $$$(".select2-drop-active .ui-thumb-container-vertical .ui-thumb");
		const { height: dragHandlerHeight } = browser.getElementRect(thumb.webElement.elementId);
		const clickYOffset = -containerHeight / 2 + dragHandlerHeight + 5;

		thumbContainer.scrollIntoView();
		thumbContainer.click({ button: "left", x: 0, y: clickYOffset });
	}
}

module.exports = {
	Select2,
};
