/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Exxon GetPlantDataTwo Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");

	getPageMenu().navigateToPage(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);
	findWidget("view_hierarchy");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);

	getPageMenu().navigateToPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");

	getPageMenu().navigateToPage(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);
	findWidget("attribute_browser");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);

	getPageMenu().navigateToPage(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);
	findWidget("view_hierarchy");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Equipment Browser"
	);

	getPageMenu().navigateToPage(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);
	findWidget("attribute_browser");
	getCurrentPage().should.be.equal(
		"Main Project/Browse & Edit Equipment Hierarchy/Attribute Browser"
	);

	getPageMenu().navigateToPage("Main Project/My Calculations/Tag Calcs");
	findWidget("tag_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Tag Calcs");

	getPageMenu().navigateToPage("Main Project/My Calculations/Attribute Calcs");
	findWidget("attribute_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Attribute Calcs");

	getPageMenu().navigateToPage("Main Project/My Calculations/Tag Calcs");
	findWidget("tag_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Tag Calcs");

	getPageMenu().navigateToPage("Main Project/My Calculations/Attribute Calcs");
	findWidget("attribute_calcs");
	getCurrentPage().should.be.equal("Main Project/My Calculations/Attribute Calcs");

	getPageMenu().navigateToPage("Main Project/Browse & Edit Equipment Hierarchy");
	findWidget("paue_hierarchy_broswer");
	getCurrentPage().should.be.equal("Main Project/Browse & Edit Equipment Hierarchy");
});
