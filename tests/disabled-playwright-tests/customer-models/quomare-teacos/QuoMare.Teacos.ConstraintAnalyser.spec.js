/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Teacos model Constraint Analyser page test scenario 1", () => {
	loadPage("Main Project/Home/Output (Scenarios)");

	findWidget("KPis")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("-5,509.28 MEUR");

	findWidget("KPis")
		.getCell(0, 0)
		.click();

	findWidget("Projects done")
		.getCell(7, 0)
		.getValue()
		.should.be.equal("1");

	findWidget("Projects done")
		.getCell(7, 0)
		.click();

	findWidget("Selected Scenario_1")
		.getValue()
		.should.be.equal("Base Case");

	findWidget("Processing in Modes")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("105.75");

	findWidget("NodeFlow")
		.getCell(2, 13)
		.getValue()
		.should.be.equal("51.77");

	loadPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");

	findWidget("Supply Demand Overview")
		.getCell(3, 5)
		.getValue()
		.should.be.equal("163");

	loadPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");

	findWidget("Type")
		.getCell(4, 2)
		.getValue()
		.should.be.equal("c_MinNodeFlow");

	findWidget("Type")
		.getCell(4, 4)
		.getValue()
		.should.be.equal("Demand5");

	findWidget("Type")
		.getCell(4, 6)
		.getValue()
		.should.be.equal("0.00");
});
