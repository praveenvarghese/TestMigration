/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario(
	"Test to verify that sublevels referring to a non-existing parent page in the workflow give a proper error message.",
	() => {
		loadPage("Main Project/home");

		// Verify workflow steps displayed in the home page, without having set the parent pages yet.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

		// Create the nested sublevel steps
		findWidget("CreateHiddenChild_1").click();

		loadPage("Main Project/home");

		// Verify the result
		findWidget("home")
			.getWorkflowItems()
			.should.eql([]);

		// Verify that a proper error message is generated
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "" workflow, the "Step3" step has an invalid ParentPageId specified.'
			);
	}
);
