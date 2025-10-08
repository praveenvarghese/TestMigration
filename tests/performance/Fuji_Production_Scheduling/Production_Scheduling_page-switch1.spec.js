/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Production_Scheduling_2019-03-11/Production_Scheduling_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// Model/Application: Production_Scheduling_2019-03-11

scenario("Production_Scheduling Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Data");
	findWidget("excel");
	getCurrentPage().should.be.equal("Main Project/Data");

	loadPage("Main Project/Plan data/Rhythm Wheel");
	findWidget("rhythm_wheel");
	getCurrentPage().should.be.equal("Main Project/Plan data/Rhythm Wheel");

	getPageMenu().navigateToPage("Main Project/Data");
	findWidget("excel");
	getCurrentPage().should.be.equal("Main Project/Data");

	getPageMenu().navigateToPage("Main Project/Plan data/Rhythm Wheel");
	findWidget("rhythm_wheel");
	getCurrentPage().should.be.equal("Main Project/Plan data/Rhythm Wheel");

	loadPage("Main Project/Plan data/Coils on stock");
	findWidget("coils_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Coils on stock");

	loadPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");

	getPageMenu().navigateToPage("Main Project/Plan data/Coils on stock");
	findWidget("coils_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Coils on stock");

	getPageMenu().navigateToPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");

	loadPage("Main Project/Solution/Pallet plan");
	findWidget("pallet_plan");
	getCurrentPage().should.be.equal("Main Project/Solution/Pallet plan");

	getPageMenu().navigateToPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");

	getPageMenu().navigateToPage("Main Project/Solution/Pallet plan");
	findWidget("pallet_plan");
	getCurrentPage().should.be.equal("Main Project/Solution/Pallet plan");
});
