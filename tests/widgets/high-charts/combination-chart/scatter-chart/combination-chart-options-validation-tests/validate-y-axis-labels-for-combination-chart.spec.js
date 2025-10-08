/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_11")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.setValue("Tons");

	findWidget("DemandColumnChart_11")
		.getYaxisLabel()
		.should.eql("Tons");

	findWidget("DemandColumnChart_11")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Label",
				value: "Thousands of Kg",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_11")
		.getYaxisLabel()
		.should.eql("Thousands of Kg");
});
