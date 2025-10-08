/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Check combination chart Number of Line, Legend, Axes Labels on PageV2 with Custom layout",
	() => {
		loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

		findWidget("DemandColumnChart_9")
			.getNumberOfPoints()
			.should.eql(10);

		findWidget("DemandColumnChart_9")
			.getLegendValues()
			.should.eql(["-"]);

		findWidget("DemandColumnChart_9")
			.getXaxisLabel()
			.should.eql("Categories");

		findWidget("DemandColumnChart_9")
			.getYaxisLabel()
			.should.eql("Thousands");

		getPageMenu().navigateToPage("Main Project/SplineAreaChart/SplineAreaChart_2");

		findWidget("DemandColumnChart_10")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_10")
			.getNumberOfPointForSpecificContent({ content: 1 })
			.should.eql(10);

		findWidget("DemandColumnChart_10")
			.getNumberOfPointForSpecificContent({ content: 2 })
			.should.eql(10);

		findWidget("DemandColumnChart_10")
			.getLegendValues()
			.should.eql(["Demand", "UnitCost"]);

		findWidget("DemandColumnChart_10")
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

		findWidget("DemandColumnChart_10")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_10")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_10")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_10")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_10")
			.getNumberOfAreas()
			.should.eql(2);

		findWidget("DemandColumnChart_10")
			.getNthChart({ content: 0 })
			.getClassNames()
			.should.contain("annotation-Demand");

		findWidget("DemandColumnChart_10")
			.getNthChart({ content: 1 })
			.getClassNames()
			.should.contain("annotation-UnitCost");

		findWidget("DemandColumnChart_10").clickOnLegend("Demand");

		findWidget("DemandColumnChart_10")
			.getNumberOfPoints()
			.should.eql(10);

		findWidget("DemandColumnChart_10")
			.getNumberOfAreas()
			.should.eql(1);

		findWidget("DemandColumnChart_10")
			.hasAreaForSpecificContent({ content: 1 })
			.should.eql(true);
	}
);
