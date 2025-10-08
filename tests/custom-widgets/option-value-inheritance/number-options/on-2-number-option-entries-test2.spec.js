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
					"Setting Identifier value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
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
					"Setting Identifiers to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberA",
						value: "Number",
						valueType: "IDENTIFIER",
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
						Value: "Number",
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
					"Setting Identifiers to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "numberB",
						value: "Pi",
						valueType: "IDENTIFIER",
					},
					{
						name: "numberA",
						value: "Number",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "numberA",
						Value: "Number",
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
