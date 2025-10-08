/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model Employee Matching page test scenario 1", () => {
	loadPage("Main Project/Matching/Employee Matching");

	findWidget("select client")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("3");

	findWidget("select client")
		.getCell(0, 0)
		.click();

	findWidget("Employee offers")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("Gouda, Nederland");

	findWidget("Employee offers")
		.getCell(1, 1)
		.click();

	findWidget("detailed info")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("aanbod");

	findWidget("detailed info")
		.getCell(3, 0)
		.click();

	findWidget("matches_1")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Quo Mare (Mark van der Goot)");
});
