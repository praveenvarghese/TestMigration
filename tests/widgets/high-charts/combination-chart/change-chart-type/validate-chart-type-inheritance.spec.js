/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether the expected chart types are there in the combination Chart", () => {
	loadPage("Main Project/MultiChartTypesTests");

	// Series 0 should be column, series 1 should be area. The default value is area, which is overruled for
	// series 0 in the options area.
	findWidget("Multi1")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(1, "area")
		.should.eql(true);

	// Change the default chart type to line and verify the result.
	findWidget("Multi1")
		.HighChartContentsOptionEditor()
		.setOptions([
			{ groupName: "Defaults", name: "Chart Type", value: "Line", valueType: "ENUM" },
		]);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(1, "line")
		.should.eql(true);

	// Clear the default chart type (which should set it to the 'default default', which is "column") and verify the result.
	findWidget("Multi1")
		.HighChartContentsOptionEditor()
		.clearOptions([{ groupName: "Defaults", name: "Chart Type" }]);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(1, "column")
		.should.eql(true);

	// Add a new identifier to the contents. The resulting chart for it should get the default type of "column".
	findWidget("Multi1")
		.HighChartContentsOptionEditor()
		.addSet({
			value: "Value3",
			type: "identifier",
		});

	findWidget("Multi1")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(1, "column")
		.should.eql(true);

	findWidget("Multi1")
		.chartOfSeriesIsOfType(2, "column")
		.should.eql(true);
});
