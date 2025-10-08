/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario(
	"Test to verify whether a valid sublevel setup having a hidden child, is indeed displayed as expected.",
	() => {
		loadPage("Main Project/home");

		// Verify workflow steps displayed in the home page, without having set the parent pages yet.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

		findWidget("home")
			.getWorkflowItems()
			.isSubWorkflowExpanded("home")
			.should.eql(false);

		findWidget("home")
			.getWorkflowItems()
			.isSubWorkflowExpanded("page4")
			.should.eql(false);

		// Create the valid sublevel steps (also adding a 'Step 5' along the way)
		findWidget("CreateHiddenChild").click();

		loadPage("Main Project/home");

		// Verify the result
		findWidget("home")
			.getWorkflowItems()
			.getChildWorkflowStepsData("home") // "The First Step"
			.should.eql([
				{
					title: "Step 2",
					icon: "icon aimms-medal-second",
					state: "active",
					currentStep: "No",
				},
				{
					title: "Step3",
					icon: "icon aimms-medal-third",
					state: "inactive",
					currentStep: "No",
				},
			]);

		findWidget("home")
			.getWorkflowItems()
			.isSubWorkflowExpanded("home")
			.should.eql(false);

		findWidget("home")
			.getWorkflowItems()
			.getChildWorkflowStepsData("page4")
			.should.eql([]);
	}
);
