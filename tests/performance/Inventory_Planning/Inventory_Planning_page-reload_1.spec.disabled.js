/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Inventory_Planning_2020-12-21/Inventory_Planning_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Inventory Planning Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Start");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Start");
	loadPage("Main Project/Start");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Start");
	loadPage("Main Project/Start");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Start");

	loadPage("Main Project/Phase 2/Create Scenario");
	findWidget("service_level_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Create Scenario");
	loadPage("Main Project/Phase 2/Create Scenario");
	findWidget("service_level_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Create Scenario");
	loadPage("Main Project/Phase 2/Create Scenario");
	findWidget("service_level_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Create Scenario");

	loadPage("Main Project/Phase 2/Resource Product Data");
	findWidget("3_resource_product_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Resource Product Data");
	loadPage("Main Project/Phase 2/Resource Product Data");
	findWidget("3_resource_product_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Resource Product Data");
	loadPage("Main Project/Phase 2/Resource Product Data");
	findWidget("3_resource_product_data");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Resource Product Data");
});
