/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"With 2 Boolean option entry's, 1 inheriting value from other. Entering data to 1 option followed by other and asserting option value inheritance",
	() => {
		loadPage("Main Project/Custom Widgets");

		[
			{
				description:
					"Setting literal value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanA",
						value: "TRUE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "booleanA",
						Value: "true",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "booleanB",
						Value: "true",
						"Option-Entry Action Tooltip": "Inherits from booleanA",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "booleanA", value: "booleanA: true" },
					{ name: "booleanB", value: "booleanB: true" },
				],
			},
			{
				description:
					"Setting literal value to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanA",
						value: "FALSE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanB",
						value: "TRUE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "booleanA",
						Value: "false",
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "booleanB",
						Value: "true",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "booleanA", value: "booleanA: undefined" },
					{ name: "booleanB", value: "booleanB: true" },
				],
			},
			{
				description:
					"Setting literal value to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanB",
						value: "TRUE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanB",
						value: "FALSE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanA",
						value: "TRUE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "booleanA",
						Value: "true",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "booleanB",
						Value: "false",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "booleanA", value: "booleanA: true" },
					{ name: "booleanB", value: "booleanB: false" },
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
						.getCustomBooleanOptionsOptionEditor()
						.clearOptions(inputOptionsData)
						.setOptions(inputOptionsData);
				}
				if (expectedDataOnOptionEditorGetOptions !== undefined) {
					findWidget("EnumOptions_1").closeOptionDialog();
					findWidget("EnumOptions_1")
						.getCustomBooleanOptionsOptionEditor()
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
