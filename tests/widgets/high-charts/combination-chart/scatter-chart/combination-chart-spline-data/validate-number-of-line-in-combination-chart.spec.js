/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check combination chart Number of Line, Legend, Axes Labels on in scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("DemandColumnChart_11")
		.getNumberOfPoints()
		.should.eql(10);

	findWidget("DemandColumnChart_11")
		.getLegendValues()
		.should.eql(["-"]);

	findWidget("DemandColumnChart_11")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("DemandColumnChart_11")
		.getYaxisLabel()
		.should.eql("Thousands");

	getPageMenu().navigateToPage("Main Project/ScatterChart/ScatterChart_2");

	findWidget("DemandColumnChart_12")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_12")
		.getNumberOfPointForSpecificContent({ content: 1 })
		.should.eql(10);

	findWidget("DemandColumnChart_12")
		.getNumberOfPointForSpecificContent({ content: 2 })
		.should.eql(10);

	findWidget("DemandColumnChart_12")
		.getLegendValues()
		.should.eql(["Demand", "UnitCost"]);

	findWidget("DemandColumnChart_12")
		.getXaxisScaleValues()
		.should.eql([
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
		]);

	findWidget("DemandColumnChart_12")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_12")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.hover();

	findWidget("DemandColumnChart_12")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.hover();

	findWidget("DemandColumnChart_12")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_12").clickOnLegend("Demand");

	findWidget("DemandColumnChart_12")
		.getNumberOfPoints()
		.should.eql(10);
});
