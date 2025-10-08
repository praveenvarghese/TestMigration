/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Gantt Chart after slicing two indices to a fixed element should show the expected data",
	() => {
		loadPage("Main Project/home");

		findWidget("TheGanttChart")
			.getSlicingOptionEditor()
			.setSlices(
				{
					identifier: "DurationTime",
					slice: [
						{ index: "t", type: "element-parameter", value: "SelectedTask" },
						{ index: "m", type: "fixed-element", value: "MachineThree" },
					],
				},
				{
					identifier: "StartingMoment",
					slice: [
						{ index: "t", type: "element-parameter", value: "SelectedTask" },
						{ index: "m", type: "fixed-element", value: "MachineThree" },
					],
				}
			);

		findWidget("TheGanttChart")
			.getResources()
			.should.have.numberOfItems(1);
	}
);
