/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"With 2 Integer option entry's, 1 inheriting value from other. Entering data to 1 option followed by other and asserting option value inheritance",
	() => {
		loadPage("Main Project/Custom Widgets");

		[
			{
				description:
					"Setting Identifier value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "integerA",
						value: "IntegerA",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "integerA",
						Value: "IntegerA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "integerB",
						Value: "2021",
						"Option-Entry Action Tooltip": "Inherits from integerA",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "integerA", value: "integerA: 2021" },
					{ name: "integerB", value: "integerB: 2021" },
				],
			},
			{
				description:
					"Setting Identifiers to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "integerA",
						value: "MyInteger",
						valueType: "IDENTIFIER",
					},
					{
						name: "integerB",
						value: "IntegerB",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "integerA",
						Value: "MyInteger",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "integerB",
						Value: "IntegerB",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "integerA", value: "integerA: 56" },
					{ name: "integerB", value: "integerB: 2020" },
				],
			},
			{
				description:
					"Setting Identifiers to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "integerB",
						value: "IntegerA",
						valueType: "IDENTIFIER",
					},
					{
						name: "integerA",
						value: "IntegerB",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "integerA",
						Value: "IntegerB",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "integerB",
						Value: "IntegerA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "integerA", value: "integerA: 2020" },
					{ name: "integerB", value: "integerB: 2021" },
				],
			},
		].forEach(
			({
				inputOptionsData,
				expectedDataOnOptionEditorGetOptions,
				expectedDataOnTableWidgetGetValues,
			}) => {
				if (inputOptionsData !== undefined) {
					findWidget("EnumOptions_1")
						.getCustomIntegerOptionsOptionEditor()
						.clearOptions(inputOptionsData)
						.setOptions(inputOptionsData);
				}
				if (expectedDataOnOptionEditorGetOptions !== undefined) {
					findWidget("EnumOptions_1").closeOptionDialog();
					findWidget("EnumOptions_1")
						.getCustomIntegerOptionsOptionEditor()
						.getOptions()
						.should.include.something.like(expectedDataOnOptionEditorGetOptions);
				}
				if (expectedDataOnTableWidgetGetValues !== undefined) {
					findWidget("EnumOptions_1")
						.getValues()
						.should.include.something.like(expectedDataOnTableWidgetGetValues);
				}
			}
		);
	}
);
