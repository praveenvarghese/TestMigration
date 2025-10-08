/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"With 2 Number option entry's, 1 inheriting value from other. Entering data to 1 option followed by other and asserting option value inheritance",
	() => {
		loadPage("Main Project/Custom Widgets");

		[
			{
				description:
					"Setting Pi Identifier to the main option entry followed by the literal 123.456789 value to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberA",
						value: "Pi",
						valueType: "IDENTIFIER",
					},
					{
						name: "numberB",
						value: "123.456789",
						valueType: "LITERAL",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "Pi",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "numberB",
						Value: "123.456789",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "numberA", value: "numberA: 3.14159" },
					{ name: "numberB", value: "numberB: 123.456789" },
				],
			},
			{
				description:
					"Setting Literal 123.456789 value to the main option entry followed by the Pi Identifier to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberA",
						value: "123.456789",
						valueType: "LITERAL",
					},
					{
						name: "numberB",
						value: "Pi",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "123.456789",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "numberB",
						Value: "Pi",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "numberA", value: "numberA: 123.456789" },
					{ name: "numberB", value: "numberB: 3.14159" },
				],
			},
			{
				description:
					"Setting Literal True value to the inherited-option entry followed by IsFalse Identifier to main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberB",
						value: "123.456789",
						valueType: "LITERAL",
					},
					{
						name: "numberA",
						value: "Pi",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "Pi",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "numberB",
						Value: "123.456789",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "numberA", value: "numberA: 3.14159" },
					{ name: "numberB", value: "numberB: 123.456789" },
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
						.getCustomNumberOptionsOptionEditor()
						.clearOptions(inputOptionsData)
						.setOptions(inputOptionsData);
				}
				if (expectedDataOnOptionEditorGetOptions !== undefined) {
					findWidget("EnumOptions_1").closeOptionDialog();
					findWidget("EnumOptions_1")
						.getCustomNumberOptionsOptionEditor()
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
