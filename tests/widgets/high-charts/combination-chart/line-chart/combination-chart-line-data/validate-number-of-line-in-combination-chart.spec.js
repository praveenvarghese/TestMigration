/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Check combination chart Number of Line, Legend, Axes Labels on PageV2 with Custom layout",
	() => {
		loadPage("Main Project/LineChart/LineChart_1");

		findWidget("DemandColumnChart_3")
			.getNumberOfPoints()
			.should.eql(10);

		findWidget("DemandColumnChart_3")
			.getLegendValues()
			.should.eql(["-"]);

		findWidget("DemandColumnChart_3")
			.getXaxisLabel()
			.should.eql("Categories");

		findWidget("DemandColumnChart_3")
			.getYaxisLabel()
			.should.eql("Thousands");

		getPageMenu().navigateToPage("Main Project/LineChart/LineChart_2");

		findWidget("DemandColumnChart_4")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_4")
			.getNumberOfPointForSpecificContent({ content: 1 })
			.should.eql(10);

		findWidget("DemandColumnChart_4")
			.getNumberOfPointForSpecificContent({ content: 2 })
			.should.eql(10);

		findWidget("DemandColumnChart_4")
			.getLegendValues()
			.should.eql(["Demand", "UnitCost"]);

		findWidget("DemandColumnChart_4")
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

		findWidget("DemandColumnChart_4")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_4")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_4")
			.getNthPointForMultipleContents({ content: 1, point: 5 })
			.hover();

		findWidget("DemandColumnChart_4")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_4").clickOnLegend("Demand");

		findWidget("DemandColumnChart_4")
			.getNumberOfPoints()
			.should.eql(10);
	}
);
