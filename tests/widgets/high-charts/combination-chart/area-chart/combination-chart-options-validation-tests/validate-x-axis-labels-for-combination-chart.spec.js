/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Categories");

	findWidget("DemandColumnChart_5")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.setValue("Data Types");

	findWidget("DemandColumnChart_5")
		.getXaxisLabel()
		.should.eql("Data Types");

	findWidget("DemandColumnChart_5")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Label",
				value: "Data Groups",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_5")
		.getXaxisLabel()
		.should.eql("Data Groups");
});
