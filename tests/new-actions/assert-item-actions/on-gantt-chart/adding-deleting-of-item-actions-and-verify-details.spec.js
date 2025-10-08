/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario("Configure context menu to gantt chart and validate on right click its opened.", () => {
	loadPage("Main Project/home");

	// Disable default browser context menu on the page
	findWidget("home").unBindBrowserContextmenu();

	/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

	// Right click on a Job
	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	//Configure item action and validate its displayed.
	findWidget("TheGanttChart")
		.openWidgetExtensionsOptionEditor()
		.setWidgetExtensions([
			{
				name: "Item Actions",
				value: "GanttItemActions",
			},
		]);

	findWidget("home").closeOptionDialog();

	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	// Assert there are 3 item actions. Assert the details.
	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.getData()
		.should.have.numberOfItems.equal(2);

	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	//Navigate to diffrent page and validate item action is displayed.
	openAppManager().navigateToPage("Main Project/resizing");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	//Configure item action and validate its displayed
	findWidget("TheGanttChart")
		.openWidgetExtensionsOptionEditor()
		.clearWidgetExtensions([
			{
				name: "Item Actions",
			},
		]);

	// Right click on a Job
	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	openAppManager().navigateToPage("Main Project/resizing");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.findJob("Task-5")
		.rightClick()
		.isItemActionDisplayed().should.be.false;
});
