/*!
 * @AIMMS_FILE=models/FastTableEditing/FastTableEditing.aimms
 */
scenario("GL3498-Table edited cell value is not persisted issue", () => {
	loadPage("Main Project/home");

	findWidget("ValDepTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("2.00");

	findWidget("newTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("2.00");

	findWidget("ValDepTable")
		.getCell(0, 0)
		.setValueWithoutConfirm("5");

	findWidget("ValDepTable")
		.getCell(1, 1)
		.click();

	findWidget("ValDepTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("5.00");

	findWidget("newTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("5.00");
});
