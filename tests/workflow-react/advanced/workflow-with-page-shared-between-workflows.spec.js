/*!
 * @AIMMS_FILE=models/react-workflow-models/SimpleWorkflowModel With Shared Pages/SimpleWorkflowModel.aimms
 */

scenario(
	"Tests to verify workflow behaviour when a page is shared between multiple workflows",
	() => {
		loadPage("Main Project/home");

		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.shallowDeepEqual(["The First Step", "Step 2", "Step3", "Step4", "Step5"]);

		// Click on the shared workflow item (Step 5 in this case). The workflow should remain to be the same and not switch to the other
		// workflow where Step 5 is used.
		// Skip waiting for page load because the page does not exists
		findWidget("home")
			.getWorkflowItems()
			.getStepElement("Step5")
			.click({ waitForPageLoad: true });

		findWidget("page5")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.shallowDeepEqual(["The First Step", "Step 2", "Step3", "Step4", "Step5"]);

		// Now open one of the pages which are only part of the other workflow (Page 6, in this example)
		openAppManager().navigateToPage("Main Project/Page6");
		closeAppManager();

		// Verify that the other workflow is displayed on this page
		findWidget("page6")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.shallowDeepEqual(["Step5", "Step6", "Step7"]);

		// Now, on the other Workflow panel, click on Step 5 again. The result should be that the 'other' workflow is still being displayed.
		findWidget("page6")
			.getWorkflowItems()
			.getStepElement("Step5")
			.click({ waitForPageLoad: true });

		// For some strange reason, the getWorkflowSteps below also returns the tooltip text of step 5 ("A fiver."). Very strange, but for now,
		// just include it in the expected result. Main point is that Step5/6/7 are found, so we're dealing with the expected workflow.
		findWidget("page5")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.shallowDeepEqual(["Step5", "A fiver.", "Step6", "Step7"]);

		// To make the circle round, navigate back to the home page and see that the original workflow is displayed again.
		// The navigation is purposefully done by using the Menu, to see that that also works in combination with switching
		// workflows.
		getPageMenu().navigateToPage("Main Project/home");

		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.shallowDeepEqual(["The First Step", "Step 2", "Step3", "Step4", "Step5"]);
	}
);
