/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("BCM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Processes/Brewhouse/Capability");
	findWidget("capability_3");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Capability");
	loadPage("Main Project/Processes/Brewhouse/Capability");
	findWidget("capability_3");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Capability");
	loadPage("Main Project/Processes/Brewhouse/Capability");
	findWidget("capability_3");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Capability");

	loadPage("Main Project/Processes/Brewhouse/Operational Time");
	findWidget("operational_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Operational Time");
	loadPage("Main Project/Processes/Brewhouse/Operational Time");
	findWidget("operational_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Operational Time");
	loadPage("Main Project/Processes/Brewhouse/Operational Time");
	findWidget("operational_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Brewhouse/Operational Time");

	loadPage("Main Project/Processes/Cellar/Operational Time");
	findWidget("operational_time_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Operational Time");
	loadPage("Main Project/Processes/Cellar/Operational Time");
	findWidget("operational_time_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Operational Time");
	loadPage("Main Project/Processes/Cellar/Operational Time");
	findWidget("operational_time_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Operational Time");

	loadPage("Main Project/Processes/Cellar/Tank Volume");
	findWidget("fermentation_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Tank Volume");
	loadPage("Main Project/Processes/Cellar/Tank Volume");
	findWidget("fermentation_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Tank Volume");
	loadPage("Main Project/Processes/Cellar/Tank Volume");
	findWidget("fermentation_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Tank Volume");

	loadPage("Main Project/Processes/Cellar/Fermentation Speed");
	findWidget("occupation_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Fermentation Speed");
	loadPage("Main Project/Processes/Cellar/Fermentation Speed");
	findWidget("occupation_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Fermentation Speed");
	loadPage("Main Project/Processes/Cellar/Fermentation Speed");
	findWidget("occupation_time");
	getCurrentPage().should.be.equal("Main Project/Processes/Cellar/Fermentation Speed");
});
