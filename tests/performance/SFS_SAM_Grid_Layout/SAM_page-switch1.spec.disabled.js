/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SFS_SAM_With_Grid_Layout_2020-07-08/SFS_SAM_With_Grid_Layout_2020-07-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("SAM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Top Page");
	findWidget("negotiator_screen");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Top Page");

	getPageMenu().navigateToPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Top Page");
	findWidget("negotiator_screen");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Top Page");

	getPageMenu().navigateToPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");

	getPageMenu().navigateToPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");

	getPageMenu().navigateToPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");

	getPageMenu().navigateToPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");
});
