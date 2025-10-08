const { FrameworkObject } = require("../framework-object");
const { Select2 } = require("../misc/select2");
const { SlicingIndex } = require("../option-editors/identifier-settings/slicingIndex");
const $$$ = require("../selenium/3xdollar");

class IdentifierSelector extends FrameworkObject {
	_searchFor(textOrKeys) {
		this.webElement.find(".filterinput").keys(SPECIAL_KEYS.delete);
		this.webElement
			.find(".filterinput")
			.click()
			.keys(textOrKeys);
		// .keys(textOrKeys, SPECIAL_KEYS.enter);
	}

	clearSearch() {
		this.webElement.find(".filterinput").keys(SPECIAL_KEYS.delete);
		return this;
	}

	_assertIdentifierDialogIsClosed() {
		if ($$$("body").exists(`.identifier-dialog`)) {
			throw new Error("Identifier dialog is expected to be closed, but remains open!");
		}
		return true;
	}

	clickOnFinish() {
		this.webElement.find(".action-finish").click();
		this._assertIdentifierDialogIsClosed();
	}

	clickOnCancel() {
		this.webElement.find(".action-cancel").click();
		this._assertIdentifierDialogIsClosed();
	}

	selectIdentifier(identifierName) {
		this._searchFor(identifierName);
		this.webElement
			.find(`.identifier-list.available [title="${identifierName}"]`)
			.doubleClick();
		return this;
	}

	setStoreFocus(storeFocusInfo) {
		storeFocusInfo.forEach(({ index, value, clear = false }) => {
			const storeFocusIndexSelector = this.webElement.find(
				".identifier-focus-editor .store-focus-index .select2-container"
			);
			// Skip setting the index if it is already selected
			const currentSelectedIndex = storeFocusIndexSelector.getText();
			if (currentSelectedIndex !== index) {
				const storeFocusIndexElement = new Select2(storeFocusIndexSelector);
				storeFocusIndexElement.select(index);
			}

			if (clear) {
				// Clear the value
				this.webElement
					.find(".identifier-focus-editor .indexEPselector .select2-search-choice-close")
					.click();
			} else {
				// Set the value
				const storeFocusEPSelector = this.webElement.find(
					".identifier-focus-editor .indexEPselector .select2-container"
				);
				const storeFocusElement = new Select2(storeFocusEPSelector);
				storeFocusElement.select(value);
			}
		});
		return this;
	}

	getStoreFocusDropdownList(storeFocusInfo) {
		let dropdownValues = [];
		storeFocusInfo.forEach(({ index }) => {
			const storeFocusIndexSelector = this.webElement.find(
				".identifier-focus-editor .store-focus-index .select2-container"
			);
			// Skip setting the index if it is already selected
			const currentSelectedIndex = storeFocusIndexSelector.getText();
			if (currentSelectedIndex !== index) {
				const storeFocusIndexElement = new Select2(storeFocusIndexSelector);
				storeFocusIndexElement.select(index);
			}
			const storeFocusEPSelector = this.webElement.find(
				".identifier-focus-editor .indexEPselector .select2-container"
			);
			storeFocusEPSelector.click();
			const storeFocusElement = new Select2(storeFocusEPSelector);
			dropdownValues = storeFocusElement.getAllOptions();
		});
		return dropdownValues;
	}

	setSlices({ clearSlicing = false, sliceInfo }) {
		const slicingIndex = new SlicingIndex(this.webElement);
		if (clearSlicing) {
			slicingIndex.clearSlicing();
		}
		sliceInfo.forEach(({ index, type, value }) => {
			index && slicingIndex.selectIndex(".index-selector .select2-container", index);
			type && slicingIndex.selectSliceType(type);
			value && slicingIndex.selectValue(value);
		});
		return this;
	}

	getSelectedDetailsFromIdentifierDialogFooter() {
		const seletedText = this.webElement.find(".slice-result").getText();
		this.clickOnFinish();
		return seletedText;
	}

	getIdentifierList(searchText = "") {
		if (searchText !== "") {
			this._searchFor(searchText);
		}

		const IdentifierListElements = this.webElement.findIfAny(`.identifier-list.available`);
		const dropdownValues = [].concat(
			IdentifierListElements.find("[title]").getAttribute("title")
		);

		//dropdownValues = this.webElement.find(`.identifier-list.available`).getText();
		return dropdownValues;
	}
}

module.exports = IdentifierSelector;
