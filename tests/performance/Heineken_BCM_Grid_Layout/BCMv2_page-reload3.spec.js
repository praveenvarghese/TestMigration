/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("BCM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Processes/0.0/Operational Time");
	findWidget("operational_time_10");
	getCurrentPage().should.be.equal("Main Project/Processes/0.0/Operational Time");
	loadPage("Main Project/Processes/0.0/Operational Time");
	findWidget("operational_time_10");
	getCurrentPage().should.be.equal("Main Project/Processes/0.0/Operational Time");
	loadPage("Main Project/Processes/0.0/Operational Time");
	findWidget("operational_time_10");
	getCurrentPage().should.be.equal("Main Project/Processes/0.0/Operational Time");

	loadPage("Main Project/Processes/Filter/Capability");
	findWidget("capability_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Filter/Capability");
	loadPage("Main Project/Processes/Filter/Capability");
	findWidget("capability_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Filter/Capability");
	loadPage("Main Project/Processes/Filter/Capability");
	findWidget("capability_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Filter/Capability");

	loadPage("Main Project/Processes/Mixing/Strength");
	findWidget("mixing_cider_gravity_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Mixing/Strength");
	loadPage("Main Project/Processes/Mixing/Strength");
	findWidget("mixing_cider_gravity_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Mixing/Strength");
	loadPage("Main Project/Processes/Mixing/Strength");
	findWidget("mixing_cider_gravity_1");
	getCurrentPage().should.be.equal("Main Project/Processes/Mixing/Strength");

	loadPage("Main Project/Processes/Packaging/Packaging Speed");
	findWidget("packaging_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Packaging/Packaging Speed");
	loadPage("Main Project/Processes/Packaging/Packaging Speed");
	findWidget("packaging_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Packaging/Packaging Speed");
	loadPage("Main Project/Processes/Packaging/Packaging Speed");
	findWidget("packaging_speed");
	getCurrentPage().should.be.equal("Main Project/Processes/Packaging/Packaging Speed");

	loadPage("Main Project/Processes/DAW/Asset");
	findWidget("daw_assets_1");
	getCurrentPage().should.be.equal("Main Project/Processes/DAW/Asset");
	loadPage("Main Project/Processes/DAW/Asset");
	findWidget("daw_assets_1");
	getCurrentPage().should.be.equal("Main Project/Processes/DAW/Asset");
	loadPage("Main Project/Processes/DAW/Asset");
	findWidget("daw_assets_1");
	getCurrentPage().should.be.equal("Main Project/Processes/DAW/Asset");
});
