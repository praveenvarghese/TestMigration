/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table with element parameter in range Integers", () => {
	loadPage("Main Project/Tables/Tables_2");

	findWidget("Demand_table_2")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("Demand_table_2")
		.getCell(1, 9)
		.getValue()
		.should.be.equal("10");

	findWidget("Empty_Column_Demand").click();

	findWidget("Demand_table_2")
		.getNumColsInGridViewport()
		.should.be.equal(9);

	findWidget("Demand_table_2")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("Demand_table_2.xlsx");

	findWidget("Demand_table_2")
		.getNumColsInGridViewport()
		.should.be.equal(10);

	findWidget("Demand_table_2")
		.getCell(1, 9)
		.getValue()
		.should.be.equal("10");
});
