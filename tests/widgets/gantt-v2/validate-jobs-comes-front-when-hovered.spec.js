/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario("By Hovering on the Job which is at background will come to front", () => {
	loadPage("Main Project/DataValidationsPage");

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-5, MachineThree)");

	findWidget("DataValidationGanttChart")
		.findResource("Task-2")
		.findJob("MachineThree")
		.hover();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-2, MachineThree)");

	findWidget("DataValidationGanttChart")
		.findResource("Task-1")
		.findJob("MachineTwo")
		.hover();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-1, MachineTwo)");

	findWidget("DataValidationGanttChart").goInFullScreenMode();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-5, MachineThree)");

	findWidget("DataValidationGanttChart")
		.findResource("Task-2")
		.findJob("MachineThree")
		.hover();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-2, MachineThree)");

	findWidget("DataValidationGanttChart")
		.findResource("Task-1")
		.findJob("MachineTwo")
		.hover();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-1, MachineTwo)");

	findWidget("DataValidationGanttChart").exitFullScreenMode();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-5, MachineThree)");

	findWidget("DataValidationGanttChart")
		.findResource("Task-2")
		.findJob("MachineThree")
		.hover();

	findWidget("DataValidationGanttChart")
		.getHighlightedJob()
		.should.eql("(Task-2, MachineThree)");
});
