/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar Chart widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

		//Unfold the Secondary page actions and click on action that loads updated Item actions data for Bar Chart
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("bar_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2HamburgerButton()
			.click();

		// Right click on a Bar element of "Scrum Master's - Widget Info " Chart
		findWidget("BarChart_1_1")
			.findBar("Bar Chart,IA_JobStart")
			.rightClick();

		// Click on the item action
		findWidget("BarChart_1_1")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Bar Chart widget.
		findWidget("DP_BarChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_BarChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "BarChart.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
