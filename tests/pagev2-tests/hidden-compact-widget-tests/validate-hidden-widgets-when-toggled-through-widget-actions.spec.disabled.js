/*!
 * @AIMMS_FILE=models/hiddenWidgetModel/Center of Gravity/Center of Gravity.aimms
 * @HARDWARE_SHARE=large
 * @STARTUP_PROCEDURE=Data_File_SetInitialInformation
 */

scenario("Test to verify Hidden widgets functinalities its changed from identifier", () => {
	loadPage("Main Project/Start");

	findWidget("setup_1")
		.getVisibleWidgets()
		.should.eql(["Settings", "EnableHiddenWidget", "DriveTimeScenarioSettings_Switch"]);

	findWidget("setup_1")
		.getWorkflowItems()
		.getStepElement("Run Scenario")
		.click();

	findWidget("demand_overview")
		.getVisibleWidgets()
		.should.eql([
			"CoG Map",
			"EnableHiddenWidget_1",
			"NumberOfCoGs",
			"Button_SOlveMultipleDCScenario",
			"Scalar_MaximumDriveTime",
			"Button_SolveDriveTimeScenario",
			"DriveTimeDistribution",
			"Model_Cost_totals",
		]);

	findWidget("Button_SolveDriveTimeScenario").click();

	findDialog()
		.findButton("Ok")
		.click();

	findWidget("demand_overview")
		.getWorkflowItems()
		.getStepElement("Compare Scenarios")
		.click();

	findWidget("scenario_comparison")
		.getVisibleWidgets()
		.should.eql([
			"CoG Map 2",
			"Scenario CoG Map",
			"Button_SOlveMultipleDCScenario_1",
			"DriveTimeDistribution1",
			"Model_Cost_totals1",
			"Scenario_DriveTimeDistribution",
			"Scenario_Model_Cost_totals",
		]);

	findWidget("Model_Cost_totals1")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Model_Cost_totals1")
		.getWidgetActionDetails(1)
		.click();

	findWidget("scenario_comparison")
		.getVisibleWidgets()
		.should.eql([
			"CoG Map 2",
			"Scenario CoG Map",
			"Button_SOlveMultipleDCScenario_1",
			"DriveTimeDistribution1",
			"Model_cost_transport1",
			"Scenario_DriveTimeDistribution",
			"Scenario_Model_cost_transport",
		]);
});
