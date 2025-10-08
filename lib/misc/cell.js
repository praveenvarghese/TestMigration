const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");
const mixin = require("../mixin");
const { Calender } = require("../application/calender");
const { WithColorPicker } = require("../widgets/traits/color-picker");
const { WithGenericActions } = require("../widgets/traits/generic-actions");
const { ItemActions } = require("../application/item-actions");

jQuery.fn.any = function() {
	return this.length > 0;
};

const getEditorType = (cellWebElement) => {
	let editorType;
	const jQdom = jQuery(cellWebElement.getHTML());

	if (jQdom.find(".boolean-cell-editor-contents").any()) {
		editorType = "boolean-cell-editor";
	} else if (jQdom.find(".string-cell-editor-contents").any()) {
		editorType = "string-cell-editor";
	} else if (jQdom.find(".dropdown-cell-editor-contents").any()) {
		editorType = "dropdown-cell-editor";
	} else if (jQdom.find(".datetime-cell-editor-contents").any()) {
		editorType = "datetime-cell-editor";
	} else if (jQdom.find(".multiline-cell-editor-contents").any()) {
		editorType = "multiline-cell-editor";
	} else {
		editorType = "Unknown editor type";
	}

	return editorType;
};
class Cell extends mixin(FrameworkObject, WithColorPicker, WithGenericActions) {
	_clickOnCalendar() {
		this.webElement.click();
		browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
		this.pressModifierKeyWith(SPECIAL_KEYS.alt, SPECIAL_KEYS.arrow_down);
	}

	getStyle() {
		const editorType = getEditorType(this.webElement);
		const style = super.getStyle();

		if (editorType === "string-cell-editor") {
			const innerInputComputedStyle = this.webElement.find("input").getComputedStyle();
			style["text-align"] = innerInputComputedStyle["textAlign"];
		} else {
			const innerCellWrapperComputedStyle = this.webElement
				.find(".cell-wrapper")
				.getComputedStyle();
			style["text-align"] = innerCellWrapperComputedStyle["textAlign"];
		}

		return style;
	}

	getCellText() {
		return this.webElement.find("label").getText();
	}

	getValue() {
		let result = "";
		const editorType = getEditorType(this.webElement);
		switch (editorType) {
			case "multiline-cell-editor": {
				const textElement = this.webElement.find(".multiline-cell-editor-contents");
				result = textElement.getText();
				break;
			}
			case "boolean-cell-editor": {
				result = this.webElement.find("input").getAttribute("value");
				result = result === "1.00" ? true : false;
				break;
			}
			case "string-cell-editor": {
				result = this.webElement.find("input").getAttribute("value");
				break;
			}
			case "dropdown-cell-editor": {
				result = this.webElement.find(".cell-editor__value").getText();
				break;
			}
			case "datetime-cell-editor": {
				result = this.webElement.find(".cell-editor__value").getText();
				break;
			}
			default: {
				result = this.getCellText();
			}
		}

		return result;
	}

	getDropdownCellValues() {
		const result = [];
		this.webElement.doubleClick();
		browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
		const celldropdown = $$$.findIfAny(".select2-drop .select2-input:isVisible");

		if (celldropdown.any()) {
			const listCount = $$$.findIfAny(`.select2-drop .select2-results li`).length;
			for (let index = 0; index < listCount; index++) {
				result.push($$$(`.select2-drop .select2-results li:eq(${index}) title`).getText());
			}
		}
		return result;
	}

	getParentTooltip() {
		return this.webElement.getAttribute("data-old-title");
	}

	getChildTooltip() {
		return this.webElement.find(".title").getText();
	}

	getCellEditorType() {
		return getEditorType(this.webElement);
	}

	toggleCheckbox() {
		this.setSwitch(!this.getValue());
	}

	setSwitch(value) {
		const isChecked = this.getValue();
		if (isChecked !== value) {
			const booleanValue = this.webElement.find(".boolean-cell-editor-contents");
			const booleanInputSelector = booleanValue.webElement.selector;

			browser.execute(
				({ selector }) => {
					const inputElement = document.querySelector(selector);
					inputElement.style.cssText = "visibility: visible";
				},
				{ selector: booleanInputSelector }
			);
			browser.execute(({ selector }) => document.querySelector(selector).click(), {
				selector: booleanInputSelector,
			});
		}
	}

	setValue(newValue, appendEnterKeyStroke = true) {
		const editorType = getEditorType(this.webElement);
		switch (editorType) {
			case "string-cell-editor": {
				const cellEditor = this.webElement.find(`.string-cell-editor-contents`);
				const isDisabledCell = cellEditor.getAttribute("disabled");
				//Simulate the click on the cell if it is disabled  (ie: pointer events none)
				if (isDisabledCell) {
					this.webElement.click();
				} else {
					cellEditor.click();
				}

				browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
				this.pressKeys(newValue.split(""));
				if (appendEnterKeyStroke) {
					this.pressKeys(SPECIAL_KEYS.enter);
				}
				break;
			}
			case "multiline-cell-editor": {
				this.webElement.click();
				browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
				this.pressKeys(newValue.split(""));
				$$$(".app-name").click();
				break;
			}

			case "boolean-cell-editor": {
				if (typeof newValue === "boolean") {
					const isChecked = this.getValue();
					if (isChecked !== newValue) {
						this.webElement.find(`.boolean-cell-editor-contents`).click();
					}
				} else {
					throw new Error(
						`setValue(${newValue}): Unsupported argument type: '${typeof newValue}'. Expected 'boolean'.`
					);
				}
				break;
			}
			case "dropdown-cell-editor": {
				if (this.getValue() !== newValue) {
					this.webElement.doubleClick();
					browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
					const testVisible = $$$.findIfAny(".select2-drop .select2-input:isVisible");
					if (testVisible) {
						this.pressKeys(newValue.split(""));
					}
					const searchedItem = this.findDropdownItem(newValue);
					searchedItem.click();
				}
				break;
			}
			case "datetime-cell-editor": {
				this._clickOnCalendar();
				const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
				calendarInstance.setCalender(newValue);
				break;
			}
			default:
				throw new Error(
					`setValue(${newValue}): Unsupported cell editor type: ${editorType}`
				);
		}

		return this;
	}

