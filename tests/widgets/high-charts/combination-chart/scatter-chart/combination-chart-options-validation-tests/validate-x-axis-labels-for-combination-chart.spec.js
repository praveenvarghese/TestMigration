/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Categories");

	findWidget("DemandColumnChart_11")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.setValue("Data Types");

	findWidget("DemandColumnChart_11")
		.getXaxisLabel()
		.should.eql("Data Types");

	findWidget("DemandColumnChart_11")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Label",
				value: "Data Groups",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_11")
		.getXaxisLabel()
		.should.eql("Data Groups");
});
