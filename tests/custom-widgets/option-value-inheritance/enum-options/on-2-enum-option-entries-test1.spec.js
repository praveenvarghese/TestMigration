/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"With 2 Enum option entry's, 1 inheriting value from other. Entering data to 1 option followed by other and asserting option value inheritance",
	() => {
		loadPage("Main Project/Custom Widgets");

		[
			{
				description:
					"Setting literal value on the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "ChartType",
						value: "Line",
						valueType: "ENUM",
						optionEditorType: "ENUM",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "ChartType",
						Value: "Line",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "DependentChartType",
						Value: "Line",
						"Option-Entry Action Tooltip": "Inherits from ChartType",
						"Option-Entry Action Icon": "icon-enter5",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "ChartType", value: "ChartType: Line" },
					{ name: "DependentChartType", value: "DependentChartType: Line" },
				],
			},
			{
				description:
					"Setting literal value to the main option entry followed by the inherited-option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "ChartType",
						value: "Bar",
						valueType: "ENUM",
						optionEditorType: "ENUM",
					},
					{
						name: "DependentChartType",
						value: "Area",
						valueType: "ENUM",
						optionEditorType: "ENUM",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "ChartType",
						Value: "Bar",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "DependentChartType",
						Value: "Area",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "ChartType", value: "ChartType: Bar" },
					{ name: "DependentChartType", value: "DependentChartType: Area" },
				],
			},
			{
				description:
					"Setting literal value to the inherited-option entry followed by the main option entry; assert value on the 2 option entries.",
				inputOptionsData: [
					{
						name: "DependentChartType",
						value: "Line",
						valueType: "ENUM",
						optionEditorType: "ENUM",
					},
					{
						name: "ChartType",
						value: "Bar",
						valueType: "ENUM",
						optionEditorType: "ENUM",
					},
				],
				expectedDataOnOptionEditorGetOptions: [
					{
						Name: "ChartType",
						Value: "Bar",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "DependentChartType",
						Value: "Line",
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
				expectedDataOnTableWidgetGetValues: [
					{ name: "ChartType", value: "ChartType: Bar" },
					{ name: "DependentChartType", value: "DependentChartType: Line" },
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
						.getCustomEnumOptionsOptionEditor()
						.clearOptions(inputOptionsData)
						.setOptions(inputOptionsData);
				}
				if (expectedDataOnOptionEditorGetOptions !== undefined) {
					findWidget("EnumOptions_1").closeOptionDialog();
					findWidget("EnumOptions_1")
						.getCustomEnumOptionsOptionEditor()
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
