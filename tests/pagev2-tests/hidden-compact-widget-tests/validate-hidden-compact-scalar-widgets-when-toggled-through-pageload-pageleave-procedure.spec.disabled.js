/*!
 * @AIMMS_FILE=models/hiddenWidgetModel/Center of Gravity/Center of Gravity.aimms
 * @HARDWARE_SHARE=medium
 * @STARTUP_PROCEDURE=Data_File_SetInitialInformation
 */

scenario(
	"Test to verify Hidden widgets functinalities its changed from pageLeave and PageLoad procedure",
	() => {
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

		findWidget("EnableHiddenWidget_1")
			.getDimensions()
			.should.eql([1217, constants.HEADERLESS_WIDGET_HEIGHT]);

		findWidget("EnableHiddenWidget_1")
			.getValue()
			.should.eql("1.00");

		findWidget("EnableHiddenWidget_1").setValue("0");

		findWidget("demand_overview")
			.getVisibleWidgets()
			.should.eql([
				"CoG Map",
				"EnableHiddenWidget_1",
				"NumberOfCoGs",
				"Button_SOlveMultipleDCScenario",
				"Scalar_MaximumDriveTime",
				"Button_SolveDriveTimeScenario",
			]);

		findWidget("EnableHiddenWidget_1").setValue("1");

		findWidget("demand_overview")
			.getWorkflowItems()
			.getStepElement("Start")
			.click();

		findWidget("setup_1")
			.getVisibleWidgets()
			.should.eql(["Settings", "EnableHiddenWidget", "DriveTimeScenarioSettings_Switch"]);

		findWidget("EnableHiddenWidget")
			.getDimensions()
			.should.eql([559, constants.HEADERLESS_WIDGET_HEIGHT]);
	}
);
