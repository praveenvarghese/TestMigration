/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with ID elemtext when row is added", () => {
	loadPage("Main Project/Tables/Tables_3");

	findWidget("UCofTransport")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("UCofTransport")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("25.56");

	findWidget("Empty_Row_UCoT").click();

	findWidget("UCofTransport")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	findWidget("UCofTransport")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UCofTransport_mod3.xlsx");

	findWidget("UCofTransport")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("UCofTransport")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("83.81");
});
