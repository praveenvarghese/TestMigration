/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Vion_Planning_With_Grid_Layout_2020-06-15/Vion_Planning_With_Grid_Layout_2020-06-15.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("Production_Scheduling Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Home/Data");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home/Data");
	loadPage("Main Project/Home/Data");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home/Data");
	loadPage("Main Project/Home/Data");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home/Data");

	loadPage("Main Project/Home/Correction start stock");
	findWidget("finished_stock_matching");
	getCurrentPage().should.be.equal("Main Project/Home/Correction start stock");
	loadPage("Main Project/Home/Correction start stock");
	findWidget("finished_stock_matching");
	getCurrentPage().should.be.equal("Main Project/Home/Correction start stock");
	loadPage("Main Project/Home/Correction start stock");
	findWidget("finished_stock_matching");
	getCurrentPage().should.be.equal("Main Project/Home/Correction start stock");

	loadPage("Main Project/Home/Correction salesorders");
	findWidget("correction_salesorders");
	getCurrentPage().should.be.equal("Main Project/Home/Correction salesorders");
	loadPage("Main Project/Home/Correction salesorders");
	findWidget("correction_salesorders");
	getCurrentPage().should.be.equal("Main Project/Home/Correction salesorders");
	loadPage("Main Project/Home/Correction salesorders");
	findWidget("correction_salesorders");
	getCurrentPage().should.be.equal("Main Project/Home/Correction salesorders");

	loadPage("Main Project/Home/Matching model");
	findWidget("matching_model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");
	loadPage("Main Project/Home/Matching model");
	findWidget("matching_model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");
	loadPage("Main Project/Home/Matching model");
	findWidget("matching_model");
	getCurrentPage().should.be.equal("Main Project/Home/Matching model");

	loadPage("Main Project/Home/Line scheduling model");
	findWidget("line_scheduling_model");
	getCurrentPage().should.be.equal("Main Project/Home/Line scheduling model");
	loadPage("Main Project/Home/Line scheduling model");
	findWidget("line_scheduling_model");
	getCurrentPage().should.be.equal("Main Project/Home/Line scheduling model");
	loadPage("Main Project/Home/Line scheduling model");
	findWidget("line_scheduling_model");
	getCurrentPage().should.be.equal("Main Project/Home/Line scheduling model");

	loadPage("Main Project/Plan Data/Demand");
	findWidget("demand_1");
	getCurrentPage().should.be.equal("Main Project/Plan Data/Demand");
	loadPage("Main Project/Plan Data/Demand");
	findWidget("demand_1");
	getCurrentPage().should.be.equal("Main Project/Plan Data/Demand");
	loadPage("Main Project/Plan Data/Demand");
	findWidget("demand_1");
	getCurrentPage().should.be.equal("Main Project/Plan Data/Demand");
});
