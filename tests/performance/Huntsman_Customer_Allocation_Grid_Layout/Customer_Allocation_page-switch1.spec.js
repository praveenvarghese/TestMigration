/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Customer_Allocation_Model_With_Grid_Layout_2019-03-11/Customer_Allocation_Model_With_Grid_Layout_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Customer_Allocation_Model Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	loadPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	getPageMenu().navigateToPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");

	getPageMenu().navigateToPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	getPageMenu().navigateToPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");

	getPageMenu().navigateToPage(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);
	findWidget("new_page");
	getCurrentPage().should.be.equal(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);

	getPageMenu().navigateToPage("Main Project/Portfolio Overview/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview/Scenario Comparison");

	getPageMenu().navigateToPage(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);
	findWidget("new_page");
	getCurrentPage().should.be.equal(
		"Main Project/Portfolio Overview/Scenario Comparison/Scenario Management"
	);

	getPageMenu().navigateToPage("Main Project/Portfolio Comparison");
	findWidget("portfolio_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Comparison");

	getPageMenu().navigateToPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");

	getPageMenu().navigateToPage("Main Project/Portfolio Comparison");
	findWidget("portfolio_comparison");
	getCurrentPage().should.be.equal("Main Project/Portfolio Comparison");

	getPageMenu().navigateToPage("Main Project/Executive dashboard");
	findWidget("executive_dashboard_1");
	getCurrentPage().should.be.equal("Main Project/Executive dashboard");

	getPageMenu().navigateToPage("Main Project/Portfolio Overview");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Portfolio Overview");
});
