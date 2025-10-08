/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a spline area chart", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_9")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.setValue("Tons");

	findWidget("DemandColumnChart_9")
		.getYaxisLabel()
		.should.eql("Tons");

	findWidget("DemandColumnChart_9")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Label",
				value: "Thousands of Kg",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_9")
		.getYaxisLabel()
		.should.eql("Thousands of Kg");
});
