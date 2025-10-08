/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Compose_2021-04-08/compose.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Compose model 1 on 1 matching page test scenario 1", () => {
	loadPage("Main Project/Matching/1 on 1 matching");

	findWidget("SelClient 1").setValue("Rutger de Mare");

	findWidget("Selclient2").setValue("Gregor Brandt");

	findWidget("Optimize").click();

	findWidget("Draw All Lanes_1").click();

	findWidget("selmatchmethod").setValue("Customer Value");

	findWidget("Lane information_2")
		.getCell(1, 4)
		.getValue()
		.should.be.equal("352.09");

	findWidget("Lane information_2")
		.getCell(1, 4)
		.click();

	findWidget("additional match info")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("0.36");

	findWidget("additional match info")
		.getCell(1, 0)
		.click();

	findWidget("Lane info")
		.getCell(0, 9)
		.getValue()
		.should.be.equal("9.46");
	/*
	findWidget("Kilometer saving")
		.getValue()
		.should.be.equal("2,772.55"); */
});
