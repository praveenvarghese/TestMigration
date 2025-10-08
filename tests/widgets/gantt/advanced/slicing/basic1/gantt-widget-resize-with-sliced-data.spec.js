/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Gantt Chart should have resources and jobs and should show message if viewport is small",
	() => {
		loadPage("Main Project/resizing");

		findWidget("GanttWithSlicedData")
			.getResources()
			.should.have.numberOfItems(2);

		findWidget("GanttWithSlicedData")
			.findResource(["Lots-1"])
			.getJobs()
			.should.have.numberOfItems(15);
	}
);
