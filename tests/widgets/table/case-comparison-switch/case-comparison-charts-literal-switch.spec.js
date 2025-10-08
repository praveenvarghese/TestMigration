/*!
 * @AIMMS_FILE=models/CaseComparisonModel/CaseComparisonModel.aimms
 */

scenario("Verify the behaviour of the literal Case Comparison switch in the various Charts", () => {
	// All charts on this page have the Case Comparison switch set to 'on'. Verify that.
	loadPage("Main Project/Chart Page CC On");

	// Load Case2 as the comparison case (Case1 is already the active case upon startup of the model).
	openDataManager()
		.getCase("Case2")
		.compare();

	findWidget("Barline")
		.getNumberOfBars()
		.should.eql(30);

	findWidget("Bar")
		.getNumberOfBars()
		.should.eql(36);

	findWidget("Line")
		.getCountOfPoints()
		.should.eql(36);

	findWidget("Pie")
		.getWedgesCount()
		.should.eql(9);

	findWidget("Tree")
		.getRectanglesCount()
		.should.eql(12);

	// All charts on this page have the Case Comparison switch set to 'off'. Verify that.
	loadPage("Main Project/Chart Page CC off");

	findWidget("Barline_1")
		.getNumberOfBars()
		.should.eql(0);

	findWidget("Bar_1")
		.getNumberOfBars()
		.should.eql(18);

	findWidget("Line_1")
		.getCountOfPoints()
		.should.eql(18);

	findWidget("Pie_1")
		.getWedgesCount()
		.should.eql(4);

	findWidget("Tree_1")
		.getRectanglesCount()
		.should.eql(3);
});
