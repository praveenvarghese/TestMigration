/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with ID elemtext when column is added", () => {
	loadPage("Main Project/Tables/Tables_3");

	findWidget("UCfromto")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("UCfromto")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("54.53");

	findWidget("Empty_Col_UCfromto").click();

	findWidget("UCfromto")
		.getNumColsInGridViewport()
		.should.be.equal(9);

	findWidget("UCfromto")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UCfromto_mod1.xlsx");

	findWidget("UCfromto")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("UCfromto")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("87.31");
});
