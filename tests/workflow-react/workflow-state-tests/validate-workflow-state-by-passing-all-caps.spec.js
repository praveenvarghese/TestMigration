/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify states of workflow ", () => {
	loadPage("Main Project/Dialog Pages");

	//Validate step is errored out when user changes Page Data state to error(Giving all CAPS)
	findWidget("Workflow Order").setValue("1");

	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("ERROR");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepError().should.be.true;

	//Validate step is incomplete  out when user changes Page Data state to incomplete(Giving all CAPS)
	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("INCOMPLETE");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepIncomplete().should.be.true;

	//Validate step is complete out when user changes Page Data state to complete(Giving all CAPS)
	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("COMPLETE");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepComplete().should.be.true;

	//Validate step is incomplete  out when user changes Page Data state to incomplete(Giving all CAPS)
	findWidget("Workflow_Table")
		.getCell(7, 4)
		.setValue("INACTIVE");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 8")
		.isStepInactive().should.be.true;
});
