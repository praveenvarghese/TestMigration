/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify scroll to focus active step on workflow v2", () => {
	loadPage("Main Project/Workflow_Error_Validations/1");

	findWidget("Create Sub-Workflow Child Pages").click();

	findWidget("Navigate To Page 10").click();

	findWidget("10_1")
		.getWorkflowItems()
		.getStepElement("Step Ten")
		.isStepActive().should.be.true;

	findWidget("10_1")
		.getWorkflowItems()
		.getStepElement("Step Ten")
		.isTheCurrentStep().should.be.true;

	findWidget("10_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("10_1").should.be.true;

	findWidget("10_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("2_1").should.be.false;

	// findWidget("10_1").dragScrollUp();
	findWidget("10_1")
		.getWorkflowItems()
		.getStepElement("Step Ten")
		.hover();

	findWidget("10_1")
		.getWorkflowItems()
		.getStepElement("Step One")
		.scrollToStep();

	findWidget("10_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("10_1").should.be.false;

	findWidget("10_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("1_1").should.be.true;

	openPageMenu()
		.toggleSubMenu("Main Project/Workflow_Error_Validations")
		.navigateToPage("Main Project/Workflow_Error_Validations/4");

	// Assert navigation to Page 4.
	getCurrentPage().should.be.equal("Main Project/Workflow_Error_Validations/4");

	findWidget("4_1")
		.getWorkflowItems()
		.getStepElement("Step Four")
		.isStepActive().should.be.true;

	findWidget("4_1")
		.getWorkflowItems()
		.getStepElement("Step Four")
		.isTheCurrentStep().should.be.true;

	findWidget("4_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("4_1").should.be.true;

	findWidget("4_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("10_1").should.be.false;
});
