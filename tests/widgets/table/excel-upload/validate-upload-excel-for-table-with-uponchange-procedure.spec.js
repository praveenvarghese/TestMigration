/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file for the table with uponchange procedure", () => {
	loadPage("Main Project/Tables/Tables_1");

	//findWidget("tables_1")
	//	.getPrimaryPageAction()
	//	.click();

	findWidget("Transport_chart_1")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("16.32 ton");

	findWidget("UnitCosts_table_1")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("UnitCosts_table_1_mod1.xlsx");

	findWidget("Transport_chart_1")
		.isEmpty()
		.should.be.equal(true);
});
