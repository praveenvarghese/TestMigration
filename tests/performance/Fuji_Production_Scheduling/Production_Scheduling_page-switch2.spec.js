/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Production_Scheduling_2019-03-11/Production_Scheduling_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Production_Scheduling Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Solution/Lot Overview");
	findWidget("lot_overview");
	getCurrentPage().should.be.equal("Main Project/Solution/Lot Overview");

	loadPage("Main Project/Solution/Solver");
	findWidget("solver_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Solver");

	getPageMenu().navigateToPage("Main Project/Solution/Lot Overview");
	findWidget("lot_overview");
	getCurrentPage().should.be.equal("Main Project/Solution/Lot Overview");

	getPageMenu().navigateToPage("Main Project/Solution/Solver");
	findWidget("solver_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Solver");

	loadPage("Main Project/Manual Actions/Coil sequencing");
	findWidget("coil_sequencing_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Coil sequencing");

	loadPage("Main Project/Manual Actions/Pallet plan");
	findWidget("pallet_plan_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Pallet plan");

	getPageMenu().navigateToPage("Main Project/Manual Actions/Coil sequencing");
	findWidget("coil_sequencing_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Coil sequencing");

	getPageMenu().navigateToPage("Main Project/Manual Actions/Pallet plan");
	findWidget("pallet_plan_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Pallet plan");

	loadPage("Main Project/Order releasing/Process order");
	findWidget("process_order");
	getCurrentPage().should.be.equal("Main Project/Order releasing/Process order");

	getPageMenu().navigateToPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");

	getPageMenu().navigateToPage("Main Project/Order releasing/Process order");
	findWidget("process_order");
	getCurrentPage().should.be.equal("Main Project/Order releasing/Process order");
});
