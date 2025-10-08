/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_2020-06-15/Vion_Planning.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Home/Correction start stock");
	findWidget("finished_stock_matching");
	getCurrentPage().should.be.equal("Main Project/Home/Correction start stock");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Home/Correction start stock");
	findWidget("finished_stock_matching");
	getCurrentPage().should.be.equal("Main Project/Home/Correction start stock");

	getPageMenu().navigateToPage("Main Project/Home/Correction salesorders");
	findWidget("correction_salesorders");
	getCurrentPage().should.be.equal("Main Project/Home/Correction salesorders");

	getPageMenu().navigateToPage("Main Project/Home/Matching model");
	findWidget("matching_model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");

	getPageMenu().navigateToPage("Main Project/Home/Correction salesorders");
	findWidget("correction_salesorders");
	getCurrentPage().should.be.equal("Main Project/Home/Correction salesorders");

	getPageMenu().navigateToPage("Main Project/Home/Matching model");
	findWidget("matching_model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");

	getPageMenu().navigateToPage("Main Project/Home/Line scheduling model");
	findWidget("line_scheduling_model");
	getCurrentPage().should.be.equal("Main Project/Home/Line scheduling model");

	getPageMenu().navigateToPage("Main Project/Home/Data");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home/Data");

	getPageMenu().navigateToPage("Main Project/Home/Line scheduling model");
	findWidget("line_scheduling_model");
	getCurrentPage().should.be.equal("Main Project/Home/Line scheduling model");

	getPageMenu().navigateToPage("Main Project/Home/Data");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home/Data");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");
});
