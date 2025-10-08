/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario(
	"Validate start and end View port behavior effect on jobs displayed and also x axis displayed",
	() => {
		loadPage("Main Project/DataValidationsPage");

		findWidget("DataValidationGanttChart")
			.getBottomXAxisElements()
			.should.be.equal("Sat Sep 13 2025,Fri Sep 19 2025");

		findWidget("DataValidationList").setValue("ViewPortEndDateTime", "2025-09-13");

		findWidget("DataValidationGanttChart")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal(
				"Empty ganttchartPlease make sure that the start of your viewport is earlier than the end of your viewport."
			);

		findWidget("DataValidationList").setValue("ViewPortEndDateTime", "2025-09-14");

		findWidget("DataValidationGanttChart")
			.getVisibleNoOfJobsInViewPort()
			.should.be.equal(0);

		findWidget("DataValidationGanttChart")
			.getBottomXAxisElements()
			.should.be.equal("Sat Sep 13 2025,Sun Sep 14 2025");

		findWidget("DataValidationList").setValue("ViewPortEndDateTime", "2025-09-13");

		findWidget("DataValidationGanttChart")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal(
				"Empty ganttchartPlease make sure that the start of your viewport is earlier than the end of your viewport."
			);
	}
);
