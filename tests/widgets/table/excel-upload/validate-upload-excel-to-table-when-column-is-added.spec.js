/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when column is added", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("UC_NoUnits")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("71.48");

	findWidget("Empty_Column_UC_NoUnits").click();

	findWidget("UC_NoUnits")
		.getNumColsInGridViewport()
		.should.be.equal(9);

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_ini.xlsx");

	findWidget("UC_NoUnits")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("UC_NoUnits")
		.getCell(2, 9)
		.getValue()
		.should.be.equal("71.48");
});
