/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Check the working of the webui_ganttchart_jobs_overload_threshold setting.", () => {
	loadPage("Main Project/OverloadTests");

	// Initially, 100 jobs are displayed. The threshold is set to 1000, so the jobs should display fine.
	findWidget("OverloadGantt")
		.findResource(["01"])
		.findJob("01")
		.getTooltip()
		.should.contain("V: 01, TR: 01");

	// Now make the data exceed 1000 jobs. That should result in a data overload message in the chart.
	findWidget("DataDimensions")
		.getScalarCell("NumberOfVehicles")
		.setValue("40");

	findWidget("DataDimensions")
		.getScalarCell("NumberOfTrips")
		.setValue("30");

	// Verify that the overload message is displayed.
	findWidget("OverloadGantt")
		.getEmptyMessage()
		.should.be.equal(
			"Empty ganttchartData overload. The jobs count exceeds the configured threshold."
		);
});
