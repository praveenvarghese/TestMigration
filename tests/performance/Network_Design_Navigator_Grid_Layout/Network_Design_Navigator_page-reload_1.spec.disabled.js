/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Network_Design_2021-06-18/Network_Design_2021-06-18.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("NetworkDesignNavigator_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");

	loadPage("Main Project/Analytics/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Adjust Demand");
	loadPage("Main Project/Analytics/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Adjust Demand");
	loadPage("Main Project/Analytics/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Adjust Demand");

	loadPage("Main Project/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Flows");
	loadPage("Main Project/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Flows");
	loadPage("Main Project/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Flows");

	loadPage("Main Project/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers");
	loadPage("Main Project/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers");
	loadPage("Main Project/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers");
});
