/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Center_of_Gravity_Navigator_2021-06-18/Center_of_Gravity_Navigator_2021-06-18.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("CenterOfGravity_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Start");
	findWidget("setup_1");
	getCurrentPage().should.be.equal("Main Project/Start");

	loadPage("Main Project/Start");
	findWidget("setup_1");
	getCurrentPage().should.be.equal("Main Project/Start");

	loadPage("Main Project/Start");
	findWidget("setup_1");
	getCurrentPage().should.be.equal("Main Project/Start");

	loadPage("Main Project/Run Scenario");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Run Scenario");

	loadPage("Main Project/Run Scenario");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Run Scenario");

	loadPage("Main Project/Run Scenario");
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Run Scenario");

	loadPage("Main Project/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenario Comparison");

	loadPage("Main Project/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenario Comparison");

	loadPage("Main Project/Scenario Comparison");
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenario Comparison");
});
