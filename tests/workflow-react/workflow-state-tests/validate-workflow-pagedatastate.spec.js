/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify states of workflow by giving all CAPS", () => {
	loadPage("Main Project/Dialog Pages");

	//Validate step is errored out when user changes Page Data state to error
	findWidget("Workflow Order").setValue("1");

	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("error");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepError().should.be.true;

	//Validate step is errored out when user changes Page Data state to error(Giving all CAPS)
	findWidget("Workflow Order").setValue("1");

	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("ERROR");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepError().should.be.true;

	//Validate step is incomplete  out when user changes Page Data state to incomplete
	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("incomplete");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepIncomplete().should.be.true;

	//Validate step is complete out when user changes Page Data state to complete
	findWidget("Workflow_Table")
		.getCell(0, 5)
		.setValue("complete");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepComplete().should.be.true;

	//Validate step gets highlighted when user clicks on the step
	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step11")
		.isTheCurrentStep().should.be.true;

	//Validate step is active out when user changes workflow page state to active
	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step11")
		.isStepActive().should.be.true;

	//Validate step is incomplete  out when user changes Page Data state to incomplete
	findWidget("Workflow_Table")
		.getCell(7, 4)
		.setValue("inactive");

	findWidget("dialog_pages")
		.getWorkflowItems()
		.getStepElement("Step 8")
		.isStepInactive().should.be.true;
});
