/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Create new Gantt Chart widget and assert its type and data.", () => {
	loadPage("Main Project/Second Page/All Widgets");

	// Close the Page Manager
	closeAppManager();

	// Create a Gantt Chart widget "SmokeTest_GanttChart"
	createWidget("GanttChart", ["IA_JobStart", "IA_JobDuration"], "SmokeTest_GanttChart", 8, 4);

	// Assert "SmokeTest_GanttChart" is of widget type - Gantt chart
	findWidget("SmokeTest_GanttChart").should.be.a.widgetOfType("ganttchart");

	// Assert the details on Gantt Chart
	findWidget("SmokeTest_GanttChart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify both your reference time and a time resolution."
		);
	findWidget("SmokeTest_GanttChart").emptyWidgetMessageHasIcon("icon-align-left").should.be.true;
});
