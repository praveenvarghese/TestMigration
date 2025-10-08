/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Finishing_Scheduling_2019-06-08/Finishing Scheduling.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Plan data");
	findWidget("plan_data");
	getCurrentPage().should.be.equal("Main Project/Plan data");

	getPageMenu().navigateToPage("Main Project/Plan data/Orders");
	findWidget("orders_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Orders");

	getPageMenu().navigateToPage("Main Project/Plan data");
	findWidget("plan_data");
	getCurrentPage().should.be.equal("Main Project/Plan data");

	getPageMenu().navigateToPage("Main Project/Plan data/Orders");
	findWidget("orders_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Orders");

	getPageMenu().navigateToPage("Main Project/Plan data/Pallets");
	findWidget("pallets_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Pallets");

	getPageMenu().navigateToPage("Main Project/Plan data/Routing");
	findWidget("routing_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Routing");

	getPageMenu().navigateToPage("Main Project/Plan data/Pallets");
	findWidget("pallets_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Pallets");

	getPageMenu().navigateToPage("Main Project/Plan data/Routing");
	findWidget("routing_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Routing");

	getPageMenu().navigateToPage("Main Project/Planning/Alternative Routing");
	findWidget("alternative_routing");
	getCurrentPage().should.be.equal("Main Project/Planning/Alternative Routing");

	getPageMenu().navigateToPage("Main Project/Planning/Calendar");
	findWidget("calendar_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Calendar");

	getPageMenu().navigateToPage("Main Project/Planning/Alternative Routing");
	findWidget("alternative_routing");
	getCurrentPage().should.be.equal("Main Project/Planning/Alternative Routing");

	getPageMenu().navigateToPage("Main Project/Planning/Calendar");
	findWidget("calendar_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Calendar");

	getPageMenu().navigateToPage("Main Project/Plan data");
	findWidget("plan_data");
	getCurrentPage().should.be.equal("Main Project/Plan data");
});
