/*!
 * @AIMMS_FILE=models/DeleteBackspaceTest/DeleteBackspaceTest.aimms
 */

scenario("Fast table editing using the DELETE and BACKSPACE keys", () => {
	loadPage("Main Project/home?table-v2=true");

	// DELETE an empty numerical value
	findWidget("PepperData")
		.getCell(4, 1)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]); // It's empty after this

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_up]);

	// After the delete/up arrow combination, the cell above should have focus.
	findWidget("PepperData")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([3, 1]);
});
