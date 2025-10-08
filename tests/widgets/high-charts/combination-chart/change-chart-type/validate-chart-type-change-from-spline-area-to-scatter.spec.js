/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Validate change of widget type from line chart to line area and check tooltip and storefocus",
	() => {
		loadPage("Main Project/SplineAreaChart/SplineAreaChart_2");

		findWidget("DemandColumnChart_10")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_10")
			.chartOfSeriesIsOfType(0, "areaspline")
			.should.eql(true);

		findWidget("DemandColumnChart_10")
			.chartOfSeriesIsOfType(1, "areaspline")
			.should.eql(true);

		// Change the default chart type to spline and verify the result.
		findWidget("DemandColumnChart_10")
			.HighChartContentsOptionEditor()
			.setOptions([
				{
					groupName: "Defaults",
					name: "Chart Type",
					value: "Scatter",
					valueType: "ENUM",
				},
			]);

		findWidget("DemandColumnChart_10")
			.chartOfSeriesIsOfType(0, "scatter")
			.should.eql(true);

		findWidget("DemandColumnChart_10")
			.chartOfSeriesIsOfType(1, "scatter")
			.should.eql(true);

		findWidget("DemandColumnChart_10")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_10")
			.getNthPointForMultipleContents({ content: 1, point: 1 })
			.click();

		findWidget("SelectedFactory_15")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");

		findWidget("DemandColumnChart_10")
			.getNthPointForMultipleContents({ content: 2, point: 1 })
			.click();

		findWidget("SelectedFactory_15")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");
	}
);
