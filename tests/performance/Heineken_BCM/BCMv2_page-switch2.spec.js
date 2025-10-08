/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_2020-06-30/Heineken_BCM_v2_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Masterdata");
	findWidget("masterdata_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata");

	getPageMenu().navigateToPage("Main Project/Masterdata/Brands");
	findWidget("brands_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Brands");

	getPageMenu().navigateToPage("Main Project/Masterdata");
	findWidget("masterdata_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata");

	getPageMenu().navigateToPage("Main Project/Masterdata/Brands");
	findWidget("brands_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Brands");

	getPageMenu().navigateToPage("Main Project/Masterdata/Sales Area");
	findWidget("sales_area_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Sales Area");

	getPageMenu().navigateToPage("Main Project/Masterdata/Production Unit");
	findWidget("production_unit_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Production Unit");

	getPageMenu().navigateToPage("Main Project/Masterdata/Sales Area");
	findWidget("sales_area_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Sales Area");

	getPageMenu().navigateToPage("Main Project/Masterdata/Production Unit");
	findWidget("production_unit_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Production Unit");

	getPageMenu().navigateToPage("Main Project/Masterdata/Pack Type & Size");
	findWidget("packs_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Pack Type & Size");

	getPageMenu().navigateToPage("Main Project/Masterdata/Bulk Tanker (intra OpCo)");
	findWidget("page_intra_opco_bulk_tank_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Bulk Tanker (intra OpCo)");

	getPageMenu().navigateToPage("Main Project/Masterdata/Pack Type & Size");
	findWidget("packs_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Pack Type & Size");

	getPageMenu().navigateToPage("Main Project/Masterdata/Bulk Tanker (intra OpCo)");
	findWidget("page_intra_opco_bulk_tank_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Bulk Tanker (intra OpCo)");

	getPageMenu().navigateToPage("Main Project/Masterdata");
	findWidget("masterdata_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata");
});
