/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @DURATION=medium
 */

scenario("Validate Gantt Chart resource size when both max and min height is set ", () => {
	loadPage("Main Project/Timeline");

	//When max height is less than min height and default height
	findWidget("min").setValue("20");
	findWidget("max").setValue("5");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);

	//When max height is greater than min height but less than default height
	findWidget("min").setValue("10");
	findWidget("max").setValue("12");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);

	//When max height is greater than min height and default height
	findWidget("min").setValue("10");
	findWidget("max").setValue("20");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);
	findWidget("Ganttchart Timeline")
		.getNoOfVisibleResources()
		.should.have.numberOfItems(7);

	//When min height is greater than max height and default height
	findWidget("min").setValue("30");
	findWidget("max").setValue("28");
	findWidget("Ganttchart Timeline")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);
	findWidget("Ganttchart Timeline")
		.getNoOfVisibleResources()
		.should.have.numberOfItems(7);

	//When min height is less than max height and greater than default height
	findWidget("min").setValue("30");
	findWidget("max").setValue("32");
	findWidget("Ganttchart Timeline")
		.getNoOfVisibleResources()
		.should.have.numberOfItems(3);
});
