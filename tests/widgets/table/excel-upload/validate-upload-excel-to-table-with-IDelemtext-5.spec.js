/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with Identifier element text", () => {
	loadPage("Main Project/Tables/Tables_3?excel-upload-download-support=true");

	findWidget("UCofTransport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("32.82");

	findWidget("AssignIDelemtext1").click();

	findWidget("UCofTransport")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UCofTransport_mod5.xlsx");

	findWidget("UCofTransport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("10.02");

	findWidget("UCofTransport")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("20.03");

	findWidget("UCofTransport")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("30.04");
});
