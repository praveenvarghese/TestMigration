/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend toggle doesnt display when parameter is configured", () => {
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

	findWidget("DemandColumnChart_1")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");

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
		.hasLegend()
		.should.eql(false);

	findWidget("DemandColumnChart_1")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_1")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Centers);

	findWidget("DemandColumnChart_1")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");
});
