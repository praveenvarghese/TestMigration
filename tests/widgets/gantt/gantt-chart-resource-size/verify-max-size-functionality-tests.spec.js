/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Validate Gantt Chart max size when only max height is set ", () => {
	loadPage("Main Project/home");

	//When max height is less than default height
	findWidget("set max height").setValue("5");
	findWidget("TheGanttChart")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);

	//When max height is greater than default height
	findWidget("set max height").setValue("20");
	findWidget("TheGanttChart")
		.areResourcesAllShownAtOrWithinViewportSize()
		.should.be.equal(true);
});
