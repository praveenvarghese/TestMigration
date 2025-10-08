/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Validate Item Action when Gantt Chart resource sizes are changed ", () => {
	loadPage("Main Project/Timeline");

	findWidget("Ganttchart Timeline")
		.findResource(["MachineFour"])
		.findJob("Task-2")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	findWidget("Ganttchart Timeline")
		.findResource(["MachineFour"])
		.findJob("Task-2")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	//When max height is less than min height and default height
	findWidget("min").setValue("20");
	findWidget("max").setValue("5");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);

	findWidget("Ganttchart Timeline")
		.findResource(["MachineFour"])
		.findJob("Task-2")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	//When max height is greater than min height but less than default height
	findWidget("min").setValue("10");
	findWidget("max").setValue("12");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);

	findWidget("Ganttchart Timeline")
		.findResource(["MachineFour"])
		.findJob("Task-2")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);
});
