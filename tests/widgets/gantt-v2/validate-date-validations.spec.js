/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario("Validate date validations in Gantt Chart V2", () => {
	loadPage("Main Project/DataValidationsPage");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);

	findWidget("DataValidationList").setValue("ReferenceDateTime", "2025-09-16 05:30");

	findWidget("DataValidationGanttChart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify a valid date and time for your reference time. Accepted formats: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss."
		);

	findWidget("DataValidationList").setValue("ReferenceDateTime", "2025-09-16 05:30:00");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);

	findWidget("DataValidationList").setValue("ViewPortBeginDateTime", "2025/09/13");

	findWidget("DataValidationGanttChart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify a valid ViewPort Start time. Accepted formats: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss."
		);

	findWidget("DataValidationList").setValue("ViewPortBeginDateTime", "2025-09-13");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);

	findWidget("DataValidationList").setValue("ViewPortEndDateTime", "2025-09-19 ");

	findWidget("DataValidationGanttChart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify a valid ViewPort End time. Accepted formats: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss."
		);

	findWidget("DataValidationList").setValue("ViewPortEndDateTime", "2025-09-19");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);
});
