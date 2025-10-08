/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("SelectedFactory_9")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_6")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_6")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_6")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("SelectedFactory_9")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_6")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_6")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_9")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_9")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_6")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_6")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_6")
		.getLegendValues()
		.should.eql(identifiers);
});
