/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Check combination chart Number of Line, Legend, Axes Labels on PageV2 with Custom layout",
	() => {
		loadPage("Main Project/AreaChart/AreaChart_1");

		findWidget("DemandColumnChart_5")
			.getNumberOfPoints()
			.should.eql(10);

		findWidget("DemandColumnChart_5")
			.getLegendValues()
			.should.eql(["-"]);

		findWidget("DemandColumnChart_5")
			.getXaxisLabel()
			.should.eql("Categories");

		findWidget("DemandColumnChart_5")
			.getYaxisLabel()
			.should.eql("Thousands");

		getPageMenu().navigateToPage("Main Project/AreaChart/AreaChart_2");

		findWidget("DemandColumnChart_6")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_6")
			.getNumberOfPointForSpecificContent({ content: 1 })
			.should.eql(10);

		findWidget("DemandColumnChart_6")
			.getNumberOfPointForSpecificContent({ content: 2 })
			.should.eql(10);

		findWidget("DemandColumnChart_6")
			.getLegendValues()
			.should.eql(["Demand", "UnitCost"]);

		findWidget("DemandColumnChart_6")
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

		findWidget("DemandColumnChart_6")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_6")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_6")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_6")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_6")
			.getNumberOfAreas()
			.should.eql(2);

		findWidget("DemandColumnChart_6")
			.getNthChart({ content: 0 })
			.getClassNames()
			.should.contain("annotation-Demand");

		findWidget("DemandColumnChart_6")
			.getNthChart({ content: 1 })
			.getClassNames()
			.should.contain("annotation-UnitCost");

		findWidget("DemandColumnChart_6").clickOnLegend("Demand");

		findWidget("DemandColumnChart_6")
			.getNumberOfPoints()
			.should.eql(10);

		findWidget("DemandColumnChart_6")
			.getNumberOfAreas()
			.should.eql(1);

		findWidget("DemandColumnChart_6")
			.hasAreaForSpecificContent({ content: 1 })
			.should.eql(true);
	}
);
