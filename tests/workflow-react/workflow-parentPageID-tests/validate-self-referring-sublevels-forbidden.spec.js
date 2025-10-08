/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario("Test to verify that self-referring sublevels in the workflow are not allowed.", () => {
	loadPage("Main Project/home");

	// Verify workflow steps displayed in the home page, without having set the parent pages yet.
	findWidget("home")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

	// Create the nested sublevel steps
	findWidget("CreateSelfReferringSublevels").click();

	loadPage("Main Project/home");

	// Verify the result
	findWidget("home")
		.getWorkflowItems()
		.should.eql([]);

	// Verify that a proper error message is generated
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain(
			'Workflow validation:In the "" workflow, the "Step4" step has an identical entry specified for both PageID and ParentPageId. This is not permitted.'
		);
});
