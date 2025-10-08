/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether X Axis Label works correctly for a Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.getValue()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_5")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_YAxisLabel", { mode: "multiple" })
		.setValue("Tons");

	findWidget("DemandColumnChart_5")
		.getYaxisLabel()
		.should.eql("Tons");

	findWidget("DemandColumnChart_5")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Label",
				value: "Thousands of Kg",
				valueType: "LITERAL",
			},
		]);

	findWidget("DemandColumnChart_5")
		.getYaxisLabel()
		.should.eql("Thousands of Kg");
});
