/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Gantt Chart after slicing one index to an element parameter should show the expected data",
	() => {
		loadPage("Main Project/home");

		findWidget("TheGanttChart")
			.getSlicingOptionEditor()
			.setSlices(
				{
					identifier: "DurationTime",
					slice: [
						{ index: "t", type: "element-parameter", value: "SelectedTask" },
						{ index: "m", type: "free", value: "m" },
					],
				},
				{
					identifier: "StartingMoment",
					slice: [
						{ index: "t", type: "element-parameter", value: "SelectedTask" },
						{ index: "m", type: "free", value: "m" },
					],
				}
			);

		/* Re-apply the pivoting, as this gets reset sometimes after slicing */
		findWidget("TheGanttChart")
			.dragIndex("m")
			.dropIn("resources");

		findWidget("TheGanttChart")
			.getResources()
			.should.have.numberOfItems(7);

		findWidget("TheGanttChart")
			.findResource(["MachineFour"])
			.getJobs()
			.should.have.numberOfItems(1);
	}
);
