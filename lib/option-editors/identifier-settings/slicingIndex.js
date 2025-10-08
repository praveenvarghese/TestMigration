const autoLogia = require("../../auto-logia");
const log = require("../../log")(autoLogia());
const { FrameworkObject } = require("../../framework-object");
const { Select2 } = require("../../misc/select2");

class SlicingIndex extends FrameworkObject {
	clearSlicing() {
		const clearSlicingButton = this.webElement.findIfAny(".clear-slicing-btn");

		if (clearSlicingButton.any()) {
			clearSlicingButton.click();
		} else {
			throw new Error(`Could not locate "Clear Slicing" button`);
		}
	}

	selectIndex(selectSelector, indexName) {
		log.debug(`${JSON.stringify(indexName)}`);
		const indexSelector = new Select2(this.webElement.find(selectSelector));
		indexSelector.select(indexName);
	}

	selectSliceType(sliceType) {
		log.debug(`${JSON.stringify(sliceType)}`);
		let sliceTypeSelector;

		switch (sliceType.toUpperCase()) {
			case "FREE":
			case "INDEX":
			case "SUBSET":
				sliceTypeSelector = '.field-slice-type-selector [title="Index"]';
				break;
			case "ELEMENT-PARAMETER":
				sliceTypeSelector = '.field-slice-type-selector [title="Element Parameter"]';
				break;
			case "FIXED-ELEMENT":
				sliceTypeSelector = '.field-slice-type-selector [title="Fixed Element"]';
				break;
			default:
				throw new Error(`Unsupported slice type: ${sliceType}`);
		}

		this.webElement.find(sliceTypeSelector).click();
	}

	selectValue(value) {
		log.debug(`${JSON.stringify(value)}`);
		const indexSelector = new Select2(this.webElement.find(".field-slice-value-selector"));
		indexSelector.select(value);
	}
}

module.exports = {
	SlicingIndex,
};
