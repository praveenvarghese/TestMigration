/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that, if pageid which doesn't exist on webui is configured in workflow.",
	() => {
		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagedoesntexist");

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

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step B" step has an invalid PageId specified.'
			);
	}
);
