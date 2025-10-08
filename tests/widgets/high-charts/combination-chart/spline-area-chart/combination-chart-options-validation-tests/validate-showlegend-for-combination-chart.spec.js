/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a spline area chart", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("SelectedFactory_15")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_10")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_10")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_10")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("SelectedFactory_15")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_10")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_10")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_15")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_15")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_10")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_10")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_10")
		.getLegendValues()
		.should.eql(identifiers);
});
