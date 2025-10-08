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
					"Setting literal value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconA",
						value: "delta",
						valueType: "ICON",
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
						Value: "delta",
						"Option-Entry Action Tooltip": "Inherits from iconA",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: delta" },
					{ name: "iconB", value: "iconB: delta" },
				],
			},
			{
				description:
					"Setting literal value to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconA",
						value: "calculate",
						valueType: "ICON",
					},
					{
						name: "iconB",
						value: "calendar",
						valueType: "ICON",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "calculate",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "iconB",
						Value: "calendar",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "iconA", value: "iconA: calculate" },
					{ name: "iconB", value: "iconB: calendar" },
				],
			},
			{
				description:
					"Setting literal value to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "iconB",
						value: "commit",
						valueType: "ICON",
					},
					{
						name: "iconA",
						value: "clock",
						valueType: "ICON",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "iconA",
						Value: "clock",
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
					{ name: "iconA", value: "iconA: clock" },
					{ name: "iconB", value: "iconB: commit" },
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
