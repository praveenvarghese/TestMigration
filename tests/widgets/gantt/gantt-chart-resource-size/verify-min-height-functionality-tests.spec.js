/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Validate Gantt Chart min size when only min height is set ", () => {
	loadPage("Main Project/resizing");

	//When min height is less than default height
	findWidget("set min height_1").setValue("20");
	findWidget("GanttWithSlicedData")
		.getNoOfVisibleResources()
		.should.have.numberOfItems(2);

	//When min height is greater than default height
	findWidget("set min height_1").setValue("65");
	findWidget("GanttWithSlicedData")
		.getNoOfVisibleResources()
		.should.have.numberOfItems(1);
});
