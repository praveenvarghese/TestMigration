/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Validate change of widget type from line chart to line area and check tooltip and storefocus",
	() => {
		loadPage("Main Project/ScatterChart/ScatterChart_2");

		findWidget("DemandColumnChart_12")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_12")
			.chartOfSeriesIsOfType(0, "scatter")
			.should.eql(true);

		findWidget("DemandColumnChart_12")
			.chartOfSeriesIsOfType(1, "scatter")
			.should.eql(true);

		// Change the default chart type to spline and verify the result.
		findWidget("DemandColumnChart_12")
			.HighChartContentsOptionEditor()
			.setOptions([
				{
					groupName: "Defaults",
					name: "Chart Type",
					value: "Column",
					valueType: "ENUM",
				},
			]);

		findWidget("DemandColumnChart_12")
			.chartOfSeriesIsOfType(0, "column")
			.should.eql(true);

		findWidget("DemandColumnChart_12")
			.chartOfSeriesIsOfType(1, "column")
			.should.eql(true);

		findWidget("DemandColumnChart_12")
			.getNumberOfBars()
			.should.eql(20);

		findWidget("DemandColumnChart_12")
			.getNthBarForMultipleContents({ content: 1, bar: 1 })
			.click();

		findWidget("SelectedFactory_18")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");
	}
);
