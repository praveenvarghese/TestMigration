/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario("Validate default tooltip in Gantt Chart V2", () => {
	loadPage("Main Project/GanttV2Page");

	findWidget("FIrstGanttV2")
		.findResource("MachineOne")
		.findJob("Task-5")
		.hover(15, 2);

	findWidget("FIrstGanttV2")
		.getTooltip()
		.should.equal(
			"(MachineOne, Task-5) Duration: 7 hours​Start: 06:00 Wed May 17, 2017, End: 13:00 Wed May 17, 2017"
		);

	findWidget("FIrstGanttV2")
		.findResource("MachineTwo")
		.findJob("Task-5")
		.hover(15, 2);

	findWidget("FIrstGanttV2")
		.getTooltip()
		.should.equal(
			"(MachineTwo, Task-5) Duration: 1 hour​Start: 07:00 Wed May 17, 2017, End: 08:00 Wed May 17, 2017"
		);

	findWidget("FIrstGanttV2").goInFullScreenMode();

	findWidget("FIrstGanttV2")
		.findResource("MachineOne")
		.findJob("Task-5")
		.hover(15, 2);

	findWidget("FIrstGanttV2")
		.getTooltip()
		.should.equal(
			"(MachineOne, Task-5) Duration: 7 hours​Start: 06:00 Wed May 17, 2017, End: 13:00 Wed May 17, 2017"
		);

	findWidget("FIrstGanttV2")
		.findResource("MachineTwo")
		.findJob("Task-5")
		.hover(15, 2);

	findWidget("FIrstGanttV2")
		.getTooltip()
		.should.equal(
			"(MachineTwo, Task-5) Duration: 1 hour​Start: 07:00 Wed May 17, 2017, End: 08:00 Wed May 17, 2017"
		);

	findWidget("FIrstGanttV2").exitFullScreenMode();

	findWidget("FIrstGanttV2")
		.findResource("MachineTwo")
		.findJob("Task-5")
		.hover(15, 2);

	findWidget("FIrstGanttV2")
		.getTooltip()
		.should.equal(
			"(MachineTwo, Task-5) Duration: 1 hour​Start: 07:00 Wed May 17, 2017, End: 08:00 Wed May 17, 2017"
		);
});
