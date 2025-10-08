/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Production_Scheduling_2019-03-11/Production_Scheduling_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("Production_Scheduling Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Data");
	findWidget("excel");
	getCurrentPage().should.be.equal("Main Project/Data");
	loadPage("Main Project/Data");
	findWidget("excel");
	getCurrentPage().should.be.equal("Main Project/Data");
	loadPage("Main Project/Data");
	findWidget("excel");
	getCurrentPage().should.be.equal("Main Project/Data");

	loadPage("Main Project/Plan data/Orders");
	findWidget("orders");
	getCurrentPage().should.be.equal("Main Project/Plan data/Orders");
	loadPage("Main Project/Plan data/Orders");
	findWidget("orders");
	getCurrentPage().should.be.equal("Main Project/Plan data/Orders");
	loadPage("Main Project/Plan data/Orders");
	findWidget("orders");
	getCurrentPage().should.be.equal("Main Project/Plan data/Orders");

	loadPage("Main Project/Plan data/Rhythm Wheel");
	findWidget("rhythm_wheel");
	getCurrentPage().should.be.equal("Main Project/Plan data/Rhythm Wheel");
	loadPage("Main Project/Plan data/Rhythm Wheel");
	findWidget("rhythm_wheel");
	getCurrentPage().should.be.equal("Main Project/Plan data/Rhythm Wheel");
	loadPage("Main Project/Plan data/Rhythm Wheel");
	findWidget("rhythm_wheel");
	getCurrentPage().should.be.equal("Main Project/Plan data/Rhythm Wheel");

	loadPage("Main Project/Plan data/Coils on stock");
	findWidget("coils_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Coils on stock");
	loadPage("Main Project/Plan data/Coils on stock");
	findWidget("coils_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Coils on stock");
	loadPage("Main Project/Plan data/Coils on stock");
	findWidget("coils_1");
	getCurrentPage().should.be.equal("Main Project/Plan data/Coils on stock");

	loadPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");
	loadPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");
	loadPage("Main Project/Solution/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Solution/Schedule");
});
