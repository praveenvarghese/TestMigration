/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario("Asserting multiple-level option value inheritance", () => {
	loadPage("Main Project/home");

	[
		{
			description:
				"With TypeA string option entry inheriting from Title option, TypeB string option entry inheriting from TypeA option. Setting an Identifier to the Title option entry; assert value on the option entries.",
			inputOptionsData: [
				{
					optionName: "Title",
					value: "INDIA",
					valueType: "IDENTIFIER",
					optionEditorType: "VALUE",
				},
			],
			expectedDataOnOptionEditorGetOptions: [
				{
					Name: "Title",
					Value: "INDIA",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "typeA",
					Value: "New Delhi",
					"Option-Entry Action Tooltip": "Inherits from Title",
					"Option-Entry Action Icon": "icon-enter5",
				},
				{
					Name: "typeB",
					Value: "New Delhi",
					"Option-Entry Action Tooltip": "Inherits from typeA",
					"Option-Entry Action Icon": "icon-enter5",
				},
			],
			expectedDataOnTableWidgetGetValues: [
				{ name: "typeA", value: "typeA: New Delhi" },
				{ name: "typeB", value: "typeB: New Delhi" },
			],
		},
		{
			description:
				"With TypeA string option entry inheriting from Title option, TypeB string option entry inheriting from TypeA option. Setting a literal value to the Title option entry; assert value on the option entries.",
			inputOptionsData: [
				{
					optionName: "Title",
					action: "Clear",
				},
				{
					optionName: "Title",
					value: "Widget Title",
					valueType: "LITERAL",
					optionEditorType: "VALUE",
				},
			],
			expectedDataOnOptionEditorGetOptions: [
				{
					Name: "Title",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "typeA",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Inherits from Title",
					"Option-Entry Action Icon": "icon-enter5",
				},
				{
					Name: "typeB",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Inherits from typeA",
					"Option-Entry Action Icon": "icon-enter5",
				},
			],
			expectedDataOnTableWidgetGetValues: [
				{ name: "typeA", value: "typeA: Widget Title" },
				{ name: "typeB", value: "typeB: Widget Title" },
			],
		},
		{
			description:
				"With TypeA string option entry inheriting from Title option, TypeB string option entry inheriting from TypeA option. Setting a literal value to the Title option entry followed by TypeA option; assert value on the option entries.",
			inputOptionsData: [
				{
					optionName: "Title",
					action: "Clear",
				},
				{
					optionName: "typeA",
					action: "Clear",
				},
				{
					optionName: "typeB",
					action: "Clear",
				},
				{
					optionName: "Title",
					value: "Widget Title",
					valueType: "LITERAL",
					optionEditorType: "VALUE",
				},
				{
					optionName: "typeA",
					value: "TypeA Literal Data",
					valueType: "LITERAL",
					optionEditorType: "VALUE",
				},
			],
			expectedDataOnOptionEditorGetOptions: [
				{
					Name: "Title",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "typeA",
					Value: "TypeA Literal Data",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "typeB",
					Value: "TypeA Literal Data",
					"Option-Entry Action Tooltip": "Inherits from typeA",
					"Option-Entry Action Icon": "icon-enter5",
				},
			],
			expectedDataOnTableWidgetGetValues: [
				{ name: "typeA", value: "typeA: TypeA Literal Data" },
				{ name: "typeB", value: "typeB: TypeA Literal Data" },
			],
		},
		{
			description:
				"With TypeA string option entry inheriting from Title option, TypeB string option entry inheriting from TypeA option. Setting a literal value to the Title option entry followed by TypeB option; assert value on the option entries.",
			inputOptionsData: [
				{
					optionName: "Title",
					action: "Clear",
				},
				{
					optionName: "typeA",
					action: "Clear",
				},
				{
					optionName: "typeB",
					action: "Clear",
				},
				{
					optionName: "Title",
					value: "Widget Title",
					valueType: "LITERAL",
					optionEditorType: "VALUE",
				},
				{
					optionName: "typeB",
					value: "TypeB Literal Data",
					valueType: "LITERAL",
					optionEditorType: "VALUE",
				},
			],
			expectedDataOnOptionEditorGetOptions: [
				{
					Name: "Title",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "typeA",
					Value: "Widget Title",
					"Option-Entry Action Tooltip": "Inherits from Title",
					"Option-Entry Action Icon": "icon-enter5",
				},
				{
					Name: "typeB",
					Value: "TypeB Literal Data",
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
			],
			expectedDataOnTableWidgetGetValues: [
				{ name: "typeA", value: "typeA: Widget Title" },
				{ name: "typeB", value: "typeB: TypeB Literal Data" },
			],
		},
	].forEach(
		({
			inputOptionsData,
			expectedDataOnOptionEditorGetOptions,
			expectedDataOnTableWidgetGetValues,
		}) => {
			if (inputOptionsData !== undefined) {
				inputOptionsData.forEach(
					({ optionName, value, valueType, optionEditorType, action }) => {
						if (action !== undefined && action.toUpperCase() === "CLEAR") {
							findWidget("EnumOptions")
								.openMiscellaneousOptionEditor()
								.getMiscOption(optionName)
								.clearValue();
						} else {
							findWidget("EnumOptions")
								.openMiscellaneousOptionEditor()
								.getMiscOption(optionName)
								.setValue({ value, valueType, optionEditorType });
						}
					}
				);
			}
			if (expectedDataOnOptionEditorGetOptions !== undefined) {
				findWidget("EnumOptions").closeOptionDialog();
				findWidget("EnumOptions")
					.openMiscellaneousOptionEditor()
					.getOptions()
					.should.include.something.like(expectedDataOnOptionEditorGetOptions);
			}
			if (expectedDataOnTableWidgetGetValues !== undefined) {
				findWidget("EnumOptions")
					.getValues()
					.should.include.something.like(expectedDataOnTableWidgetGetValues);
			}
		}
	);
});
