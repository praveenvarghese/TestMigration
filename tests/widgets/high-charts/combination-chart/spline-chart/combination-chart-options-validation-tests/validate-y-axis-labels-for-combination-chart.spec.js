/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_7")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.setValue("Tons");

	findWidget("DemandColumnChart_7")
		.getYaxisLabel()
		.should.eql("Tons");

	findWidget("DemandColumnChart_7")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Label",
				value: "Thousands of Kg",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_7")
		.getYaxisLabel()
		.should.eql("Thousands of Kg");
});
