/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Line Chart widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Line Chart Data");

		//Unfold the Secondary page actions and click on action that loads updated Item actions data for Line Chart
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();

		// Right click on a Line element of "Scrum Master's - Widget Info " Chart
		findWidget("LineChart_1_1")
			.findBar("Table,IA_Copy_JobStart")
			.rightClick();

		// Click on the item action
		findWidget("LineChart_1_1")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Line Chart widget.
		findWidget("DP_LineChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_LineChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "LineChart.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
