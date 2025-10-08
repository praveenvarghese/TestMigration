/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Categories");

	findWidget("DemandColumnChart_7")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.setValue("Data Types");

	findWidget("DemandColumnChart_7")
		.getXaxisLabel()
		.should.eql("Data Types");

	findWidget("DemandColumnChart_7")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Label",
				value: "Data Groups",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_7")
		.getXaxisLabel()
		.should.eql("Data Groups");
});
