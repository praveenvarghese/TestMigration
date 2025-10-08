/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is the second measurement for warm start

scenario("BCM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Output >>>/OpCo view/Shortage overview");
	findWidget("opco_demand_satisfaction");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage overview");
	loadPage("Main Project/Output >>>/OpCo view/Shortage overview");
	findWidget("opco_demand_satisfaction");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage overview");
	loadPage("Main Project/Output >>>/OpCo view/Shortage overview");
	findWidget("opco_demand_satisfaction");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage overview");

	loadPage("Main Project/Output >>>/OpCo view/Shortage details");
	findWidget("opco_shortage_details_by_month_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage details");
	loadPage("Main Project/Output >>>/OpCo view/Shortage details");
	findWidget("opco_shortage_details_by_month_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage details");
	loadPage("Main Project/Output >>>/OpCo view/Shortage details");
	findWidget("opco_shortage_details_by_month_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Shortage details");

	loadPage("Main Project/Output >>>/OpCo view/Map Allocation");
	findWidget("opco_map_allocation_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Map Allocation");
	loadPage("Main Project/Output >>>/OpCo view/Map Allocation");
	findWidget("opco_map_allocation_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Map Allocation");
	loadPage("Main Project/Output >>>/OpCo view/Map Allocation");
	findWidget("opco_map_allocation_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/OpCo view/Map Allocation");

	loadPage("Main Project/Output >>>/Production unit view/Capacity per process");
	findWidget("production_unit_2");
	getCurrentPage().should.be.equal(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);
	loadPage("Main Project/Output >>>/Production unit view/Capacity per process");
	findWidget("production_unit_2");
	getCurrentPage().should.be.equal(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);
	loadPage("Main Project/Output >>>/Production unit view/Capacity per process");
	findWidget("production_unit_2");
	getCurrentPage().should.be.equal(
		"Main Project/Output >>>/Production unit view/Capacity per process"
	);

	loadPage("Main Project/Output >>>/Production unit view/Utilization");
	findWidget("g_brewery_screen1_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/Production unit view/Utilization");
	loadPage("Main Project/Output >>>/Production unit view/Utilization");
	findWidget("g_brewery_screen1_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/Production unit view/Utilization");
	loadPage("Main Project/Output >>>/Production unit view/Utilization");
	findWidget("g_brewery_screen1_1");
	getCurrentPage().should.be.equal("Main Project/Output >>>/Production unit view/Utilization");
});
