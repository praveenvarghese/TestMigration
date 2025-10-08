/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate change of value of the option Y Axis in Contents Defaults", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.eql(10);

	findWidget("DemandColumnChart_1")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	// Change the default chart type to line and verify the result.
	findWidget("DemandColumnChart_1")
		.HighChartContentsOptionEditor()
		.setOptions([
			{ groupName: "Defaults", name: "Chart Type", value: "Line", valueType: "ENUM" },
			{ groupName: "Defaults", name: "Y Axis", value: "Secondary Axis", valueType: "ENUM" },
		]);

	findWidget("DemandColumnChart_1")
		.chartOfSeriesIsOfType(0, "line")
		.should.eql(true);

	findWidget("DemandColumnChart_1")
		.getNumberOfPoints()
		.should.eql(10);

	findWidget("DemandColumnChart_1")
		.getNthPointForSingleContent({ point: 9 })
		.click();

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Paris");
});
