/*!
 * @AIMMS_FILE=models/FastTableEditing/FastTableEditing.aimms
 */

scenario("Fast table editing with dependent value", () => {
	loadPage("Main Project/home");

	findWidget("ValDepTable")
		.getCell(2, 1)
		.getValue()
		.should.be.equal("6.00");

	// This is a comment: write here something you want
	findWidget("ValDepTable")
		.getCell(2, 0)
		.setValue("17.00");

	findWidget("ValDepTable")
		.getCell(2, 1)
		.getValue()
		.should.be.equal("19.00");
});
