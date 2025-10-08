/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Gantt Chart after slicing two indices to a subset should show the expected data", () => {
	loadPage("Main Project/home");

	findWidget("TheGanttChart")
		.getSlicingOptionEditor()
		.setSlices(
			{
				identifier: "DurationTime",
				slice: [
					{ index: "t", type: "subset", value: "ot" },
					{ index: "m", type: "subset", value: "em" },
				],
			},
			{
				identifier: "StartingMoment",
				slice: [
					{ index: "t", type: "subset", value: "ot" },
					{ index: "m", type: "subset", value: "em" },
				],
			}
		);

	/* Re-apply the pivoting, as this gets reset sometimes after slicing */
	findWidget("TheGanttChart")
		.dragIndex("em")
		.dropIn("resources");

	findWidget("TheGanttChart")
		.dragIndex("ot")
		.dropIn("jobs");

	findWidget("TheGanttChart")
		.getResources()
		.should.have.numberOfItems(3);

	findWidget("TheGanttChart")
		.findResource(["MachineFour"])
		.getJobs()
		.should.have.numberOfItems(3);
});
