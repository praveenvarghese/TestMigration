/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether the expected chart types are there in the combination Chart", () => {
	loadPage("Main Project/MultiChartTypesTests");

	findWidget("Multi2")
		.chartOfSeriesIsOfType(0, "column")
		.should.eql(true);

	findWidget("Multi2")
		.chartOfSeriesIsOfType(1, "line")
		.should.eql(true);

	findWidget("Multi2")
		.chartOfSeriesIsOfType(2, "area")
		.should.eql(true);

	findWidget("Multi2")
		.chartOfSeriesIsOfType(3, "spline")
		.should.eql(true);

	findWidget("Multi2")
		.chartOfSeriesIsOfType(4, "areaspline")
		.should.eql(true);

	findWidget("Multi2")
		.chartOfSeriesIsOfType(5, "scatter")
		.should.eql(true);
});
