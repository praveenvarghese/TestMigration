/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Customer_Allocation_Model_With_Grid_Layout_2019-03-11/Customer_Allocation_Model_With_Grid_Layout_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("Customer_Allocation_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");
	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");
	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	loadPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");
	loadPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");
	loadPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");

	loadPage("Main Project/Portfolio Overview/Scenario Comparison/Scenario Management");
	findWidget("new_page");
	getCurrentPage().should.be.equal(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);
	loadPage("Main Project/Portfolio Overview/Scenario Comparison/Scenario Management");
	findWidget("new_page");
	getCurrentPage().should.be.equal(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);
	loadPage("Main Project/Portfolio Overview/Scenario Comparison/Scenario Management");
	findWidget("new_page");
	getCurrentPage().should.be.equal(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);

	loadPage("Main Project/Executive dashboard");
	findWidget("executive_dashboard_1");
	getCurrentPage().should.be.equal("Main Project/Executive dashboard");
	loadPage("Main Project/Executive dashboard");
	findWidget("executive_dashboard_1");
	getCurrentPage().should.be.equal("Main Project/Executive dashboard");
	loadPage("Main Project/Executive dashboard");
	findWidget("executive_dashboard_1");
	getCurrentPage().should.be.equal("Main Project/Executive dashboard");

	loadPage("Main Project/Portfolio Comparison");
	findWidget("portfolio_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Comparison");
	loadPage("Main Project/Portfolio Comparison");
	findWidget("portfolio_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Comparison");
	loadPage("Main Project/Portfolio Comparison");
	findWidget("portfolio_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Comparison");
});
