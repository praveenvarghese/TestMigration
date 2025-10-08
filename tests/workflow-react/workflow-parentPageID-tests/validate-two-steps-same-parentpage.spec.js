/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario("Test to verify two workflow sublevel steps having the same parent page", () => {
	loadPage("Main Project/home");

	// Verify workflow steps displayed in the home page, without having set the parent pages yet.
	findWidget("home")
		.getWorkflowItems()
		.getWorkflowSteps()
		.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

	// Create the sublevel steps
	findWidget("CreateSublevels").click();

	loadPage("Main Project/home");

	// Verify the result
	findWidget("home")
		.getWorkflowItems()
		.getChildWorkflowStepsData("home") // "The First Step"
		.should.eql([
			{ title: "Step3", icon: "icon aimms-medal-third", state: "active", currentStep: "No" },
			{
				title: "Step4",
				icon: "icon aimms-seven-segment-4",
				state: "active",
				currentStep: "No",
			},
		]);
});
