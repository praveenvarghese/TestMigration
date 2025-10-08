/*!
 * @AIMMS_FILE=models/ScatterChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check the X-axis functionality of the Column Chart.", () => {
	loadPage("Main Project/XAxisTests");

	// A literal X-axis label
	findWidget("X1")
		.getXaxisLabel()
		.should.eql("All super beautiful values...");

	// A sliced 2-dimensional string parameter as X-axis label
	findWidget("X2")
		.getXaxisLabel()
		.should.eql("Austria (2020)");
});
