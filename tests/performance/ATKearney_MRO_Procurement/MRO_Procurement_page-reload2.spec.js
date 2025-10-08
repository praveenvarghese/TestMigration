/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/MRO_Procurement_2018-09-04/MRO_Procurement_2018-09-04.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("MRO_Procurement Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Bid Information/Compare Bids");
	findWidget("compare_bids");
	getCurrentPage().should.be.equal("Main Project/Bid Information/Compare Bids");
	loadPage("Main Project/Bid Information/Compare Bids");
	findWidget("compare_bids");
	getCurrentPage().should.be.equal("Main Project/Bid Information/Compare Bids");
	loadPage("Main Project/Bid Information/Compare Bids");
	findWidget("compare_bids");
	getCurrentPage().should.be.equal("Main Project/Bid Information/Compare Bids");

	loadPage("Main Project/Scenarios Summary");
	findWidget("savings_summary");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary");
	loadPage("Main Project/Scenarios Summary");
	findWidget("savings_summary");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary");
	loadPage("Main Project/Scenarios Summary");
	findWidget("savings_summary");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary");

	loadPage("Main Project/Scenarios Summary/Full Savings Dashboard");
	findWidget("scenario_deep_dive");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Full Savings Dashboard");
	loadPage("Main Project/Scenarios Summary/Full Savings Dashboard");
	findWidget("scenario_deep_dive");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Full Savings Dashboard");
	loadPage("Main Project/Scenarios Summary/Full Savings Dashboard");
	findWidget("scenario_deep_dive");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Full Savings Dashboard");

	loadPage("Main Project/Scenarios Summary/One MB Comparison");
	findWidget("one_mb_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/One MB Comparison");
	loadPage("Main Project/Scenarios Summary/One MB Comparison");
	findWidget("one_mb_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/One MB Comparison");
	loadPage("Main Project/Scenarios Summary/One MB Comparison");
	findWidget("one_mb_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/One MB Comparison");

	loadPage("Main Project/Scenarios Summary/Allocation Info");
	findWidget("full_solution_breakdown");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Allocation Info");
	loadPage("Main Project/Scenarios Summary/Allocation Info");
	findWidget("full_solution_breakdown");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Allocation Info");
	loadPage("Main Project/Scenarios Summary/Allocation Info");
	findWidget("full_solution_breakdown");
	getCurrentPage().should.be.equal("Main Project/Scenarios Summary/Allocation Info");
});
