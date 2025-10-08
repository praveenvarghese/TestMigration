/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("SelectedFactory_12")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_8")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_8")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_8")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("SelectedFactory_12")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_8")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_8")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_12")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_12")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_8")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_8")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_8")
		.getLegendValues()
		.should.eql(identifiers);
});
