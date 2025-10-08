/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario("Verify the scrollbar behaviour of the selectionbox.", () => {
	loadPage("Main Project/2ndPage");

	// Click the dropdown open.
	findWidget("BigNumberBox").click();

	findWidget("BigNumberBox")
		.getAllFullyVisibleOptions()
		.should.eql(["1", "2", "3", "4", "5", "6"]);

	findWidget("BigNumberBox").scrollPageDown();

	findWidget("BigNumberBox")
		.getAllFullyVisibleOptions()
		.should.eql(["7", "8", "9", "10", "11", "12"]);

	// Now actually select one of the values and see if it is indeed passed to AIMMS correctly
	findWidget("BigNumberBox").select("10");

	findWidget("SelNum")
		.getValue()
		.should.eql("10");
});
