/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel/SimpleWorkflowModel.aimms
 */

scenario(
	"Test to verify whether you can indeed go to a different page by clicking on a main level or a sublevel in the workflow.",
	() => {
		loadPage("Main Project/home");

		// Verify workflow steps displayed in the home page, without having set the parent pages yet.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["The First Step", "Step 2", "Step 3", "Step 4"]);

		// Create the valid sublevel steps (also adding a 'Step 5' along the way)
		findWidget("CreateMixedFontLevels").click();

		loadPage("Main Project/home");

		// Click on main level 'step 4', to check whether we are indeed taken to Page 4.
		findWidget("home")
			.getWorkflowItems()
			.clickOnWorkflowStep("Step4");

		findWidget("ValueLine")
			.getCountOfPoints()
			.should.eql(3);

		// Click on sublevel 'step 5', to check whether we are indeed taken to Page 5.
		findWidget("page4")
			.getWorkflowItems()
			.clickOnWorkflowStep("Step5");

		findWidget("TheTable")
			.getCell(2, 0)
			.getValue()
			.should.eql("9.00");
	}
);
