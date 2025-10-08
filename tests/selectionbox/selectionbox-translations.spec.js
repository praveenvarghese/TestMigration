/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario("Verify whether translation files work for the selectionbox V2.", () => {
	loadPage("Main Project/5thPage");

	// Open the dropdown with the item to select
	findWidget("HugeOne")
		.getValue()
		.should.eql("Select Huge Entry From The List");
});
