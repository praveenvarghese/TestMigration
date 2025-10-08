/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload .xls Excel file for to table", () => {
	loadPage("Main Project/Tables/Tables_1");

	findWidget("UnitCosts_table_1")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("5.20 kEuro/ton");

	findWidget("UnitCosts_table_1")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UnitCosts_table_1_mod.xls");

	findWidget("UnitCosts_table_1")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("30.00 kEuro/ton");
});
