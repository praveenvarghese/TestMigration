/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Validate change of widget type from line chart to line area and check tooltip and storefocus",
	() => {
		loadPage("Main Project/SplineChart/SplineChart_2");

		findWidget("DemandColumnChart_8")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_8")
			.chartOfSeriesIsOfType(0, "spline")
			.should.eql(true);

		findWidget("DemandColumnChart_8")
			.chartOfSeriesIsOfType(1, "spline")
			.should.eql(true);

		// Change the default chart type to spline and verify the result.
		findWidget("DemandColumnChart_8")
			.HighChartContentsOptionEditor()
			.setOptions([
				{
					groupName: "Defaults",
					name: "Chart Type",
					value: "Area Spline",
					valueType: "ENUM",
				},
			]);

		findWidget("DemandColumnChart_8")
			.chartOfSeriesIsOfType(0, "areaspline")
			.should.eql(true);

		findWidget("DemandColumnChart_8")
			.chartOfSeriesIsOfType(1, "areaspline")
			.should.eql(true);

		findWidget("DemandColumnChart_8")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_8")
			.getNthPointForMultipleContents({ content: 1, point: 1 })
			.click();

		findWidget("SelectedFactory_12")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");

		findWidget("DemandColumnChart_8")
			.getNthPointForMultipleContents({ content: 2, point: 1 })
			.click();

		findWidget("SelectedFactory_12")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");
	}
);
