/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when clear cells with defaults", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("59.04");

	findWidget("UC_NoUnits")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("76.67");

	findWidget("UC_NoUnits")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("49.34");

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_mod2.xlsx");

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("0.00");

	findWidget("UC_NoUnits")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("0.00");

	findWidget("UC_NoUnits")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("0.00");
});
