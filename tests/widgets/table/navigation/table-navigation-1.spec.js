/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Navigation through table cells using keyboard shortcuts", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.click()
		.getValue()
		.should.be.equal("66.26");

	findWidget("UC_NoUnits")
		.getCell(1, 4)
		.isFocused()
		.should.be.equal(true);

	findWidget("UC_NoUnits").pressKeys(SPECIAL_KEYS.arrow_up);

	findWidget("UC_NoUnits")
		.getCell(0, 4)
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

	findWidget("UC_NoUnits").pressKeys(SPECIAL_KEYS.arrow_down);

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

	findWidget("UC_NoUnits").pressKeys(SPECIAL_KEYS.arrow_left);

	findWidget("UC_NoUnits")
		.getCell(1, 3)
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

	findWidget("UC_NoUnits").pressKeys(SPECIAL_KEYS.arrow_right);

	findWidget("UC_NoUnits")
		.getCell(1, 5)
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

	findWidget("UC_NoUnits").pressKeys("Home");

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

	findWidget("UC_NoUnits").pressKeys("End");

	findWidget("UC_NoUnits")
		.getCell(1, 9)
		.isFocused()
		.should.be.equal(true);
});
