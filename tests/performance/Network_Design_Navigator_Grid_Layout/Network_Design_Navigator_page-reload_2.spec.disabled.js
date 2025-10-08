/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Network_Design_2021-06-18/Network_Design_2021-06-18.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("NetworkDesignNavigator_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers");

	loadPage("Main Project/Suppliers/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Production");
	loadPage("Main Project/Suppliers/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Production");
	loadPage("Main Project/Suppliers/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Production");

	loadPage("Main Project/Suppliers/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/DCs      ");
	loadPage("Main Project/Suppliers/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/DCs      ");
	loadPage("Main Project/Suppliers/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/DCs      ");

	loadPage("Main Project/Suppliers/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Costs");
	loadPage("Main Project/Suppliers/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Costs");
	loadPage("Main Project/Suppliers/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Costs");

	loadPage("Main Project/Suppliers/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Zone of Flexibility");
	loadPage("Main Project/Suppliers/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Zone of Flexibility");
	loadPage("Main Project/Suppliers/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Suppliers/Zone of Flexibility");
});
