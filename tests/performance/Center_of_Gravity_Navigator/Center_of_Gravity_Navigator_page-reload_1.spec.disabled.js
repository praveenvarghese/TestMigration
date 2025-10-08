/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Center_of_Gravity_Navigator_2020-12-21/Center_of_Gravity_Navigator_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("CenterOfGravity_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Home");
	findWidget("home_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");

	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");

	loadPage("Main Project/Review/Location Data");
	findWidget("9_location_data");
	getCurrentPage().should.be.equal("Main Project/Review/Location Data");

	loadPage("Main Project/Analytics/Demand and Supply Distribution");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Analytics/Demand and Supply Distribution");

	loadPage("Main Project/Analytics/Demand and Supply Distribution");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Analytics/Demand and Supply Distribution");

	loadPage("Main Project/Analytics/Demand and Supply Distribution");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Analytics/Demand and Supply Distribution");
});
