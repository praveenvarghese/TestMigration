/*!
 * @AIMMS_FILE=models/hiddenWidgetModel/Center of Gravity/Center of Gravity.aimms
 * @STARTUP_PROCEDURE=Data_File_SetInitialInformation
 */

scenario("Test to verify translations on sidepanel tab", () => {
	loadPage("Main Project/Run Scenario");

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

	findWidget("demand_overview")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Map Control", "Legend", "Job List", "Help"]);

	findWidget("demand_overview")
		.getSidepanels()
		.getTabToolTip()
		.should.eql([
			"Teams reliability on the deliverables",
			"",
			"Here you can load the results of a previous job, after the connection was lost.",
			"",
		]);
});
