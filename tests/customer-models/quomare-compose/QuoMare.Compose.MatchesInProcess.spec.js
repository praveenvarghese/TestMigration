/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model Matching in Process page test scenario 1", () => {
	loadPage("Main Project/Data Management/Matches in Process");

	findWidget("Total Changes")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("2");

	findWidget("Total Changes")
		.getCell(2, 3)
		.click();

	findWidget("Matching reults")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Consultant");

	findWidget("Matching reults")
		.getCell(0, 1)
		.click();

	findWidget("detailed match info")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("20");

	findWidget("detailed match info")
		.getCell(0, 1)
		.click();

	findWidget("detailed info 2")
		.getCell(3, 0)
		.getValue()
		.should.be.equal("❤❤");

	findWidget("difference other user")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("★★");
});
