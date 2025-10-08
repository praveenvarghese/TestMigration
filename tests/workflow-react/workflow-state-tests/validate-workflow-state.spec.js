/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify page state of workflow is dynamically being updated", () => {
	loadPage("Main Project/Dialog Pages");

	//Validate step is inactive out when user changes Page state to inactive
	findWidget("Workflow Order").setValue("1");

	findWidget("Workflow_Table")
		.getCell(0, 4)
		.setValue("inactive");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepInactive().should.be.true;

	//Validate step is inactive out when user changes page state to inactive(Giving all CAPS)
	findWidget("Workflow Order").setValue("1");

	findWidget("Workflow_Table")
		.getCell(0, 4)
		.setValue("INACTIVE");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepInactive().should.be.true;

	//Validate step is incomplete  out when user changes Page Data state to incomplete
	findWidget("Workflow_Table")
		.getCell(0, 4)
		.setValue("hidden");

	// Verify the hidden step is not visible in workflow panel
	findWidget("dialog_pages")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql([
			"Step 2",
			"Step 3",
			"Step 4",
			"Step 5",
			"Step 6",
			"Step 7",
			"Step 8",
			"Step 9",
			"Step 10",
			"Step11",
		]);

	//Validate step is complete out when user changes Page Data state to complete
	findWidget("Workflow_Table")
		.getCell(0, 4)
		.setValue("active");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepActive().should.be.true;
});
