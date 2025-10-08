/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Legend works correctly when toggled from widget header", () => {
	loadPage("Main Project/HighCharts/HighCharts_1");

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

	findWidget("DemandColumnChart")
		.mouseHover()
		.getLegendButton()
		.should.not.be.eql("None");

	findWidget("DemandColumnChart")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart")
		.getLegendValues()
		.should.eql(Centers);

	findWidget("DemandColumnChart")
		.mouseHover()
		.getLegendButton()
		.click();

	findWidget("DemandColumnChart")
		.hasLegend()
		.should.eql(false);

	findWidget("DemandColumnChart")
		.mouseHover()
		.getLegendButton()
		.should.not.be.eql("None");

	findWidget("DemandColumnChart")
		.mouseHover()
		.getLegendButton()
		.click();

	findWidget("DemandColumnChart")
		.hasLegend()
		.should.eql(true);

	findWidget("DemandColumnChart")
		.getLegendValues()
		.should.eql(Centers);

	findWidget("DemandColumnChart")
		.mouseHover()
		.getLegendButton()
		.should.not.be.eql("None");
});
