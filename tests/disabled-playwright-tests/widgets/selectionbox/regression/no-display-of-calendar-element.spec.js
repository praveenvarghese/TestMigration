/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Selectionbox V1 with a calendar element with a non-standard layout (ticket 3772)", () => {
	loadPage("Main Project/home/SelectionBoxTest");

	// Select a specific date.
	findWidget("TheDay").select("Tuesday January 14, 2020");

	// Verify that the selection had the intended effect.
	findWidget("DisplayDay")
		.getValue()
		.should.eql("Tuesday January 14, 2020");

	// Also verify (and this was the bug) that the value is now displayed in the selectionbox itself.
	findWidget("TheDay")
		.getValue()
		.should.eql("Tuesday January 14, 2020");
});
