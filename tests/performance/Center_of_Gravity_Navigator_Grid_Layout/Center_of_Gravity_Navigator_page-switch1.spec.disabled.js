/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2021-06-18/Center_of_Gravity_Navigator_2021-06-18/Center_of_Gravity_Navigator_2021-06-18.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("CenterOfGravity_Model Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Start");
	findWidget("setup_1");
	getCurrentPage().should.be.equal("Main Project/Start");

	findWidget("setup_1")
		.getWorkflowItems()
		.getStepElement("Run Scenario")
		.click();
	findWidget("demand_overview");
	getCurrentPage().should.be.equal("Main Project/Run Scenario");

	findWidget("demand_overview")
		.getWorkflowItems()
		.getStepElement("Scenario Details")
		.click();
	findWidget("center_s_of_gravity_details");
	getCurrentPage().should.be.equal("Main Project/Scenario Details");

	findWidget("center_s_of_gravity_details")
		.getWorkflowItems()
		.getStepElement("Compare Scenarios")
		.click();
	findWidget("scenario_comparison");
	getCurrentPage().should.be.equal("Main Project/Scenario Comparison");

	findWidget("scenario_comparison")
		.getWorkflowItems()
		.getStepElement("Start")
		.click();
	findWidget("setup_1");
	getCurrentPage().should.be.equal("Main Project/Start");
});
