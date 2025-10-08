/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Sales");
	findWidget("sales_summary");
	getCurrentPage().should.be.equal("Main Project/Sales");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Output >>>");
	findWidget("output_landing_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>");

	getPageMenu().navigateToPage("Main Project/Sales");
	findWidget("sales_summary");
	getCurrentPage().should.be.equal("Main Project/Sales");

	getPageMenu().navigateToPage("Main Project/Output >>>");
	findWidget("output_landing_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>");

	getPageMenu().navigateToPage("Main Project/Validation & Tools");
	findWidget("optimize");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools");

	getPageMenu().navigateToPage("Main Project/Masterdata");
	findWidget("masterdata_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata");

	getPageMenu().navigateToPage("Main Project/Validation & Tools");
	findWidget("optimize");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools");

	getPageMenu().navigateToPage("Main Project/Masterdata");
	findWidget("masterdata_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");
});
