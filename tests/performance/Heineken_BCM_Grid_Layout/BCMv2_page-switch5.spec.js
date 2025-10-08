/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Output >>>");
	findWidget("output_landing_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>");

	getPageMenu()
		.toggleMenu()
		.toggleSubMenu("Main Project/Output >>>/OpCo view")
		.isMenuLinkVisible("Main Project/Output >>>/OpCo view/Shortage overview")
		.should.be.equal(true);

	getPageMenu().navigateToPage("Main Project/Output >>>/OpCo view/Shortage overview");
	findWidget("opco_demand_satisfaction");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage overview");

	getPageMenu().navigateToPage("Main Project/Output >>>");
	findWidget("output_landing_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>");

	getPageMenu()
		.toggleMenu()
		.toggleSubMenu("Main Project/Output >>>/OpCo view")
		.isMenuLinkVisible("Main Project/Output >>>/OpCo view/Shortage overview")
		.should.be.equal(true);

	getPageMenu().navigateToPage("Main Project/Output >>>/OpCo view/Shortage overview");
	findWidget("opco_demand_satisfaction");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage overview");

	getPageMenu()
		.toggleMenu()
		.toggleSubMenu("Main Project/Output >>>/Production unit view")
		.isMenuLinkVisible("Main Project/Output >>>/Production unit view/Capacity per process")
		.should.be.equal(true);

	getPageMenu().navigateToPage(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);
	findWidget("production_unit_2");
	getCurrentPage().should.be.equal(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);

	getPageMenu().navigateToPage("Main Project/Output >>>/Liquid Assets Details");
	findWidget("g_asset_liquid_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/Liquid Assets Details");

	getPageMenu()
		.toggleMenu()
		.toggleSubMenu("Main Project/Output >>>/Production unit view")
		.isMenuLinkVisible("Main Project/Output >>>/Production unit view/Capacity per process")
		.should.be.equal(true);

	getPageMenu().navigateToPage(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);
	findWidget("production_unit_2");
	getCurrentPage().should.be.equal(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);

	getPageMenu().navigateToPage("Main Project/Output >>>/Liquid Assets Details");
	findWidget("g_asset_liquid_page_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/Liquid Assets Details");
});
