/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Column Chart");

	findWidget("DemandColumnChart_7")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Centers");

	//  loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_7")
		.getHighChartTitle()
		.should.eql("Demand Centers");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Column Chart");

	//  loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_7")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");
});
