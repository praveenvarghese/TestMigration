/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("Exxon GetPlantDataTwo Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");
	loadPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");
	loadPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");

	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser");
	findWidget("view_hierarchy");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);
	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser");
	findWidget("view_hierarchy");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);
	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser");
	findWidget("view_hierarchy");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);

	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser");
	findWidget("attribute_browser");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);
	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser");
	findWidget("attribute_browser");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);
	loadPage("Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser");
	findWidget("attribute_browser");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);

	loadPage("Main Project/My Calculations/Tag Calcs");
	findWidget("tag_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Tag Calcs");
	loadPage("Main Project/My Calculations/Tag Calcs");
	findWidget("tag_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Tag Calcs");
	loadPage("Main Project/My Calculations/Tag Calcs");
	findWidget("tag_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Tag Calcs");

	loadPage("Main Project/My Calculations/Attribute Calcs");
	findWidget("attribute_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Attribute Calcs");
	loadPage("Main Project/My Calculations/Attribute Calcs");
	findWidget("attribute_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Attribute Calcs");
	loadPage("Main Project/My Calculations/Attribute Calcs");
	findWidget("attribute_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Attribute Calcs");
});
