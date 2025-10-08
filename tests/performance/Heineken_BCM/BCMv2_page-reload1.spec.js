/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_2020-06-30/Heineken_BCM_v2_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("BCM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("actuals");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Masterdata/Brands");
	findWidget("brands_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Brands");
	loadPage("Main Project/Masterdata/Brands");
	findWidget("brands_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Brands");
	loadPage("Main Project/Masterdata/Brands");
	findWidget("brands_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Brands");

	loadPage("Main Project/Masterdata/Sales Area");
	findWidget("sales_area_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Sales Area");
	loadPage("Main Project/Masterdata/Sales Area");
	findWidget("sales_area_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Sales Area");
	loadPage("Main Project/Masterdata/Sales Area");
	findWidget("sales_area_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Sales Area");

	loadPage("Main Project/Masterdata/Production Unit");
	findWidget("production_unit_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Production Unit");
	loadPage("Main Project/Masterdata/Production Unit");
	findWidget("production_unit_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Production Unit");
	loadPage("Main Project/Masterdata/Production Unit");
	findWidget("production_unit_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Production Unit");

	loadPage("Main Project/Masterdata/Pack Type & Size");
	findWidget("packs_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Pack Type & Size");
	loadPage("Main Project/Masterdata/Pack Type & Size");
	findWidget("packs_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Pack Type & Size");
	loadPage("Main Project/Masterdata/Pack Type & Size");
	findWidget("packs_1");
	getCurrentPage().should.be.equal("Main Project/Masterdata/Pack Type & Size");
});
