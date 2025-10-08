/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Gantt Chart element text test", () => {
	loadPage("Main Project/home");

	findWidget("TheGanttChart")
		.findResource(["MachineOne"])
		.getJobs()
		.should.have.numberOfItems(5);

	findWidget("TheGanttChart")
		.getTitleToolTip()
		.should.be.equal("Task and Machine Data");
});
