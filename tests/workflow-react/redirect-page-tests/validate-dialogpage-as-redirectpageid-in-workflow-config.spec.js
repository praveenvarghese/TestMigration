/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is displayed. if redirectpageid type is dialog pagetype is configured in workflow.",
	() => {
		loadPage("Main Project/home");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("home");

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
			.setValue("pagesix");

		// Since there are no errors in the configuration of workflow 2, workflow should be displayed at this point.
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "Step B", "Step C", "Step D", "Step E", "Step F"]);

		// Entering a Grid type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 6)
			.setValue("dialogpage");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step F" step has an invalid RedirectPageId specified.'
			);

		findWidget("home")
			.getWorkflowItems()
			.should.eql([]);

		// Entering a Grid type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 6)
			.setValue("     ");

		// Entering a classic type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 6)
			.setValue("classicdialog");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step A" step has an invalid RedirectPageId specified.'
			);

		// Entering a classic type dialog PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 6)
			.setValue("home");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step A" step has an identical entry specified for both PageID and RedirectPageId. This is not permitted.'
			);

		findWidget("home")
			.getWorkflowItems()
			.should.eql([]);
	}
);
