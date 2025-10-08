/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Test to verify that, shared pageid in different workflow configuration doesn't throw any configuration error.",
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

		//WorkFlow 2

		//Step steppagestate
		findWidget("Workflow Configuration 2").setSelection(0, 4, 4, 4);

		findWidget("Workflow Configuration 2")
			.pressKeys("Active")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		//Step Name - Display Text
		findWidget("Workflow Configuration 2")
			.getCell(0, 0)
			.setValue("Step 1");

		findWidget("Workflow Configuration 2")
			.getCell(1, 0)
			.setValue("Step 2");

		findWidget("Workflow Configuration 2")
			.getCell(2, 0)
			.setValue("Step 3");

		findWidget("Workflow Configuration 2")
			.getCell(3, 0)
			.setValue("Step 4");

		findWidget("Workflow Configuration 2")
			.getCell(4, 0)
			.setValue("Step 5");

		//Step Icon - Display Icon
		findWidget("Workflow Configuration 2")
			.getCell(0, 1)
			.setValue("aimms-home");

		findWidget("Workflow Configuration 2")
			.getCell(1, 1)
			.setValue("aimms-disk");

		findWidget("Workflow Configuration 2")
			.getCell(2, 1)
			.setValue("aimms-cross");

		findWidget("Workflow Configuration 2")
			.getCell(3, 1)
			.setValue("aimms-pen");

		findWidget("Workflow Configuration 2")
			.getCell(4, 1)
			.setValue("aimms-pencil");

		//Step pageID
		findWidget("Workflow Configuration 2")
			.getCell(0, 2)
			.setValue("home");

		findWidget("Workflow Configuration 2")
			.getCell(1, 2)
			.setValue("pagefour");

		findWidget("Workflow Configuration 2")
			.getCell(2, 2)
			.setValue("pagefive");

		findWidget("Workflow Configuration 2")
			.getCell(3, 2)
			.setValue("pageeight");

		findWidget("Workflow Configuration 2")
			.getCell(4, 2)
			.setValue("pagesix");

		loadPage("Main Project/PageSeven");

		findWidget("pageseven")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "Step B", "Step C", "Step D", "Step E", "Step F"]);

		loadPage("Main Project/PageEight");

		findWidget("pageeight")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]);
	}
);
