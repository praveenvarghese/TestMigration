/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Jumbo_SmartScheduling_2020-06-30/Jumbo_SmartScheduling_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is the second measurement for warm start

scenario("SmartScheduling_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");
	loadPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");
	loadPage("Main Project/Schedule");
	findWidget("schedule_1");
	getCurrentPage().should.be.equal("Main Project/Schedule");

	loadPage("Main Project/Schedule/Scenario compare");
	findWidget("scenario_compare");
	getCurrentPage().should.be.equal("Main Project/Schedule/Scenario compare");
	loadPage("Main Project/Schedule/Scenario compare");
	findWidget("scenario_compare");
	getCurrentPage().should.be.equal("Main Project/Schedule/Scenario compare");
	loadPage("Main Project/Schedule/Scenario compare");
	findWidget("scenario_compare");
	getCurrentPage().should.be.equal("Main Project/Schedule/Scenario compare");

	loadPage("Main Project/Cargo overview");
	findWidget("voyage_estimation");
	getCurrentPage().should.be.equal("Main Project/Cargo overview");
	loadPage("Main Project/Cargo overview");
	findWidget("voyage_estimation");
	getCurrentPage().should.be.equal("Main Project/Cargo overview");
	loadPage("Main Project/Cargo overview");
	findWidget("voyage_estimation");
	getCurrentPage().should.be.equal("Main Project/Cargo overview");

	loadPage("Main Project/Voyage estimation");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation");
	loadPage("Main Project/Voyage estimation");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation");
	loadPage("Main Project/Voyage estimation");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Voyage estimation");
});
