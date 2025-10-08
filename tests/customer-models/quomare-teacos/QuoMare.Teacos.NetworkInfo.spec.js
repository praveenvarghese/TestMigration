/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Teacos model Model Info page test scenario 1", () => {
	loadPage("Main Project/Home/Output (Scenarios)");

	findWidget("KPis")
		.getCell(1, 1)
		.getValue()
		.should.be.equal("0.2699 %");

	findWidget("KPis")
		.getCell(1, 1)
		.click();

	findWidget("Projects done")
		.getCell(3, 1)
		.getValue()
		.should.be.equal("1");

	findWidget("Projects done")
		.getCell(3, 1)
		.click();

	findWidget("Selected Scenario_1")
		.getValue()
		.should.be.equal("NoProduct5");

	loadPage("Main Project/Home/Model Info");

	findWidget("Possible Arcs in Model")
		.getCell(5, 11)
		.getValue()
		.should.be.equal("1");

	findWidget("Possible Arcs in Model")
		.getCell(5, 11)
		.click();

	loadPage("Main Project/Home/Network Info Arcs");

	findWidget("Defined Arcs in Network")
		.getCell(2, 3)
		.getValue()
		.should.be.equal(true);

	findWidget("Defined Arcs in Network")
		.getCell(9, 1)
		.getValue()
		.should.be.equal("Connection3");

	loadPage("Main Project/Home/Network Info Nodes");

	findWidget("Network Info Nodes")
		.getCell(3, 2)
		.getValue()
		.should.be.equal("0.50");

	findWidget("Network Info Nodes")
		.getCell(5, 3)
		.getValue()
		.should.be.equal("demand");
});
