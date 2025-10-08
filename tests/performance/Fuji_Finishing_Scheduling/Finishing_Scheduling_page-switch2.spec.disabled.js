/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Finishing_Scheduling_2019-06-08/Finishing Scheduling.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Planning");
	findWidget("planning_1");
	getCurrentPage().should.be.equal("Main Project/Planning");

	getPageMenu().navigateToPage("Main Project/Planning/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Schedule");

	getPageMenu().navigateToPage("Main Project/Planning");
	findWidget("planning_1");
	getCurrentPage().should.be.equal("Main Project/Planning");

	getPageMenu().navigateToPage("Main Project/Planning/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Schedule");

	getPageMenu().navigateToPage("Main Project/Planning/Machine schedule");
	findWidget("machine_schedule");
	getCurrentPage().should.be.equal("Main Project/Planning/Machine schedule");

	getPageMenu().navigateToPage("Main Project/Planning/Order details");
	findWidget("order_details");
	getCurrentPage().should.be.equal("Main Project/Planning/Order details");

	getPageMenu().navigateToPage("Main Project/Planning/Machine schedule");
	findWidget("machine_schedule");
	getCurrentPage().should.be.equal("Main Project/Planning/Machine schedule");

	getPageMenu().navigateToPage("Main Project/Planning/Order details");
	findWidget("order_details");
	getCurrentPage().should.be.equal("Main Project/Planning/Order details");

	getPageMenu().navigateToPage("Main Project/Planning/Pallet details");
	findWidget("pallet_details");
	getCurrentPage().should.be.equal("Main Project/Planning/Pallet details");

	getPageMenu().navigateToPage("Main Project/Planning/Alternative Routing");
	findWidget("alternative_routing");
	getCurrentPage().should.be.equal("Main Project/Planning/Alternative Routing");

	getPageMenu().navigateToPage("Main Project/Planning/Pallet details");
	findWidget("pallet_details");
	getCurrentPage().should.be.equal("Main Project/Planning/Pallet details");

	getPageMenu().navigateToPage("Main Project/Planning/Alternative Routing");
	findWidget("alternative_routing");
	getCurrentPage().should.be.equal("Main Project/Planning/Alternative Routing");

	getPageMenu().navigateToPage("Main Project/Planning");
	findWidget("planning_1");
	getCurrentPage().should.be.equal("Main Project/Planning");
});
