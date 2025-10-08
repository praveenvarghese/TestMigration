/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that, case sensitivity for parent pageid  in workflow configuration.",
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
			.getCell(5, 7)
			.setValue("HOME");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step F" step has an invalid ParentPageId specified.'
			);

		findWidget("Workflow Configuration")
			.getCell(0, 7)
			.setValue("pagetwO");

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "e2e Workflow Title" workflow, the "Step A" step has an invalid ParentPageId specified. & 1 more error.'
			);

		loadPage("Main Project/home");

		findWidget("home")
			.getWorkflowItems()
			.should.eql([]);
	}
);
