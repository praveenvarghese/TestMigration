/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Gantt Chart after slicing one index to a subset should show the expected data", () => {
	loadPage("Main Project/home");

	findWidget("TheGanttChart")
		.getSlicingOptionEditor()
		.setSlices(
			{
				identifier: "DurationTime",
				slice: [
					{ index: "t", type: "subset", value: "ot" },
					{ index: "m", type: "free", value: "m" },
				],
			},
			{
				identifier: "StartingMoment",
				slice: [
					{ index: "t", type: "subset", value: "ot" },
					{ index: "m", type: "free", value: "m" },
				],
			}
		);

	/* Re-apply the pivoting, as this gets reset sometimes after slicing */
	findWidget("TheGanttChart")
		.dragIndex("m")
		.dropIn("resources");

	/* These 2 tests don't work yet: needs adaptation in the framework. However, I checked it with my eyes and the
		 slicing works OK in this case. */
	findWidget("TheGanttChart")
		.getResources()
		.should.have.numberOfItems(21);

	findWidget("TheGanttChart")
		.findResource(["Task-3", "MachineThree"])
		.getJobs()
		.should.have.numberOfItems(1);
});
