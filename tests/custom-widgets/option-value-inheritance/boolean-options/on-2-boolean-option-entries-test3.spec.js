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
					"Setting IsTrue Identifier to the main option entry followed by the literal False value to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanA",
						value: "IsTrue",
						valueType: "IDENTIFIER",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanB",
						value: "FALSE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "booleanA",
						Value: "IsTrue",
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
			{
				description:
					"Setting Literal True value to the main option entry followed by the IsFalse Identifier to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanA",
						value: "True",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanB",
						value: "IsFalse",
						valueType: "IDENTIFIER",
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
						Value: "IsFalse",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "booleanA", value: "booleanA: true" },
					{ name: "booleanB", value: "booleanB: false" },
				],
			},
			{
				description:
					"Setting Literal True value to the inherited-option entry followed by IsFalse Identifier to main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "booleanB",
						value: "TRUE",
						valueType: "LITERAL",
						optionEditorType: "BOOLEAN",
					},
					{
						name: "booleanA",
						value: "IsFalse",
						valueType: "IDENTIFIER",
						optionEditorType: "BOOLEAN",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "booleanA",
						Value: "IsFalse",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "booleanB",
						Value: "true",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "booleanA", value: "booleanA: false" },
					{ name: "booleanB", value: "booleanB: true" },
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
