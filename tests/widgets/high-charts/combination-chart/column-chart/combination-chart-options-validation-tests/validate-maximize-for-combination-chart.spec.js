/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether widget maximization works fine on a Column Chart", () => {
	loadPage("Main Project/home");

	findWidget("ColChart1")
		.getNumberOfBars()
		.should.eql(55);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017",
			"2018",
			"2019",
			"2020",
		]);
	findWidget("ColChart1")
		.isFullScreen()
		.should.eql(false);

	findWidget("ColChart1").goInFullScreenMode();

	findWidget("ColChart1")
		.getNumberOfBars()
		.should.eql(55);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017",
			"2018",
			"2019",
			"2020",
		]);

	// Check whether the widget has indeed expanded
	findWidget("ColChart1")
		.isFullScreen()
		.should.eql(true);
});
