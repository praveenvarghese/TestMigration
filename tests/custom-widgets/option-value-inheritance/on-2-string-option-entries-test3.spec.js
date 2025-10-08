/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Entering data onto TypeC and TypeD String option entries and asserting option value inheritance",
	() => {
		loadPage("Main Project/home");

		[
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. Setting Identifier to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeC",
						value: "INDIA",
						valueType: "IDENTIFIER",
						optionEditorType: "VALUE",
					},
					{
						optionName: "typeD",
						value: "TheNetherlands",
						valueType: "IDENTIFIER",
						optionEditorType: "VALUE",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "typeC",
						Value: "INDIA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "typeD",
						Value: "TheNetherlands",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeC", value: "typeC: New Delhi" },
					{ name: "typeD", value: "typeD: Amsterdam" },
				],
			},
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. Setting Identifier to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeC",
						action: "Clear",
					},
					{
						optionName: "typeD",
						action: "Clear",
					},
					{
						optionName: "typeD",
						value: "TheNetherlands",
						valueType: "IDENTIFIER",
						optionEditorType: "VALUE",
					},
					{
						optionName: "typeC",
						value: "INDIA",
						valueType: "IDENTIFIER",
						optionEditorType: "VALUE",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "typeC",
						Value: "INDIA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "typeD",
						Value: "TheNetherlands",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeC", value: "typeC: New Delhi" },
					{ name: "typeD", value: "typeD: Amsterdam" },
				],
			},
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. And having individual Identifier's set to them from previous action. Clearing off the identifier of inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeD",
						action: "Clear",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "typeC",
						Value: "INDIA",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "typeD",
						Value: "New Delhi",
						"Option-Entry Action Tooltip": "Inherits from typeC",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeC", value: "typeC: New Delhi" },
					{ name: "typeD", value: "typeD: New Delhi" },
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
	}
);
