/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for column chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Column Chart");

	findWidget("DemandColumnChart_1")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Centers");

	//  loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.getHighChartTitle()
		.should.eql("Demand Centers");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_ChartTitle", { mode: "multiple" })
		.setValue("Demand Column Chart");

	//  loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.getHighChartTitle()
		.should.eql("Demand Column Chart");
});
