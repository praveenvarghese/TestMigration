/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with element text", () => {
	loadPage("Main Project/Tables/Tables_0?table-v2=true");

	findWidget("UseElemText_scalar_0").setValue(true);

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("59.04");

	findWidget("UC_NoUnits")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_NoUnits_ET_mod1.xlsx");

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("100.00");
});
