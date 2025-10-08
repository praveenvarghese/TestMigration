/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario(
	"Test to verify whether a perfectly valid sublevel setup is indeed displayed as expected.",
	() => {
		loadPage("Main Project/home");

		// Verify workflow steps displayed in the home page, without having set the parent pages yet.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

		// Create the valid sublevel steps (also adding a 'Step 5' along the way)
		findWidget("CreateValidSublevels").click();

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
					state: "active",
					currentStep: "No",
				},
			]);

		findWidget("home")
			.getWorkflowItems()
			.getChildWorkflowStepsData("page4") // "The First Step"
			.should.eql([
				{
					title: "Step5",
					icon: "icon aimms-seven-segment-5",
					state: "active",
					currentStep: "No",
				},
			]);
	}
);
