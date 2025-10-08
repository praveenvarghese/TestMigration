/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("SelectedFactory_18")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_12")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_12")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_12")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("SelectedFactory_18")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_12")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_12")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_18")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_18")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_12")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_12")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_12")
		.getLegendValues()
		.should.eql(identifiers);
});
