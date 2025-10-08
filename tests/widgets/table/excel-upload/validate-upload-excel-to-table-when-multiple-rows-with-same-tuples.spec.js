/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario(
	"Validate upload Excel file to table when there are multiple rows with same tuples",
	() => {
		loadPage("Main Project/Tables/Tables_0");

		findWidget("UC_NoUnits")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("59.04");

		findWidget("UC_NoUnits")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("UC_NoUnits_mod3.xlsx");

		findWidget("UC_NoUnits")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UC_NoUnits")
			.mouseHover()
			.getExcelUploadButton()
			.uploadExcelFile("UC_NoUnits_mod3.xlsx");

		findWidget("UC_NoUnits")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UC_NoUnits")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("2.00");

		findWidget("UC_NoUnits")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("41.83");
	}
);
