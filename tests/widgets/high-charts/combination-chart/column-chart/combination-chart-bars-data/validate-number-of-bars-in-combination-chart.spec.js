/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Check combination chart Number of Bars, Legend, Axes Labels on PageV2 with Custom layout",
	() => {
		loadPage("Main Project/ColumnChart/ColumnChart_1");

		findWidget("DemandColumnChart_1")
			.getNumberOfBars()
			.should.eql(10);

		findWidget("DemandColumnChart_1")
			.getLegendValues()
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

		findWidget("DemandColumnChart_1")
			.getXaxisLabel()
			.should.eql("Categories");

		findWidget("DemandColumnChart_1")
			.getYaxisLabel()
			.should.eql("Thousands");

		getPageMenu().navigateToPage("Main Project/ColumnChart/ColumnChart_2");

		findWidget("DemandColumnChart_2")
			.getNumberOfBars()
			.should.eql(20);

		findWidget("DemandColumnChart_2")
			.getNumberOfBarsForSpecificContent({ content: 1 })
			.should.eql(2);

		findWidget("DemandColumnChart_2")
			.getNumberOfBarsForSpecificContent({ content: 2 })
			.should.eql(2);

		findWidget("DemandColumnChart_2")
			.getLegendValues()
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

		findWidget("DemandColumnChart_2")
			.getXaxisScaleValues()
			.should.eql(["Demand", "UnitCost"]);

		findWidget("DemandColumnChart_2")
			.getYaxisLabel()
			.should.eql("Thousands");

		findWidget("DemandColumnChart_2").clickOnLegend("Amsterdam");

		findWidget("DemandColumnChart_2")
			.getNumberOfBars()
			.should.eql(18);
	}
);
