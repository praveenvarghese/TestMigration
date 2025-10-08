/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Teacos model Output page test scenario 1", () => {
	loadPage("Main Project/Home/Output (Scenarios)");

	findWidget("KPis")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("-2,986.04 MEUR");

	findWidget("KPis")
		.getCell(0, 1)
		.click();

	findWidget("Projects done")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("1");

	findWidget("Projects done")
		.getCell(0, 1)
		.click();

	findWidget("Selected Scenario_1")
		.getValue()
		.should.be.equal("NoProduct5");

	findWidget("Rev,CAPEX,OPEX")
		.getCell(3, 11)
		.getValue()
		.should.be.equal("-613.20");

	findWidget("ARCFlow_1")
		.getCell(3, 1)
		.getValue()
		.should.be.equal("105.747");

	findWidget("ArcFlow_2")
		.getCell(2, 4)
		.getValue()
		.should.be.equal("108");

	findWidget("Processing in Modes")
		.getCell(1, 2)
		.getValue()
		.should.be.equal("108.37");

	findWidget("NodeFlow")
		.getCell(2, 11)
		.getValue()
		.should.be.equal("167.66");
});
