/*!
 * @AIMMS_FILE=models/Bugs/GL00890-TableV2ReadOnly/TransNet.aimms
 */

scenario("Validate Read Only option in Defaults", () => {
	loadPage("Main Project/Tables/Tables_0");

	findWidget("UC_NoUnits")
		.getCell(0, 0)
		.hasFlags(["editable"])
		.should.be.equal(true);

	loadPage("Main Project/Tables/Tables_1");

	findWidget("UnitCosts_table_1")
		.getCell(0, 0)
		.hasFlags(["editable"])
		.should.be.equal(true);

	findWidget("Transport_chart_1")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	loadPage("Main Project/Tables/Tables_2");

	findWidget("Demand_table_2")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(true);

	loadPage("Main Project/Tables/Tables_3");

	findWidget("UCofTransport")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(true);
});
