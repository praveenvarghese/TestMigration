/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Inventory_Planning_2021-06-18/Inventory_Planning_2021-06-18.aimms
 * @STARTUP_PROCEDURE=Data_File_SetInitialInformation_PerformanceTest
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

	loadPage("Main Project/Phase 2/Scenario Results");
	findWidget("scenario_details");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Scenario Results");
	loadPage("Main Project/Phase 2/Scenario Results");
	findWidget("scenario_details");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Scenario Results");
	loadPage("Main Project/Phase 2/Scenario Results");
	findWidget("scenario_details");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Scenario Results");

	loadPage("Main Project/Phase 2/Re-balancing");
	findWidget("re-balancing_1");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Re-balancing");
	loadPage("Main Project/Phase 2/Re-balancing");
	findWidget("re-balancing_1");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Re-balancing");
	loadPage("Main Project/Phase 2/Re-balancing");
	findWidget("re-balancing_1");
	getCurrentPage().should.be.equal("Main Project/Phase 2/Re-balancing");

	loadPage("Main Project/Phase 3/Compare Results");
	findWidget("compare_results_1");
	getCurrentPage().should.be.equal("Main Project/Phase 3/Compare Results");
	loadPage("Main Project/Phase 3/Compare Results");
	findWidget("compare_results_1");
	getCurrentPage().should.be.equal("Main Project/Phase 3/Compare Results");
	loadPage("Main Project/Phase 3/Compare Results");
	findWidget("compare_results_1");
	getCurrentPage().should.be.equal("Main Project/Phase 3/Compare Results");
});