	findDropdownItem(newValue) {
		let machedSearchedItem = $$$.findIfAny(
			`.select2-drop-active .select2-result-label:textMatches(/^${newValue}$/)`
		);

		if (machedSearchedItem.any()) {
			machedSearchedItem = $$$(
				`.select2-drop-active .select2-result-label:textMatches(/^${newValue}$/)`
			);
		} else {
			machedSearchedItem = $$$(
				`.select2-drop-active .select2-result-label:contains(${newValue})`
			);
		}

		return machedSearchedItem;
	}

	setValueWithoutConfirm(newValue) {
		const cellEditor = this.webElement.find(`.string-cell-editor-contents`);
		cellEditor.click();
		browser.waitUntil(() => this.webElement.hasClass("focus-cell"));
		this.pressKeys(newValue.split(""));
		return this;
	}

	clearValue() {
		this.click();
		this.pressKeys(SPECIAL_KEYS.delete);
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	isCapacityViolated() {
		return this.webElement.hasClass("annotation-capacity_violated");
	}

	isFocused() {
		const isFocused = this.webElement.hasClass("focus-cell");
		return isFocused;
	}

	isSelected() {
		const isSelected = this.webElement.findIfAny(".selection-overlay");
		return isSelected.any();
	}

	click(xOffset = 0, yOffset = 0) {
		this.webElement.click({ x: xOffset, y: yOffset });
		return this;
	}

	clickWithOffset(xOffset = 0, yOffset = 0) {
		this.webElement.click({ x: xOffset, y: yOffset });
		return this;
	}

	doubleClick() {
		this.webElement.doubleClick();
		return this;
	}

	pressKeys(textOrKeys, keyDelay) {
		this.webElement.keys(textOrKeys, keyDelay);
		return this;
	}

	hasFlags(flags) {
		const self = this;
		return flags.every((flagName) => self.webElement.hasClass("flag-" + flagName));
	}

	hasAnnotations(annotations) {
		const self = this;
		return annotations.every((annotationName) =>
			self.webElement.hasClass("annotation-" + annotationName)
		);
	}

	getAnnotations() {
		return (this.webElement.getAttribute("class") || "")
			.split(" ")
			.filter((e) => e.startsWith("annotation-"))
			.map((e) => e.replace(/annotation-/, ""));
	}

	mouseHover() {
		this.webElement.moveTo();
		return this;
	}

	setHighlightedTodayDate() {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
		calendarInstance.selectCurrentDateTime();
	}

	setHighlightedDateTime() {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
		calendarInstance.selectHighlightDateTime();
	}

	isCalendarDateInRange(day) {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
		return calendarInstance.checkCalenderRange(day);
	}

	isCalendarDateSelected(day) {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
		return calendarInstance.checkCalenderDateSelected(day);
	}

	getDateTimeSelectedOnPicker() {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));

		// Currently we assume the Date&Time granularity is in minutes.

		calendarInstance.webElement.find(`.dp_view_toggler.dp_icon:isVisible`).click();
		const selectedMonthYear = calendarInstance.webElement
			.find(`.dp_header .dp_caption`)
			.getText();
		const selectedDay = calendarInstance.webElement
			.find(`.dp_daypicker .dp_selected`)
			.getText();
		const selectedHour = calendarInstance.webElement
			.find(`.dp_timepicker .dp_time_hours`)
			.getText();
		const selectedMinute = calendarInstance.webElement
			.find(`.dp_timepicker .dp_time_minutes`)
			.getText();
		return selectedDay + "-" + selectedMonthYear + " " + selectedHour + ":" + selectedMinute;
	}

	isGranularity(type) {
		this._clickOnCalendar();
		const calendarInstance = new Calender($$$(".Zebra_DatePicker"));
		let status = false;
		switch (type) {
			case "hours": {
				status = calendarInstance.checkForMinuteGranularity();
				break;
			}
			case "minutes": {
				status = calendarInstance.checkForHourGranularity();
				break;
			}
			case "day": {
				status = calendarInstance.checkForDayGranularity();
				break;
			}
			case "month": {
				status = calendarInstance.checkForMonthGranularity();
				break;
			}

			case "year": {
				status = calendarInstance.checkForYearGranularity();
				break;
			}

			default:
				throw new Error(`Invalid granularity type`);
		}

		return status;
	}

	rightClick(xOffset = 5, yOffset = 5) {
		const itemActionContainerLoc = $$$("body").exists(
			".react-contextmenu .react-contextmenu-item-container"
		);
		if (itemActionContainerLoc) {
			browser.pause(500);
			browser.keys([SPECIAL_KEYS.escape]);
			$$$(".app-name").click();
			browser.pause(500);
		}
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return new ItemActions();
	}

	getItemActions() {
		return new ItemActions();
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
		}

		return this;
	}

	getIdentifierTooltipText() {
		return this.webElement.find(".default-tooltip-preventer-replacement-title").getText();
	}
}
module.exports = { Cell };
