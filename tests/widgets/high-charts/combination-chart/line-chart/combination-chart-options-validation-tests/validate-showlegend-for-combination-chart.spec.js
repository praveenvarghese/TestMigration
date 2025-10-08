/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a Column Chart", () => {
	loadPage("Main Project/LineChart/LineChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("SelectedFactory_6")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_4")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_4")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_4")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("SelectedFactory_6")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_4")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_4")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_6")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_6")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_4")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_4")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_4")
		.getLegendValues()
		.should.eql(identifiers);
});
