/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Entering data onto TypeA and TypeB String option entries and asserting option value inheritance",
	() => {
		loadPage("Main Project/home");

		[
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. Setting literal value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeA",
						value: "BaseValue",
						valueType: "LITERAL",
						optionEditorType: "VALUE",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{ Name: "typeA", Value: "BaseValue" },
					{ Name: "typeB", Value: "BaseValue" },
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeA", value: "typeA: BaseValue" },
					{ name: "typeB", value: "typeB: BaseValue" },
				],
			},
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. Setting literal value to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeA",
						value: "BaseValue",
						valueType: "LITERAL",
						optionEditorType: "VALUE",
					},
					{
						optionName: "typeB",
						value: "UniqueValue",
						valueType: "LITERAL",
						optionEditorType: "VALUE",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{ Name: "typeA", Value: "BaseValue" },
					{ Name: "typeB", Value: "UniqueValue" },
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeA", value: "typeA: BaseValue" },
					{ name: "typeB", value: "typeB: UniqueValue" },
				],
			},
			{
				description:
					"With 2 string option entry's, 1 inheriting value from other. Setting literal value to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						optionName: "typeB",
						value: "UniqueValue",
						valueType: "LITERAL",
						optionEditorType: "VALUE",
					},
					{
						optionName: "typeA",
						value: "BaseValue",
						valueType: "LITERAL",
						optionEditorType: "VALUE",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{ Name: "typeA", Value: "BaseValue" },
					{ Name: "typeB", Value: "UniqueValue" },
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "typeA", value: "typeA: BaseValue" },
					{ name: "typeB", value: "typeB: UniqueValue" },
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
						({ optionName, value, valueType, optionEditorType }) => {
							findWidget("EnumOptions")
								.openMiscellaneousOptionEditor()
								.getMiscOption(optionName)
								.clearValue()
								.setValue({ value, valueType, optionEditorType });
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
