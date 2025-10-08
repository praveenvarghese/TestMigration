/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Jumbo_SmartScheduling_With_Grid_Layout_2020-06-30/Jumbo_SmartScheduling_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("SmartScheduling_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Voyage estimation/Outliers");
	findWidget("outliers_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Outliers");
	loadPage("Main Project/Voyage estimation/Outliers");
	findWidget("outliers_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Outliers");
	loadPage("Main Project/Voyage estimation/Outliers");
	findWidget("outliers_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Outliers");

	loadPage("Main Project/Voyage estimation/Compare Voyages");
	findWidget("compare_voyages");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Compare Voyages");
	loadPage("Main Project/Voyage estimation/Compare Voyages");
	findWidget("compare_voyages");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Compare Voyages");
	loadPage("Main Project/Voyage estimation/Compare Voyages");
	findWidget("compare_voyages");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Compare Voyages");

	loadPage("Main Project/Voyage estimation/Track changes");
	findWidget("page_trackchanges_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Track changes");
	loadPage("Main Project/Voyage estimation/Track changes");
	findWidget("page_trackchanges_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Track changes");
	loadPage("Main Project/Voyage estimation/Track changes");
	findWidget("page_trackchanges_1");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Track changes");

	loadPage("Main Project/Voyage estimation/Cargo Overview Dialog");
	findWidget("cargo_overview_dialog");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Cargo Overview Dialog");
	loadPage("Main Project/Voyage estimation/Cargo Overview Dialog");
	findWidget("cargo_overview_dialog");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Cargo Overview Dialog");
	loadPage("Main Project/Voyage estimation/Cargo Overview Dialog");
	findWidget("cargo_overview_dialog");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation/Cargo Overview Dialog");

	loadPage("Main Project/Admin settings/Crane Reeving Options");
	findWidget("crane_reeving_options");
	getCurrentPage().should.be.equal("Main Project/Admin settings/Crane Reeving Options");
	loadPage("Main Project/Admin settings/Crane Reeving Options");
	findWidget("crane_reeving_options");
	getCurrentPage().should.be.equal("Main Project/Admin settings/Crane Reeving Options");
	loadPage("Main Project/Admin settings/Crane Reeving Options");
	findWidget("crane_reeving_options");
	getCurrentPage().should.be.equal("Main Project/Admin settings/Crane Reeving Options");
});
