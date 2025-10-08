/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Validate change of widget type from line chart to line area and check tooltip and storefocus",
	() => {
		loadPage("Main Project/AreaChart/AreaChart_2");

		findWidget("DemandColumnChart_6")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_6")
			.chartOfSeriesIsOfType(0, "area")
			.should.eql(true);

		findWidget("DemandColumnChart_6")
			.chartOfSeriesIsOfType(1, "area")
			.should.eql(true);

		// Change the default chart type to spline and verify the result.
		findWidget("DemandColumnChart_6")
			.HighChartContentsOptionEditor()
			.setOptions([
				{ groupName: "Defaults", name: "Chart Type", value: "Spline", valueType: "ENUM" },
			]);

		findWidget("DemandColumnChart_6")
			.chartOfSeriesIsOfType(0, "spline")
			.should.eql(true);

		findWidget("DemandColumnChart_6")
			.chartOfSeriesIsOfType(1, "spline")
			.should.eql(true);

		findWidget("DemandColumnChart_6")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_6")
			.getNthPointForMultipleContents({ content: 1, point: 1 })
			.click();

		findWidget("SelectedFactory_9")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");

		findWidget("DemandColumnChart_6")
			.getNthPointForMultipleContents({ content: 2, point: 1 })
			.click();

		findWidget("SelectedFactory_9")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");
	}
);
