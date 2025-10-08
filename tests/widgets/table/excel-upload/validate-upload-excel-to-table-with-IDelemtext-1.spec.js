/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with Identifier element text", () => {
	loadPage("Main Project/Tables/Tables_3");

	findWidget("UCofTransport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("32.82");

	findWidget("UCofTransport")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UCofTransport_mod1.xlsx");

	findWidget("UCofTransport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("88.00");
});
