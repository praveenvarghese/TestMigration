/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend toggle doesnt display when parameter is configured", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_2");

	const identifiers = ["Demand", "UnitCost"];

	findWidget("DemandColumnChart_10")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");

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
		.hasLegend()
		.should.eql(false);

	findWidget("DemandColumnChart_10")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");

	findWidget("SelectedFactory_15")
		.getScalarCell("p_Demand_ShowLegend", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_10")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart_10")
		.getLegendValues()
		.should.eql(identifiers);

	findWidget("DemandColumnChart_10")
		.mouseHover()
		.getLegendButton()
		.should.be.eql("None");
});
