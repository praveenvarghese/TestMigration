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
					"Setting literal value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberA",
						value: "3.14159",
						valueType: "LITERAL",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "3.14159",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "numberB",
						Value: "3.14159",
						"Option-Entry Action Tooltip": "Inherits from numberA",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "numberA", value: "numberA: 3.14159" },
					{ name: "numberB", value: "numberB: 3.14159" },
				],
			},
			{
				description:
					"Setting literal value to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberA",
						value: "3.14159",
						valueType: "LITERAL",
					},
					{
						name: "numberB",
						value: "56.1984",
						valueType: "LITERAL",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "3.14159",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "numberB",
						Value: "56.1984",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "numberA", value: "numberA: 3.14159" },
					{ name: "numberB", value: "numberB: 56.1984" },
				],
			},
			{
				description:
					"Setting literal value to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberB",
						value: "123.456789",
						valueType: "LITERAL",
					},
					{
						name: "numberA",
						value: "78.951357",
						valueType: "LITERAL",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "78.951357",
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
					{ name: "numberA", value: "numberA: 78.951357" },
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
