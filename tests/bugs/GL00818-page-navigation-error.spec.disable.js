/*!
 * @AIMMS_FILE=models/Bugs/GL00818-PageNavigationError/SC Navigator/SC Navigator.aimms
 */
//Disabling the test due to the error in plywright starting the webui server
scenario(
	"Test for SCN issue #818: go to Scenarios step in workflow and check no error message.",
	() => {
		loadPage("Main Project/Results");

		findWidget("home")
			.getWorkflowItems()
			.clickOnWorkflowStep("Scenarios");

		findWidget("batch_scenario_dataset_selection").clickDialogPageButton("cancel");

		getCurrentPage().should.be.equal("Main Project/Scenario Management");

		getLogMessage()
			.getCount()
			.should.be.equal(0);
	}
);
