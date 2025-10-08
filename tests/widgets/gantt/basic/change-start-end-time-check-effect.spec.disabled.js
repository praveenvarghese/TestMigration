/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Change start and end dates and validate how the jobs are displayed", () => {
	loadPage("Main Project/TimeZone Tests");

	findWidget("GC_TZ")
		.findResource(["Task-1"])
		.getJobs()
		.should.have.numberOfItems(2);

	findWidget("Gantt Chart Settings").setValue("GC_Viewport_Start", "2050-07-22");

	findWidget("GC_TZ")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Gantt Chart");

	findWidget("Gantt Chart Settings").setValue("GC_Viewport_End", "2050-07-28");

	findWidget("GC_TZ")
		.findResource(["Task-1"])
		.getJobs()
		.should.have.numberOfItems(0);
});
