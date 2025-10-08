/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check combination chart Number of Line, Legend, Axes Labels on in Spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("DemandColumnChart_7")
		.getNumberOfPoints()
		.should.eql(10);

	findWidget("DemandColumnChart_7")
		.getLegendValues()
		.should.eql(["-"]);

	findWidget("DemandColumnChart_7")
		.getXaxisLabel()
		.should.eql("Categories");

	findWidget("DemandColumnChart_7")
		.getYaxisLabel()
		.should.eql("Thousands");

	getPageMenu().navigateToPage("Main Project/SplineChart/SplineChart_2");

	findWidget("DemandColumnChart_8")
		.getNumberOfPoints()
		.should.eql(20);

	findWidget("DemandColumnChart_8")
		.getNumberOfPointForSpecificContent({ content: 1 })
		.should.eql(10);

	findWidget("DemandColumnChart_8")
		.getNumberOfPointForSpecificContent({ content: 2 })
		.should.eql(10);

	findWidget("DemandColumnChart_8")
		.getLegendValues()
		.should.eql(["Demand", "UnitCost"]);

	findWidget("DemandColumnChart_8")
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

	findWidget("DemandColumnChart_8")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_8")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.hover();

	findWidget("DemandColumnChart_8")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.hover();

	findWidget("DemandColumnChart_8")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("DemandColumnChart_8").clickOnLegend("Demand");

	findWidget("DemandColumnChart_8")
		.getNumberOfPoints()
		.should.eql(10);
});
