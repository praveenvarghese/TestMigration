/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_2020-06-30/Heineken_BCM_v2_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("BCM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Sales/Domestic Sales Forecast");
	findWidget("forecast_2");
	getCurrentPage().should.be.equal("Main Project/Sales/Domestic Sales Forecast");
	loadPage("Main Project/Sales/Domestic Sales Forecast");
	findWidget("forecast_2");
	getCurrentPage().should.be.equal("Main Project/Sales/Domestic Sales Forecast");
	loadPage("Main Project/Sales/Domestic Sales Forecast");
	findWidget("forecast_2");
	getCurrentPage().should.be.equal("Main Project/Sales/Domestic Sales Forecast");

	loadPage("Main Project/Sales/Sales Area Split");
	findWidget("sales_area");
	getCurrentPage().should.be.equal("Main Project/Sales/Sales Area Split");
	loadPage("Main Project/Sales/Sales Area Split");
	findWidget("sales_area");
	getCurrentPage().should.be.equal("Main Project/Sales/Sales Area Split");
	loadPage("Main Project/Sales/Sales Area Split");
	findWidget("sales_area");
	getCurrentPage().should.be.equal("Main Project/Sales/Sales Area Split");

	loadPage("Main Project/Sales/Import & Export Finished Goods");
	findWidget("import_finished_goods");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Finished Goods");
	loadPage("Main Project/Sales/Import & Export Finished Goods");
	findWidget("import_finished_goods");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Finished Goods");
	loadPage("Main Project/Sales/Import & Export Finished Goods");
	findWidget("import_finished_goods");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Finished Goods");

	loadPage("Main Project/Sales/Import & Export Bulk");
	findWidget("bulk_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Bulk");
	loadPage("Main Project/Sales/Import & Export Bulk");
	findWidget("bulk_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Bulk");
	loadPage("Main Project/Sales/Import & Export Bulk");
	findWidget("bulk_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Import & Export Bulk");

	loadPage("Main Project/Sales/Seasonality");
	findWidget("seasonality_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Seasonality");
	loadPage("Main Project/Sales/Seasonality");
	findWidget("seasonality_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Seasonality");
	loadPage("Main Project/Sales/Seasonality");
	findWidget("seasonality_1");
	getCurrentPage().should.be.equal("Main Project/Sales/Seasonality");
});
