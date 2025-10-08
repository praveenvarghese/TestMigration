/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when row is added", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("UC_NoUnits")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("74.40");

	findWidget("Empty_Row_UC_NoUnits").click();

	findWidget("UC_NoUnits")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_ini.xlsx");

	findWidget("UC_NoUnits")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("UC_NoUnits")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("74.40");
});
