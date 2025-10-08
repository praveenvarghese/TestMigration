/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Validate upload Excel file to table when content identifiers have defaults", () => {
	loadPage("Main Project/Tables/Tables_2");

	findWidget("Demand_table_defaults")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("11.23 ton");

	findWidget("Demand_table_defaults")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("Center-4");

	findWidget("Demand_table_defaults")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("United_Kingdom");

	findWidget("Demand_table_defaults")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("4");

	findWidget("Demand_table_defaults")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("Demand_table_defaults_mod1.xlsx");

	findWidget("Demand_table_defaults")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("0.01 ton");

	findWidget("Demand_table_defaults")
		.getCell(1, 3)
		.getValue()
		.should.be.equal("Center-Unknown");

	findWidget("Demand_table_defaults")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("Country-Unknown");

	findWidget("Demand_table_defaults")
		.getCell(3, 3)
		.getValue()
		.should.be.equal("-1");
});
