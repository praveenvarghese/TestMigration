/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"With 2 Icon option entry's, 1 inheriting value from other. Entering data to 1 option followed by other and asserting option value inheritance",
	() => {
		loadPage("Main Project/Custom Widgets");

		[
			{
				description:
					"Setting IconA Identifier to the main option entry followed by the literal 'commit' value to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconA",
						value: "IconA",
						valueType: "IDENTIFIER",
					},
					{
						name: "iconB",
						value: "commit",
						valueType: "ICON",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "IconA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "iconB",
						Value: "commit",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: calendar" },
					{ name: "iconB", value: "iconB: commit" },
				],
			},
			{
				description:
					"Setting Literal 123.456789 value to the main option entry followed by the Pi Identifier to inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconA",
						value: "delta",
						valueType: "ICON",
					},
					{
						name: "iconB",
						value: "IconB",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "delta",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "iconB",
						Value: "IconB",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: delta" },
					{ name: "iconB", value: "iconB: clock" },
				],
			},
			{
				description:
					"Setting Literal True value to the inherited-option entry followed by IsFalse Identifier to main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconB",
						value: "calculate",
						valueType: "ICON",
					},
					{
						name: "iconA",
						value: "IconA",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "IconA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "iconB",
						Value: "calculate",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: calendar" },
					{ name: "iconB", value: "iconB: calculate" },
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
						.getCustomIconOptionsOptionEditor()
						.clearOptions(inputOptionsData)
						.setOptions(inputOptionsData);
				}
				if (expectedDataOnOptionEditorGetOptions !== undefined) {
					findWidget("EnumOptions_1").closeOptionDialog();
					findWidget("EnumOptions_1")
						.getCustomIconOptionsOptionEditor()
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
