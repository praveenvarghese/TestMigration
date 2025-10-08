/*!
 * @AIMMS_FILE=models/DeleteBackspaceTest/DeleteBackspaceTest.aimms
 */

scenario("Fast table editing using the DELETE and BACKSPACE keys for DROPDOWN/ELPAR cells", () => {
	loadPage("Main Project/home");

	// Opening a dropdown and pressing Escape immediately should not delete the value.
	findWidget("PepperData")
		.getCell(1, 3)
		.click();

	findWidget("PepperData").openDropdown();
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.escape], 1000);

	// DELETE Element value
	findWidget("PepperData")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("yellow");

	findWidget("PepperData")
		.getCell(1, 3)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("PepperData")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("");

	// reactivate after delete
	findWidget("PepperData").openDropdown();
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_down, SPECIAL_KEYS.enter], 1000);

	findWidget("PepperData")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("red");

	// BACKSPACE Element value
	findWidget("PepperData")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("red");

	findWidget("PepperData")
		.getCell(0, 3)
		.click();

	// BACKSPACE followed by ESC should cancel.
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.escape], 1000);

	findWidget("PepperData")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("red");

	// BACKSPACE followed by ENTER should not open the dropdown.
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.backspace, SPECIAL_KEYS.enter], 1000);

	findWidget("PepperData")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("red");

	// DELETE followed by BACKSPACE followed by ENTER
	findWidget("PepperData")
		.getCell(2, 3)
		.click();

	findWidget("PepperData").pressKeys(
		[SPECIAL_KEYS.delete, SPECIAL_KEYS.backspace, SPECIAL_KEYS.enter],
		1000
	);

	findWidget("PepperData")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("");

	// DELETE an empty Element value
	findWidget("PepperData")
		.getCell(2, 3)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.arrow_down]);

	// After the delete/down arrow combination, the cell below should have focus.
	findWidget("PepperData")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([3, 3]);
});
