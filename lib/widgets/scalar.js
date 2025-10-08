const { Widget } = require("./widget");
const mixin = require("../mixin");
const $$$ = require("../selenium/3xdollar");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { Cell } = require("../misc/cell");
const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const jQuery = require("jquery-node");

// @TODO
// * Support other editors than dropdown/select2

// @TODO
// If identifierName is undefined / "" return the first kpiElement
const getKpiModeIdentifierValueElement = (widgetWebElement, identifierName) => {
	let kpiElement;
	if (identifierName !== undefined) {
		kpiElement = widgetWebElement.find(`.key[data-key="${identifierName}"]`);
	} else {
		kpiElement = widgetWebElement.find(`.key`);
	}

	if (kpiElement.parent().findIfAny(".value:isVisible")) {
		return kpiElement.parent().find(".value:isVisible");
	}

	return kpiElement.parent().find(".value");
};

const getMultipleScalarsModeIdentifierValueElement = (widgetWebElement, identifierName) => {
	let identifierValueElement;

	if (identifierName !== undefined) {
		identifierValueElement = widgetWebElement
			.find(`:has(> td[data-old-title="${identifierName}"])`)
			.find(".value");
	} else {
		identifierValueElement = widgetWebElement.find(".row_0 .value");
	}

	return identifierValueElement;
};

const getIdentifierValueElement = (widgetWebElement, identifierName) => {
	let identifierValueElement;

	const isMultipleContentScalar = widgetWebElement.findIfAny(".scalar-table-wrap table").length;

	if (isMultipleContentScalar > 0) {
		identifierValueElement = getMultipleScalarsModeIdentifierValueElement(
			widgetWebElement,
			identifierName
		);
	} else {
		identifierValueElement = getKpiModeIdentifierValueElement(widgetWebElement, identifierName);
	}

	return identifierValueElement;
};

class Scalar extends mixin(
	Widget,
	WithIdentifierSettingsOptionEditor,
	WithGenericContentsOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu
) {
	getScalarCell(identifierName, options = { mode: "auto" }) {
		let identifierValueElement;
		switch (options.mode) {
			case "multiple":
				identifierValueElement = getMultipleScalarsModeIdentifierValueElement(
					this.webElement,
					identifierName
				);
				break;
			case "kpi":
				identifierValueElement = getKpiModeIdentifierValueElement(
					this.webElement,
					identifierName
				);
				break;
			case "auto":
				identifierValueElement = getIdentifierValueElement(this.webElement, identifierName);

				break;
			default:
				throw new Error("Unsupported mode: " + options.mode);
		}

		return new Cell(identifierValueElement);
	}

	getCellEditorType(identifierName) {
		const getCell = this.getScalarCell(identifierName);
		return getCell.getCellEditorType();
	}

	getValue(identifierName, options = { mode: "auto" }) {
		const getCell = this.getScalarCell(identifierName, options);

		return getCell.getValue(identifierName);
	}

	// A variant, explicitly for the multiple scalar mode
	getMultipleScalarModeValue(identifierName) {
		return this.getValue(identifierName, { mode: "multiple" });
	}

	// A variant, explicitly for the single (kpi) scalar mode
	getKpiModeValue(identifierName) {
		return this.getValue(identifierName, { mode: "kpi" });
	}

	//Set scalar widget values
	setValue(valueOrIdentifierName, value, options = { mode: "auto" }) {
		const identifierName = value !== undefined ? valueOrIdentifierName : undefined;
		value = value !== undefined ? value : valueOrIdentifierName;

		const getCell = this.getScalarCell(identifierName, options);
		return getCell.setValue(value);
	}

	// Double-click on a cell
	doubleClickCell(valueOrIdentifierName, options = { mode: "auto" }) {
		const getCell = this.getScalarCell(valueOrIdentifierName, options);
		return getCell.doubleClick();
	}

	// A variant, explicitly for the multiple scalar mode
	setMultipleScalarModeValue(identifierName, value) {
		return this.setValue(identifierName, value, { mode: "multiple" });
	}

	// A variant, explicitly for the single (kpi) scalar mode
	setKpiModeValue(identifierName, value) {
		return this.setValue(identifierName, value, { mode: "kpi" });
	}

	//Set scalar widget values
	setSwitch(valueOrIdentifierName, value) {
		const identifierName = value !== undefined ? valueOrIdentifierName : undefined;
		value = value !== undefined ? value : valueOrIdentifierName;

		const getCell = this.getScalarCell(identifierName);
		return getCell.setSwitch(value);
	}

	getMultilineNotSupportedMessageText() {
		return this.webElement.findIfAny(".kpi .multiline-not-supported-message").getText();
	}
	getMultipleCellValue() {
		const value = this.webElement
			.findIfAny(".string-value-editor")
			.find("title")
			.getText();
		return value;
	}

	isCompactScalarDisplayed() {
		const compactScalarClass = $$$(".widgetdiv-tag-scalar-compact");
		return compactScalarClass.any() ? compactScalarClass : "None";
	}

	hasFlags(flags) {
		const self = this;
		return flags.every(
			(flagName) => self.webElement.findIfAny(".value.flag-" + flagName).length
		);
	}

	getAllMultiContentScalarData() {
		let contentData = null;
		const scalarContainer = this.webElement.findIfAny("table tbody");

		if (scalarContainer.any()) {
			const jQdom = jQuery(scalarContainer.getHTML());

			const rows = jQuery.makeArray(jQdom.find("tr"));

			contentData = rows.map((rowElement) => {
				const rowElQ = jQuery(rowElement);
				const label = rowElQ.find(".key title").text();
				const inputElQ = rowElQ.find(".cell label input");
				let value = null;

				if (inputElQ.any()) {
					value = inputElQ.attr("value");
				}
				if (value === null || value === undefined) {
					value = rowElQ.find(".cell").attr("data-old-title");
				}

				return { label, value };
			});
		}
		return contentData;
	}

	openDropdown(identifierName, options = { mode: "auto" }) {
		const getCell = this.getScalarCell(identifierName, options);

		getCell.doubleClick();
		return getCell;
	}

	getAllOptions() {
		const jQdom = jQuery($$$(`.select2-drop-active`).getHTML());
		return jQuery
			.makeArray(jQdom.find("li .select2-result-label"))
			.map((elem) => jQuery(elem).text());
	}

	_clickOnRemove(cellWebElement) {
		cellWebElement.mouseHover();
		cellWebElement.webElement.find(".cell-editor__icon--set-to-default").click();
		return this;
	}

	removeValue(identifierName, options = { mode: "auto" }) {
		const getCell = this.getScalarCell(identifierName, options);
		this._clickOnRemove(getCell);
	}

	getScalarIdentifier(identifierName) {
		this.webElement.find(`.scalar-table-wrap [data-key=${identifierName}]`).moveTo();
		const identifierValueElement = this.webElement.find(
			`.scalar-table-wrap [data-key=${identifierName}]`
		);
		return new Cell(identifierValueElement);
	}

	// This function returns the label displayed for a single-line scalar
	getSingleIdentifierLabel() {
		const key = this.webElement.find(`.key`);
		return key.getAttribute("data-key");
	}
}

module.exports = {
	Scalar,
	onRegisterWidgetTypes(registry) {
		registry["scalar"] = Scalar;
	},
};
