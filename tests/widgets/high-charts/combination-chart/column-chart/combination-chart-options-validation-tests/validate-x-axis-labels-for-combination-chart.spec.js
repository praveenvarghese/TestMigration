/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Categories");

	findWidget("DemandColumnChart_1")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_XAxisLabel", { mode: "multiple" })
		.setValue("Data Types");

	findWidget("DemandColumnChart_1")
		.getXaxisLabel()
		.should.eql("Data Types");

	findWidget("DemandColumnChart_1")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Label",
				value: "Data Groups",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_1")
		.getXaxisLabel()
		.should.eql("Data Groups");
});
