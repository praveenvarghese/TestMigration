/*!
 * @AIMMS_FILE=models/FastTableEditing/FastTableEditing.aimms
 */

scenario("Fast table editing with slicing by element parameter", () => {
	loadPage("Main Project/home");

	findWidget("TwoDimTable")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("107.00");

	findWidget("SelectEPj").select(["103"]);

	findWidget("TwoDimTable")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("109.00");
});
