/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_2020-06-30/Heineken_BCM_v2_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Sales");
	findWidget("sales_summary");
	getCurrentPage().should.be.equal("Main Project/Sales");

	getPageMenu().navigateToPage("Main Project/Sales/Sales Area Split");
	findWidget("sales_area");
	getCurrentPage().should.be.equal("Main Project/Sales/Sales Area Split");

	getPageMenu().navigateToPage("Main Project/Sales/Import & Export Finished Goods");
	findWidget("import_finished_goods");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Finished Goods");

	getPageMenu().navigateToPage("Main Project/Sales/Import & Export Bulk");
	findWidget("bulk_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Bulk");

	getPageMenu().navigateToPage("Main Project/Sales/Seasonality");
	findWidget("seasonality_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Seasonality");

	getPageMenu().navigateToPage("Main Project/Sales/Import & Export Bulk");
	findWidget("bulk_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Bulk");

	getPageMenu().navigateToPage("Main Project/Sales/Seasonality");
	findWidget("seasonality_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Seasonality");

	getPageMenu().navigateToPage("Main Project/Sales");
	findWidget("sales_summary");
	getCurrentPage().should.be.equal("Main Project/Sales");
});
