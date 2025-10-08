/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Call_Center_Scheduling/CallCenterScheduling.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is old start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is the second measurement for warm start

scenario("CallCenterScheduling_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/DateTimeTables");
	findWidget("performance_1");
	getCurrentPage().should.be.equal("Main Project/DateTimeTables");
	loadPage("Main Project/DateTimeTables");
	findWidget("performance_1");
	getCurrentPage().should.be.equal("Main Project/DateTimeTables");
	loadPage("Main Project/DateTimeTables");
	findWidget("performance_1");
	getCurrentPage().should.be.equal("Main Project/DateTimeTables");
});
