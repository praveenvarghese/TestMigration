/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Center_of_Gravity_Navigator_2020-12-21/Center_of_Gravity_Navigator_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("CenterOfGravity_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");

	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");

	loadPage("Main Project/Analytics/Costs");
	findWidget("cost_analysis");
	getCurrentPage().should.be.equal("Main Project/Analytics/Costs");

	loadPage("Main Project/Analytics/Center(s) of Gravity");
	findWidget("multiple_dcs_scenario");
	getCurrentPage().should.be.equal("Main Project/Analytics/Center(s) of Gravity");

	loadPage("Main Project/Analytics/Center(s) of Gravity");
	findWidget("multiple_dcs_scenario");
	getCurrentPage().should.be.equal("Main Project/Analytics/Center(s) of Gravity");

	loadPage("Main Project/Analytics/Center(s) of Gravity");
	findWidget("multiple_dcs_scenario");
	getCurrentPage().should.be.equal("Main Project/Analytics/Center(s) of Gravity");

	loadPage("Main Project/Analytics/Solution Details");
	findWidget("center_s_of_gravity_details");
	getCurrentPage().should.be.equal("Main Project/Analytics/Solution Details");

	loadPage("Main Project/Analytics/Solution Details");
	findWidget("center_s_of_gravity_details");
	getCurrentPage().should.be.equal("Main Project/Analytics/Solution Details");

	loadPage("Main Project/Analytics/Solution Details");
	findWidget("center_s_of_gravity_details");
	getCurrentPage().should.be.equal("Main Project/Analytics/Solution Details");
});
