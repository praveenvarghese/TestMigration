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
					"Setting Identifier value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
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
						Value: "calendar",
						"Option-Entry Action Tooltip": "Inherits from iconA",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: calendar" },
					{ name: "iconB", value: "iconB: calendar" },
				],
			},
			{
				description:
					"Setting Identifiers to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconA",
						value: "IconB",
						valueType: "IDENTIFIER",
					},
					{
						name: "iconB",
						value: "IconA",
						valueType: "IDENTIFIER",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "IconB",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "iconB",
						Value: "IconA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: clock" },
					{ name: "iconB", value: "iconB: calendar" },
				],
			},
			{
				description:
					"Setting Identifiers to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconB",
						value: "IconB",
						valueType: "IDENTIFIER",
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
						Value: "IconB",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: calendar" },
					{ name: "iconB", value: "iconB: clock" },
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
