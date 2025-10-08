/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario(
	"Validate change of widget type from line chart to line area and check tooltip and storefocus",
	() => {
		loadPage("Main Project/LineChart/LineChart_2");

		findWidget("DemandColumnChart_4")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_4")
			.chartOfSeriesIsOfType(0, "line")
			.should.eql(true);

		findWidget("DemandColumnChart_4")
			.chartOfSeriesIsOfType(1, "line")
			.should.eql(true);

		// Change the default chart type to area and verify the result.
		findWidget("DemandColumnChart_4")
			.HighChartContentsOptionEditor()
			.setOptions([
				{ groupName: "Defaults", name: "Chart Type", value: "Area", valueType: "ENUM" },
			]);

		findWidget("DemandColumnChart_4")
			.chartOfSeriesIsOfType(0, "area")
			.should.eql(true);

		findWidget("DemandColumnChart_4")
			.chartOfSeriesIsOfType(1, "area")
			.should.eql(true);

		findWidget("DemandColumnChart_4")
			.getNumberOfPoints()
			.should.eql(20);

		findWidget("DemandColumnChart_4")
			.getNthPointForMultipleContents({ content: 1, point: 1 })
			.click();

		findWidget("SelectedFactory_6")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");

		findWidget("DemandColumnChart_4")
			.getNthPointForMultipleContents({ content: 2, point: 1 })
			.click();

		findWidget("SelectedFactory_6")
			.getScalarCell("ep_SomeCenter", { mode: "multiple" })
			.getValue()
			.should.eql("Amsterdam");
	}
);
