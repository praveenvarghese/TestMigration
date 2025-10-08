/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Teacos model Output > Graphs page test scenario 1", () => {
	loadPage("Main Project/Home/Output (Scenarios)/Graphs");

	findWidget("areagraphproductnames")
		.getCell(0, 3)
		.setValue(true);

	findWidget("select product").select(["Plant6"]);

	findWidget("select products_2").select(["Product3"]);

	findWidget("inout")
		.getCell(0, 1)
		.setValue(true);

	findWidget("specify products")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1.00");

	findWidget("add Graph product").click();

	findWidget("areagraphproductnames")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("node");

	findWidget("select product").select(["Plant7"]);

	findWidget("select products_2").select(["Product3"]);

	findWidget("inout")
		.getCell(0, 1)
		.setValue(true);

	findWidget("specify products")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1.00");
});
