/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline area chart", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Column Chart");

	findWidget("DemandColumnChart_9")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Centers");

	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("DemandColumnChart_9")
		.getHighChartTitle()
		.should.eql("Demand Centers");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Column Chart");

	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("DemandColumnChart_9")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");
});
