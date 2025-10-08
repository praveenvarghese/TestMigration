/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/MRO_Procurement_With_Grid_Layout_2018-09-04/MRO_Procurement_With_Grid_Layout_2018-09-04.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// Model/Application: ATKearney MRO_Procurement_With_Grid_Layout_2018-09-04

scenario("MRO_Procurement Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Baseline Info");
	findWidget("baseline_information");
	getCurrentPage().should.be.equal("Main Project/Baseline Info");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Baseline Info");
	findWidget("baseline_information");
	getCurrentPage().should.be.equal("Main Project/Baseline Info");

	loadPage("Main Project/Baseline Info/Market Basket Info");
	findWidget("market_basket_information");
	getCurrentPage().should.be.equal("Main Project/Baseline Info/Market Basket Info");

	loadPage("Main Project/Baseline Info/Supplier Info");
	findWidget("supplier_info");
	getCurrentPage().should.be.equal("Main Project/Baseline Info/Supplier Info");

	getPageMenu().navigateToPage("Main Project/Baseline Info/Market Basket Info");
	findWidget("market_basket_information");
	getCurrentPage().should.be.equal("Main Project/Baseline Info/Market Basket Info");

	getPageMenu().navigateToPage("Main Project/Baseline Info/Supplier Info");
	findWidget("supplier_info");
	getCurrentPage().should.be.equal("Main Project/Baseline Info/Supplier Info");

	loadPage("Main Project/Bid Information");
	findWidget("bid_information");
	getCurrentPage().should.be.equal("Main Project/Bid Information");

	getPageMenu().navigateToPage("Main Project/Baseline Info");
	findWidget("baseline_information");
	getCurrentPage().should.be.equal("Main Project/Baseline Info");

	getPageMenu().navigateToPage("Main Project/Bid Information");
	findWidget("bid_information");
	getCurrentPage().should.be.equal("Main Project/Bid Information");
});
