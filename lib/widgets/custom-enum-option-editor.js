const mixin = require("../mixin");
const { Widget } = require("./widget");
const { WithCustomEnumOptionEditor } = require("../option-editors/custom-enum-option-editor");
const {
	WithNewCustomWidgetEnumOptionEditor,
} = require("../option-editors/new-custom-widget-enum-option-editor");
const {
	WithCustomListEntryOptionEditor,
} = require("../option-editors/custom-widget/custom-list-entry-option-editor");
const {
	WithBooleanOptionsOptionEditor,
} = require("../option-editors/custom-widget/custom-boolean-options-option-editor");
const {
	WithIntegerOptionsOptionEditor,
} = require("../option-editors/custom-widget/custom-integer-options-option-editor");
const {
	WithIconOptionsOptionEditor,
} = require("../option-editors/custom-widget/custom-icon-options-option-editor");
const {
	WithNumberOptionsOptionEditor,
} = require("../option-editors/custom-widget/custom-number-options-option-editor");
const {
	WithEnumOptionsOptionEditor,
} = require("../option-editors/custom-widget/custom-enum-options-option-editor");
const jQuery = require("jquery-node");

class CustomEnum extends mixin(
	Widget,
	WithCustomEnumOptionEditor,
	WithNewCustomWidgetEnumOptionEditor,
	WithCustomListEntryOptionEditor,
	WithBooleanOptionsOptionEditor,
	WithIntegerOptionsOptionEditor,
	WithNumberOptionsOptionEditor,
	WithIconOptionsOptionEditor,
	WithEnumOptionsOptionEditor
) {
	isBlue() {
		return false;
	}

	getEmptyWidgetMessage(messageNumber = 1) {
		let messageString;
		if (messageNumber === 1) {
			messageString = ".message1";
		} else if (messageNumber === 2) {
			messageString = ".message2";
		} else {
			messageString = ".message3";
		}
		return this.webElement.find(`.empty-widget-message.icon-cog2 ${messageString}`).getText();
	}

	getValues() {
		const $ = jQuery;
		const widgetJQueryDOM = $(this.webElement.getHTML());
		return $.makeArray(widgetJQueryDOM.find(".valueTable tr"))
			.map((e) => [
				{
					name: $(e)
						.find("td:eq(1)")
						.attr("class"),
					value: $(e)
						.find("td:eq(1)")
						.text(),
				},
				{
					name: $(e)
						.find("td:eq(2)")
						.attr("class"),
					value: $(e)
						.find("td:eq(2)")
						.text(),
				},
			])
			.flat()
			.filter((e) => e.name);
	}

	getListEntryValues() {
		const $ = jQuery;
		const widgetJQueryDOM = $(this.webElement.getHTML());
		const listEntryTableWebElement = widgetJQueryDOM.find(".listEntryTable");

		const listEntryData = [];

		const listEntryDataCount = listEntryTableWebElement.find(`.listEntryData`).length;
		for (let i = 0; i < listEntryDataCount; i++) {
			const listEntryDataRow = listEntryTableWebElement.find(`.listEntryData:eq(${i})`);

			const datatype = listEntryDataRow.find(`.datatype`).text();
			const data_type = listEntryDataRow.find(`.type`).text();
			// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
			// const data_index = listEntryDataRow.find(`.index`).text();
			// const data_identifier = listEntryDataRow.find(`.identifier`).text();
			const data_procedure = listEntryDataRow.find(`.procedure`).text();
			const data_show_decimals = listEntryDataRow.find(`.showdecimal`).text();
			const data_decimals_upto = listEntryDataRow.find(`.numdecimals`).text();
			const data_icon = listEntryDataRow.find(`.icon`).text();

			listEntryData.push({
				DataOf: datatype,
				Type: data_type,
				// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
				// Index: data_index,
				// Identifier: data_identifier,
				Procedure: data_procedure,
				ShowDecimals: data_show_decimals,
				DecimalsUpto: data_decimals_upto,
				Icon: data_icon,
			});
		}
		return listEntryData;
	}
}

module.exports = {
	CustomEnum,
	onRegisterWidgetTypes(registry) {
		registry["enum-options"] = CustomEnum;
		registry["new-custom-widget"] = CustomEnum;
		registry["erroneous-custom-widget"] = CustomEnum;
	},
};
