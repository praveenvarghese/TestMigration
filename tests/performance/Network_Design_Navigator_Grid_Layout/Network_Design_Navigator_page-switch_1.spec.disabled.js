/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Network_Design_2021-06-18/Network_Design_2021-06-18.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("NetworkDesignNavigator_Model Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");

	findWidget("model_1")
		.getWorkflowItems()
		.getStepElement("Adjust Demand / Lead Time")
		.click();
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Adjust Demand");

	findWidget("adjust_demand")
		.getWorkflowItems()
		.getStepElement("Adjust Transport Data")
		.click();
	findWidget("transportation_data");
	getCurrentPage().should.be.equal("Main Project/Analytics/Transportation Data");

	findWidget("transportation_data")
		.getWorkflowItems()
		.getStepElement("Results Overview")
		.click();
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Flows");

	findWidget("flows_1")
		.getWorkflowItems()
		.getStepElement("Result Details")
		.click();
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers");

	findWidget("supplier_analysis")
		.getWorkflowItems()
		.getStepElement("Production Report")
		.click();
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Production");

	findWidget("production_1")
		.getWorkflowItems()
		.getStepElement("DC Report")
		.click();
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/DCs      ");

	findWidget("resource_analysis")
		.getWorkflowItems()
		.getStepElement("Cost Report")
		.click();
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Costs");

	findWidget("cost_analysis")
		.getWorkflowItems()
		.getStepElement("Zone of Flexibility Report")
		.click();
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Zone of Flexibility");

	findWidget("zone_of_flexibility")
		.getWorkflowItems()
		.getStepElement("Control Panel")
		.click();
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");
});
