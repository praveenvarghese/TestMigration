/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when column is deleted", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("UC_NoUnits")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("71.48");

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_mod0.xlsx");

	findWidget("UC_NoUnits")
		.getNumColsInGridViewport()
		.should.be.equal(9);
});
