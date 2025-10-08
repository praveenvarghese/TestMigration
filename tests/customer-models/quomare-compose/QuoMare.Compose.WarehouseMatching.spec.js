/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model Warehouse matching page test scenario 1", () => {
	loadPage("Main Project/Matching/Warehouse matching");

	findWidget("Select User").setValue("Mark van der Goot");

	findWidget("Warehouses_2")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("Gouda, Nederland");

	findWidget("Warehouses_2")
		.getCell(3, 0)
		.click();

	findWidget("matches")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("0.99");

	findWidget("matches")
		.getCell(0, 1)
		.click();

	findWidget("Matched Warehouse")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Aanbod");

	findWidget("Matched Warehouse")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("2020-01-01");

	findWidget("Matched Warehouse")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("binnen 200 km");
});
