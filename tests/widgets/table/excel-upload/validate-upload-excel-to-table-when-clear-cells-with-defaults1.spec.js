/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when clear cells with defaults", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_WithDefaults")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("12.51");

	findWidget("UC_WithDefaults")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("19.16");

	findWidget("UC_WithDefaults")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("20.00");

	findWidget("UC_WithDefaults")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UC_WithDefaults_mod1.xlsx");

	findWidget("UC_WithDefaults")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("0.10");

	findWidget("UC_WithDefaults")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("0.10");

	findWidget("UC_WithDefaults")
		.getCell(2, 2)
		.getValue()
		.should.be.equal("0.10");
});
