/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario("Test to verify that nested sublevels in the workflow are not allowed.", () => {
	loadPage("Main Project/home");

	// Verify workflow steps displayed in the home page, without having set the parent pages yet.
	findWidget("home")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

	// Create the nested sublevel steps
	findWidget("CreateNestedSublevels").click();

	loadPage("Main Project/home");

	// Verify the result
	findWidget("home")
		.getWorkflowItems()
		.should.eql([]);

	// Verify that a proper error message is generated
	getLogMessage()
		.openList()
		.getMessages()
		.should.be.eql([
			{
				Header: "Workflow validation:",
				Message:
					'Nested steps are not supported. The "Step4" step in the "" workflow has a ParentPageId which itself already has a ParentPageId. ',
				Icon: "icon-spam",
				Status: "Unread",
			},
		]);
});
