/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	const Centers = [
		"Amsterdam",
		"Copenhagen",
		"Dresden",
		"Edinburgh",
		"Frankfurt",
		"Liege",
		"Marseilles",
		"Nantes",
		"Paris",
		"Vienna",
	];

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.eql(10);

	findWidget("DemandColumnChart_1")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Centers);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.eql(10);

	findWidget("DemandColumnChart_1")
		.hasLegend()
		.should.eql(false);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.eql(10);

	findWidget("DemandColumnChart_1")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Centers);
});
