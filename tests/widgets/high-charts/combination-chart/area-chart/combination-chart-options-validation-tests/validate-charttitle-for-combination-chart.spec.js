/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Column Chart");

	findWidget("DemandColumnChart_5")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Centers");

	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("DemandColumnChart_5")
		.getHighChartTitle()
		.should.eql("Demand Centers");

	findWidget("SelectedFactory_7")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Column Chart");

	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("DemandColumnChart_5")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");
});
