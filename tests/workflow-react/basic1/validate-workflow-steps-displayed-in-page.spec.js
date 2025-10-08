/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario("Test to verify workflow steps displayed in the page", () => {
	loadPage("Main Project/home");

	//Verify workflow steps displayed in the home page
	findWidget("home")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql([
			"Step 1",
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

	findWidget("home")
		.getWorkflowItems()
		.getStepElement("Step 2")
		.isStepInactive().should.be.true;

	findWidget("home")
		.getWorkflowItems()
		.getStepElement("Step 3")
		.isStepInactive().should.be.true;

	findWidget("home")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepIncomplete().should.be.false;

	//Verify workflow steps can be hidden and make them active using a procedure
	findWidget("Enable_Step").click();

	findWidget("home")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql([
			"Step 1",
			"Step 2",
			"Step 4",
			"Step 5",
			"Step 6",
			"Step 7",
			"Step 8",
			"Step 9",
			"Step 10",
			"Step11",
		]);

	findWidget("home")
		.getWorkflowItems()
		.getStepElement("Step 2")
		.isStepActive().should.be.true;

	findWidget("home")
		.getWorkflowItems()
		.getStepElement("Step 2")
		.click();

	findWidget("bar_chart")
		.getWorkflowItems()
		.getStepElement("Step 1")
		.isStepComplete().should.be.true;
});
