/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify scroll to focus active step on workflow v2", () => {
	loadPage("Main Project/Workflow_Error_Validations/1");

	// Verify the result for parent and step with no name
	findWidget("1_1")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql([
			"Step One",
			"Step Two",
			"Step Three",
			"Step Four",
			"Step Five",
			"Step Six",
			"Step Seven",
			"Step Eight",
			"Step Nine",
			"Step Ten",
			"Step Eleven",
			"Step Twelve",
			"Step Thirteen",
			"Step Fourteen",
			"Step Fifteen",
			"Step Sixteen",
			"Step Seventeen",
			"Step Eighteen",
			"Step Ninteen",
			"Step Twenty",
			"Step Twenty One",
			"Step Twenty Two",
			"Step Twenty Three",
			"Step Twenty Four",
			"Step Twenty Five",
			"Step Twenty Six",
			"Step Twenty Seven",
			"Step Twenty Eight",
			"Step Twenty Nine",
			"Step Thirty",
		]);

	findWidget("1_1")
		.getWorkflowItems()
		.getStepElement("Step One")
		.isStepActive().should.be.true;

	findWidget("1_1")
		.getWorkflowItems()
		.getStepElement("Step One")
		.isTheCurrentStep().should.be.true;

	findWidget("1_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("1_1").should.be.true;

	findWidget("1_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("30_1").should.be.false;

	// Scenario: Valid PageId. Inactive step. Invalid Redirect-PageId. Accessed through menu, retains on same page but with Error1 and warning.
	openAppManager().navigateToPage("Main Project/Workflow_Error_Validations/30");

	findWidget("30_1")
		.getWorkflowItems()
		.getStepElement("Step Thirty")
		.isStepActive().should.be.true;

	findWidget("30_1")
		.getWorkflowItems()
		.getStepElement("Step Thirty")
		.isTheCurrentStep().should.be.true;

	findWidget("30_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("30_1").should.be.true;

	findWidget("30_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("6_1").should.be.false;

	loadPage("Main Project/Workflow_Error_Validations/6");

	findWidget("6_1")
		.getWorkflowItems()
		.getStepElement("Step Six")
		.isStepActive().should.be.true;

	findWidget("6_1")
		.getWorkflowItems()
		.getStepElement("Step Six")
		.isTheCurrentStep().should.be.true;

	findWidget("6_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("6_1").should.be.true;

	findWidget("6_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("25_1").should.be.false;

	getPageMenu()
		.toggleMenu()
		.toggleMoreItems("Main Project/Workflow_Error_Validations");

	getPageMenu().navigateToPage("Main Project/Workflow_Error_Validations/25");

	findWidget("25_1")
		.getWorkflowItems()
		.getStepElement("Step Twenty Five")
		.isStepActive().should.be.true;

	findWidget("25_1")
		.getWorkflowItems()
		.getStepElement("Step Twenty Five")
		.isTheCurrentStep().should.be.true;

	findWidget("25_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("25_1").should.be.true;

	findWidget("25_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("12_1").should.be.false;

	findWidget("Navigate To").click();

	getCurrentPage().should.be.equal("Main Project/Workflow_Error_Validations/12");

	findWidget("12_1")
		.getWorkflowItems()
		.getStepElement("Step Twelve")
		.isStepActive().should.be.true;

	findWidget("12_1")
		.getWorkflowItems()
		.getStepElement("Step Twelve")
		.isTheCurrentStep().should.be.true;

	findWidget("12_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("12_1").should.be.true;

	findWidget("12_1")
		.getWorkflowItems()
		.isStepDisplayedInWorkflowPanel("1_1").should.be.false;
});
