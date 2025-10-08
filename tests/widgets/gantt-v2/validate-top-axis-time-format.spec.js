/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario("Validate start time displayed in top x axis", () => {
	loadPage("Main Project/DataValidationsPage");

	findWidget("DataValidationGanttChart")
		.getFirstTopXAxisLabel()
		.should.be.equal("Sat 00:00");

	findWidget("DataValidationList").setValue("ViewPortBeginDateTime", "2025-09-13 00:00:00");

	findWidget("DataValidationGanttChart")
		.getFirstTopXAxisLabel()
		.should.be.equal("Sat 00:00");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);

	findWidget("DataValidationList").setValue("ViewPortBeginDateTime", "2025-09-13 05:00:00");

	findWidget("DataValidationGanttChart")
		.getFirstTopXAxisLabel()
		.should.be.equal("Sat 08:00");

	findWidget("DataValidationGanttChart")
		.getNoOfJobs()
		.should.be.equal(35);
});
