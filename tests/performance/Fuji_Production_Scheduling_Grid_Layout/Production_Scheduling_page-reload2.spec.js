/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Production_Scheduling_With_Grid_Layout_2019-03-11/Production_Scheduling_With_Grid_Layout_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("Production_Scheduling Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Solution/Pallet plan");
	findWidget("pallet_plan");
	getCurrentPage().should.be.equal("Main Project/Solution/Pallet plan");
	loadPage("Main Project/Solution/Pallet plan");
	findWidget("pallet_plan");
	getCurrentPage().should.be.equal("Main Project/Solution/Pallet plan");
	loadPage("Main Project/Solution/Pallet plan");
	findWidget("pallet_plan");
	getCurrentPage().should.be.equal("Main Project/Solution/Pallet plan");

	loadPage("Main Project/Solution/Lot Overview");
	findWidget("lot_overview");
	getCurrentPage().should.be.equal("Main Project/Solution/Lot Overview");
	loadPage("Main Project/Solution/Lot Overview");
	findWidget("lot_overview");
	getCurrentPage().should.be.equal("Main Project/Solution/Lot Overview");
	loadPage("Main Project/Solution/Lot Overview");
	findWidget("lot_overview");
	getCurrentPage().should.be.equal("Main Project/Solution/Lot Overview");

	loadPage("Main Project/Solution/Solver");
	findWidget("solver_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Solver");
	loadPage("Main Project/Solution/Solver");
	findWidget("solver_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Solver");
	loadPage("Main Project/Solution/Solver");
	findWidget("solver_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Solver");

	loadPage("Main Project/Manual Actions/Coil sequencing");
	findWidget("coil_sequencing_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Coil sequencing");
	loadPage("Main Project/Manual Actions/Coil sequencing");
	findWidget("coil_sequencing_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Coil sequencing");
	loadPage("Main Project/Manual Actions/Coil sequencing");
	findWidget("coil_sequencing_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Coil sequencing");

	loadPage("Main Project/Manual Actions/Pallet plan");
	findWidget("pallet_plan_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Pallet plan");
	loadPage("Main Project/Manual Actions/Pallet plan");
	findWidget("pallet_plan_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Pallet plan");
	loadPage("Main Project/Manual Actions/Pallet plan");
	findWidget("pallet_plan_1");
	getCurrentPage().should.be.equal("Main Project/Manual Actions/Pallet plan");
});
