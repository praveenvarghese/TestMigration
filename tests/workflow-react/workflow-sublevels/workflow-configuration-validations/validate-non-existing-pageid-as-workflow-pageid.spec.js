/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is displayed. if pageid which doesn't exist on webui is configured in workflow as pageid.",
	() => {
		loadPage("Main Project/home");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagefive");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pageone");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagetwo");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagethree");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pageDoeNotExist");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		// Since there are still errors in the configuration of workflow 2, no workflow should be displayed at this point.
		findWidget("pageseven")
			.getWorkflowItems()
			.should.eql([]);

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step F" step has an invalid PageId specified.'
			);
	}
);
