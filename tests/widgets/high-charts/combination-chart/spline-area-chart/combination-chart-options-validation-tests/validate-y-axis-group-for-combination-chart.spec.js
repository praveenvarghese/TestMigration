/*!
 * @AIMMS_FILE=models/SplineAreaChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check the Y-axis functionality of the spline area chart.", () => {
	loadPage("Main Project/YAxisTests");

	// A literal X-axis label
	findWidget("Y1")
		.getYaxisLabel()
		.should.eql("I never saw the sea");

	// A sliced 2-dimensional string parameter as X-axis label
	findWidget("Y2")
		.getYaxisLabel()
		.should.eql("Switzerland");
});
