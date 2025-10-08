/*!
 * @AIMMS_FILE=models/UnitParameters/UnitParameters.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Test for the usage of unit parameters in WebUI table and scalar widgets", () => {
	loadPage("Main Project/home");

	findWidget("Scalar_0")
		.getValue()
		.should.be.equal("17.64 lb");

	findWidget("Scalar_1")
		.getValue()
		.should.be.equal("5.00 kg");

	findWidget("Table_1")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("8.16 $/lb");

	findWidget("Table_1_2")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("8.16 $/lb");

	findWidget("Table_2")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("51.26 $^2/lb");

	findWidget("Table_2_2")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("51.26 $^2/lb");

	findWidget("Selection_1").select("MyConvention2");

	findWidget("Scalar_0")
		.getValue()
		.should.be.equal("8.00 kg");

	findWidget("Scalar_1")
		.getValue()
		.should.be.equal("11.02 lb");

	findWidget("Table_1")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("18.00 $/kg");

	findWidget("Table_1_2")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("18.00 $/kg");

	findWidget("Table_2")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("113.00 $^2/kg");

	findWidget("Table_2_2")
		.getCell(0, 3)
		.getValue()
		.should.be.equal("113.00 $^2/kg");
});
