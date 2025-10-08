/*!
 * @AIMMS_FILE=models/SplineChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether the Column Chart handles the display domain well", () => {
	loadPage("Main Project/DDTests");

	// A two-dimensional Display Domain
	findWidget("DD1")
		.getNumberOfPoints()
		.should.eql(15);

	// A two-dimensional Display Domain with one index sliced to a fixed value
	findWidget("DD2")
		.getNumberOfPoints()
		.should.eql(9);

	// Display Domain as a literal 1
	findWidget("DD3")
		.getNumberOfPoints()
		.should.eql(55);

	// Display Domain as a literal 0
	findWidget("DD4")
		.getEmptyMessage()
		.should.eql("No Data");
});
