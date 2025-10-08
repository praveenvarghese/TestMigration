/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Network_Design_2020-12-21/Network_Design_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("NetworkDesignNavigator_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Analytics/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/DCs      ");
	loadPage("Main Project/Analytics/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/DCs      ");
	loadPage("Main Project/Analytics/DCs      ?ding=dong");
	findWidget("resource_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/DCs      ");

	loadPage("Main Project/Analytics/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Production");
	loadPage("Main Project/Analytics/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Production");
	loadPage("Main Project/Analytics/Production");
	findWidget("production_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Production");

	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");
	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");
	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");

	loadPage("Main Project/Analytics/Costs/Detailed cost breakdown");
	findWidget("laid_down_cost");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs/Detailed cost breakdown");
	loadPage("Main Project/Analytics/Costs/Detailed cost breakdown");
	findWidget("laid_down_cost");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs/Detailed cost breakdown");
	loadPage("Main Project/Analytics/Costs/Detailed cost breakdown");
	findWidget("laid_down_cost");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs/Detailed cost breakdown");

	loadPage("Main Project/Analytics/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Suppliers");
	loadPage("Main Project/Analytics/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Suppliers");
	loadPage("Main Project/Analytics/Suppliers");
	findWidget("supplier_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Suppliers");

	loadPage("Main Project/Analytics/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Analytics/Zone of Flexibility");
	loadPage("Main Project/Analytics/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Analytics/Zone of Flexibility");
	loadPage("Main Project/Analytics/Zone of Flexibility");
	findWidget("zone_of_flexibility");
	getCurrentPage().should.be.equal("Main Project/Analytics/Zone of Flexibility");
});
