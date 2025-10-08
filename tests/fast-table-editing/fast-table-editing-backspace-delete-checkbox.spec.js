/*!
 * @AIMMS_FILE=models/DeleteBackspaceTest/DeleteBackspaceTest.aimms
 */

scenario("Fast table editing using the DELETE and BACKSPACE keys for CHECKBOX cells", () => {
	loadPage("Main Project/home");

	// DELETE Checkbox value
	findWidget("PepperData")
		.getCell(0, 2)
		.getValue()
		.should.be.equal(true);

	findWidget("PepperData")
		.getCell(0, 2)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("PepperData")
		.getCell(0, 2)
		.getValue()
		.should.be.equal(false);

	// BACKSPACE Checkbox value
	findWidget("PepperData")
		.getCell(2, 2)
		.getValue()
		.should.be.equal(true);

	findWidget("PepperData")
		.getCell(2, 2)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.backspace]);

	findWidget("PepperData")
		.getCell(2, 2)
		.getValue()
		.should.be.equal(false);

	// DELETE a zero Checkbox value
	findWidget("PepperData")
		.getCell(2, 2)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_down]);

	// After the delete/down arrow combination, the cell below should have focus.
	findWidget("PepperData")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([3, 2]);
});
