/*!
 * @AIMMS_FILE=models/DeleteBackspaceTest/DeleteBackspaceTest.aimms
 */

scenario("Fast table editing using the DELETE and BACKSPACE keys", () => {
	loadPage("Main Project/home?table-v2=true");

	// DELETE Numerical value
	findWidget("PepperData")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData")
		.getCell(0, 1)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("PepperData")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("0 Scoville");

	// reactivate after DELETE
	findWidget("PepperData").pressKeys(["1", "2", "3", SPECIAL_KEYS.enter]);

	findWidget("PepperData")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("123 Scoville");

	// BACKSPACE Numerical value
	findWidget("PepperData")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.backspace, SPECIAL_KEYS.enter], 1000);

	findWidget("PepperData")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("0 Scoville");

	// reactivate after BACKSPACE
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_up]); // Enter moved it down now
	findWidget("PepperData").pressKeys(["3", "2", "1", SPECIAL_KEYS.enter]);

	findWidget("PepperData")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("321 Scoville");

	// DELETE an empty numerical value
	findWidget("PepperData")
		.getCell(2, 1)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]); // It's empty after this

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_down]);

	// After the delete/down arrow combination, the cell below should have focus.
	findWidget("PepperData")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([3, 1]);
});
