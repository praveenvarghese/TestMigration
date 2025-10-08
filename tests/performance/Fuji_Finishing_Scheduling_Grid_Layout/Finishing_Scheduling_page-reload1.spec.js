/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Finishing_Scheduling_With_Grid_Layout_2019-06-08/Finishing_Scheduling_With_Grid_Layout_2019-06-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

//Model: Fuji Finishing Scheduling

scenario("Finishing_Scheduling Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Plan data/Routing");

	findWidget("routing_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Routing");
	loadPage("Main Project/Plan data/Routing");
	findWidget("routing_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Routing");
	loadPage("Main Project/Plan data/Routing");
	findWidget("routing_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Routing");

	loadPage("Main Project/Planning/Machine schedule");
	findWidget("machine_schedule");
	getCurrentPage().should.be.equal("Main Project/Planning/Machine schedule");
	loadPage("Main Project/Planning/Machine schedule");
	findWidget("machine_schedule");
	getCurrentPage().should.be.equal("Main Project/Planning/Machine schedule");
	loadPage("Main Project/Planning/Machine schedule");
	findWidget("machine_schedule");
	getCurrentPage().should.be.equal("Main Project/Planning/Machine schedule");

	loadPage("Main Project/Planning/Calendar");
	findWidget("calendar_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Calendar");
	loadPage("Main Project/Planning/Calendar");
	findWidget("calendar_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Calendar");
	loadPage("Main Project/Planning/Calendar");
	findWidget("calendar_1");
	getCurrentPage().should.be.equal("Main Project/Planning/Calendar");

	loadPage("Main Project/Planning/KPI's/Number of orders in queue");
	findWidget("buiffers_1");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Number of orders in queue");
	loadPage("Main Project/Planning/KPI's/Number of orders in queue");
	findWidget("buiffers_1");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Number of orders in queue");
	loadPage("Main Project/Planning/KPI's/Number of orders in queue");
	findWidget("buiffers_1");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Number of orders in queue");

	loadPage("Main Project/Planning/KPI's/Hours of work in queue");
	findWidget("work_in_queue");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Hours of work in queue");
	loadPage("Main Project/Planning/KPI's/Hours of work in queue");
	findWidget("work_in_queue");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Hours of work in queue");
	loadPage("Main Project/Planning/KPI's/Hours of work in queue");
	findWidget("work_in_queue");
	getCurrentPage().should.be.equal("Main Project/Planning/KPI's/Hours of work in queue");
});
