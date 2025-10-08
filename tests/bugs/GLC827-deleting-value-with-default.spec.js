/*!
 * @AIMMS_FILE=models/DeleteValueWithNonZeroDefault/DeleteValueWithNonZeroDefault.aimms
 */

scenario("Test Scenario in Table Widget when deleting a value that has a default in AIMMS", () => {
	loadPage("Main Project/home");

	// Delete number from string-cell-editor
	findWidget("TableMultiple")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("3.00");

	findWidget("TableMultiple")
		.getCell(0, 0)
		.click();

	findWidget("TableMultiple").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("TableMultiple")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("-1.00");

	// Delete string from string-cell-editor
	findWidget("TableMultiple")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("some_i1");

	findWidget("TableMultiple")
		.getCell(0, 2)
		.click();

	findWidget("TableMultiple").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("TableMultiple")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("none");

	// Delete string from dropdown-cell-editor
	findWidget("TableMultiple")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("elem_1");

	findWidget("TableMultiple")
		.getCell(0, 3)
		.click();

	findWidget("TableMultiple").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("TableMultiple")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("elem_none");

	// Delete number from dropdown-cell-editor
	findWidget("TableMultiple")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("2");

	findWidget("TableMultiple")
		.getCell(0, 4)
		.click();

	findWidget("TableMultiple").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("TableMultiple")
		.getCell(0, 4)
		.getValue()
		.should.be.equal("-1");

	// Delete from boolean-cell-editor
	findWidget("TableMultiple")
		.getCell(0, 1)
		.getValue()
		.should.be.equal(false);

	findWidget("TableMultiple")
		.getCell(0, 1)
		.click();

	findWidget("TableMultiple").pressKeys([SPECIAL_KEYS.delete]);

	findWidget("TableMultiple")
		.getCell(0, 1)
		.getValue()
		.should.be.equal(true);
});
