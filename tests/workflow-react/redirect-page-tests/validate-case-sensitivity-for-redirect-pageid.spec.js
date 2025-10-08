/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that, case sensitivity for redirect pageid  in workflow configuration.",
	() => {
		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("home");

		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pageone");

		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagetwo");

		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagethree");

		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pagesix");

		findWidget("Workflow Configuration")
			.getCell(5, 6)
			.setValue("PageFOUR");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step F" step has an invalid RedirectPageId specified.'
			);

		findWidget("Workflow Configuration")
			.getCell(0, 6)
			.setValue("PAGEFIVE");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step A" step has an invalid RedirectPageId specified. & 1 more error.'
			);

		loadPage("Main Project/PageSeven");

		findWidget("pageseven")
			.getWorkflowItems()
			.should.eql([]);
	}
);
