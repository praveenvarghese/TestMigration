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

		findWidget("Workflow Configuration")
			.getCell(5, 1)
			.setValue(" ");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		// Verify the step has icon
		findWidget("pageseven")
			.getWorkflowItems()
			.getStepElement("Step F")
			.hasIcon()
			.should.be.eql("undefined");

		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("home");

		findWidget("Workflow Configuration")
			.getCell(5, 1)
			.setValue("aimms-seven-segment-1");

		// Verify the step has icon
		findWidget("home")
			.getWorkflowItems()
			.getStepElement("Step F")
			.hasIcon()
			.should.be.eql("aimms-seven-segment-1");

		findWidget("Workflow Configuration")
			.getCell(5, 1)
			.setValue("entypo-heart");

		// Verify the step has icon
		findWidget("home")
			.getWorkflowItems()
			.getStepElement("Step F")
			.hasIcon()
			.should.be.eql("entypo-heart");
	}
);
