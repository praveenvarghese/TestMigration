/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is displayed if duplicate pageid is configured in workflow.",
	() => {
		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagesix");

		findWidget("Workflow Configuration")
			.getCell(1, 0)
			.setValue(" ");

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
			.setValue("pagefour");

		//Empty Step name
		findWidget("Workflow Configuration")
			.getCell(5, 0)
			.setValue(" ");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		getLogMessage().closeList();

		// Verify the result for parent and step with no name
		findWidget("pageseven")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "", "Step C", "Step D", "Step E", ""]);

		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("home");

		//Empty Step name
		findWidget("Workflow Configuration")
			.getCell(5, 0)
			.setValue("Update Step Name");

		// Verify the result for parent and step with no name
		findWidget("home")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "", "Step C", "Step D", "Step E", "Update Step Name"]);
	}
);
