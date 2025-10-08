/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when row is deleted", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("UC_NoUnits")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("74.40");

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_mod1.xlsx");

	findWidget("UC_NoUnits")
		.getNumRowsInGridViewport()
		.should.be.equal(2);
});
