/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Navigation through table cells using keyboard shortcuts", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getCell(2, 4)
		.click()
		.getValue()
		.should.be.equal("74.95");

	findWidget("UC_NoUnits")
		.getCell(2, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.arrow_up]); // CTRL + SPECIAL_KEYS.arrow_up

	findWidget("UC_NoUnits")
		.getCell(0, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits")
		.getCell(0, 4)
		.click()
		.getValue()
		.should.be.equal("75.21");

	findWidget("UC_NoUnits")
		.getCell(0, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.arrow_down]); // CTRL + SPECIAL_KEYS.arrow_down

	findWidget("UC_NoUnits")
		.getCell(2, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.click()
		.getValue()
		.should.be.equal("66.26");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.arrow_left]); // CTRL + SPECIAL_KEYS.arrow_left

	findWidget("UC_NoUnits")
		.getCell(1, 0)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.click()
		.getValue()
		.should.be.equal("66.26");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.arrow_right]); // CTRL + SPECIAL_KEYS.arrow_right

	findWidget("UC_NoUnits")
		.getCell(1, 9)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.click()
		.getValue()
		.should.be.equal("66.26");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.home]); // CTRL + "Home"

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.click()
		.getValue()
		.should.be.equal("66.26");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressCtrl([SPECIAL_KEYS.end]); // CTRL + "End"

	findWidget("UC_NoUnits")
		.getCell(2, 9)
		.isFocused()
		.should.be.equal(true);
});
