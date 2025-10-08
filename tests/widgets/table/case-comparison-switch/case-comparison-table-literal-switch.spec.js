/*!
 * @AIMMS_FILE=models/CaseComparisonModel/CaseComparisonModel.aimms
 */

scenario("Verify the behaviour of the literal Case Comparison switch in the Table options", () => {
	loadPage("Main Project/home");

	// Load Case2 as the comparison case (Case1 is already the active case upon startup of the model).
	openDataManager()
		.getCase("Case2")
		.compare();

	// Table "Rose Export" has the Case Comparison switch set to 'on'.
	findWidget("Rose Export")
		.getRowHeaderCells(1, 0, 1)
		.should.eql(["Case1", "Case2"]);

	// Table "Tulip Export" has the Case Comparison switch set to 'off'.
	findWidget("Tulip Export")
		.getNumRowsInColHeaderViewport()
		.should.eql(1);
});
