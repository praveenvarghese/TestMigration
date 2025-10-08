/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Network_Design_2020-12-21/Network_Design_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("NetworkDesignNavigator_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");
	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");
	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");

	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");
	loadPage("Main Project/Analytics");
	findWidget("model_1");
	getCurrentPage().should.be.equal("Main Project/Analytics");

	loadPage("Main Project/Analytics/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Flows");
	loadPage("Main Project/Analytics/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Flows");
	loadPage("Main Project/Analytics/Flows");
	findWidget("flows_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Flows");

	loadPage("Main Project/Analytics/Customers");
	findWidget("customers_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers");
	loadPage("Main Project/Analytics/Customers");
	findWidget("customers_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers");
	loadPage("Main Project/Analytics/Customers");
	findWidget("customers_1");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers");

	loadPage("Main Project/Analytics/Customers/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers/Adjust Demand");
	loadPage("Main Project/Analytics/Customers/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers/Adjust Demand");
	loadPage("Main Project/Analytics/Customers/Adjust Demand");
	findWidget("adjust_demand");
	getCurrentPage().should.be.equal("Main Project/Analytics/Customers/Adjust Demand");
});
