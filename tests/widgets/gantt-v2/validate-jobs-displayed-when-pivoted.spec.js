/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario("By changing pivoting settings,Validate that the jobs displayed are correct.", () => {
	loadPage("Main Project/GanttV2Page");

	findWidget("FIrstGanttV2")
		.findResource("MachineOne")
		.getJobs()
		.should.have.numberOfItems(5);

	findWidget("FIrstGanttV2")
		.dragIndex("m")
		.dropIn("jobs");

	findWidget("FIrstGanttV2")
		.findResource(`-`)
		.getJobs()
		.should.have.numberOfItems(35);

	findWidget("FIrstGanttV2")
		.dragIndex("t")
		.dropIn("resources");

	findWidget("FIrstGanttV2")
		.findResource(`Task-1`)
		.getJobs()
		.should.have.numberOfItems(7);

	findWidget("FIrstGanttV2")
		.dragIndex("m")
		.dropIn("resources");

	findWidget("FIrstGanttV2")
		.findResource("(Task-1, MachineOne)")
		.getJobs()
		.should.have.numberOfItems(1);

	findWidget("FIrstGanttV2")
		.dragIndex("m")
		.dropIn("totals");

	findWidget("FIrstGanttV2")
		.findResource(`Task-1`)
		.getJobs()
		.should.have.numberOfItems(1);
});
