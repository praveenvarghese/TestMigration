/*!
 * @AIMMS_FILE=models/ReadOnlyByCurrentInputs/ReadOnlyByCurrentInputs.aimms
 */

scenario("Verify that read-only switching by using CurrentInputs works as expected", () => {
	loadPage("Main Project/home");

	findWidget("tablePersonInfo")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 1)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 2)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 3)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("buttonMakeReadonly").click();

	findWidget("tablePersonInfo")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	findWidget("tablePersonInfo")
		.getCell(0, 1)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	findWidget("tablePersonInfo")
		.getCell(0, 2)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	findWidget("tablePersonInfo")
		.getCell(0, 3)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	findWidget("buttonMakeEditable").click();

	findWidget("tablePersonInfo")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 1)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 2)
		.hasFlags(["readOnly"])
		.should.be.equal(false);

	findWidget("tablePersonInfo")
		.getCell(0, 3)
		.hasFlags(["readOnly"])
		.should.be.equal(false);
});
