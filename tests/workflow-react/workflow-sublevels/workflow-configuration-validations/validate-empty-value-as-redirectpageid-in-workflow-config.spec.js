/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is not displayed. if redirect pageid  is empty value in workflow.",
	() => {
		loadPage("Main Project/home");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("home");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagefive");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pageone");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagetwo");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagethree");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pagesix");

		getLogMessage().openList();

		getLogMessage().closeList();

		// Entering a Grid type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 6)
			.setValue("      ");

		// Entering a classic type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 6)
			.setValue("      ");

		// Assert 0 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);

		// Since there are no errors in the configuration of workflow 2, workflow should be displayed at this point.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "Step B", "Step C", "Step D", "Step E", "Step F"]);
	}
);
