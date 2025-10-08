/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario(
	"When on a workflow page and inactivating that same page, you should be taken to the Main Project page with an appropriate error message.",
	() => {
		loadPage("Main Project/home");

		// Create the valid sublevel steps (also adding a 'Step 5' along the way).
		findWidget("CreateSublevels").click();

		findWidget("home")
			.getWorkflowItems()
			.clickOnWorkflowStep("Step 2");

		// Inactivate the page that we are on. This should take us to the home page again.
		findWidget("InactivatePage").click();

		getCurrentPage().should.be.equal("Main Project");

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, no redirect page is configured either."
			);
		getLogMessage().closeList();
	}
);
