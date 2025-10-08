/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Jumbo_SmartScheduling_2020-06-30/Jumbo_SmartScheduling_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("SmartScheduling_Model Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");

	getPageMenu().navigateToPage("Main Project/Cargo overview");
	findWidget("voyage_estimation");
	getCurrentPage().should.be.equal("Main Project/Cargo overview");

	getPageMenu().navigateToPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");

	getPageMenu().navigateToPage("Main Project/Cargo overview");
	findWidget("voyage_estimation");
	getCurrentPage().should.be.equal("Main Project/Cargo overview");

	getPageMenu().navigateToPage("Main Project/Voyage estimation");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation");

	getPageMenu().navigateToPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");

	getPageMenu().navigateToPage("Main Project/Voyage estimation");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation");

	getPageMenu().navigateToPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");
});
