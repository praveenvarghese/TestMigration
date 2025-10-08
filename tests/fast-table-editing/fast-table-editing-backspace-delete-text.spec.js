/*!
 * @AIMMS_FILE=models/DeleteBackspaceTest/DeleteBackspaceTest.aimms
 */

scenario("Fast table editing using the DELETE and BACKSPACE keys for TEXT/STRING cells", () => {
	loadPage("Main Project/home");

	// DELETE String value
	findWidget("PepperData")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Lemon pepper");

	findWidget("PepperData")
		.getCell(1, 0)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("PepperData")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("");

	// BACKSPACE String value
	findWidget("PepperData")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("Padron pepper");

	findWidget("PepperData")
		.getCell(3, 0)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.backspace]);
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.enter]);

	findWidget("PepperData")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("");

	// DELETE String Value followed by ESC should keep the original value before the delete
	findWidget("PepperData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Cayenne pepper");

	findWidget("PepperData")
		.getCell(0, 0)
		.click();

	findWidget("PepperData").pressKeys([SPECIAL_KEYS.backspace]);
	findWidget("PepperData").pressKeys([SPECIAL_KEYS.escape]);

	findWidget("PepperData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Cayenne pepper");
});
