/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Line Chart widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Line Chart Data");

		// Open Sidepanel tab with Line Charts
		findWidget("line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Line Chart");

		// Hover the title of the Line Chart widget.
		findWidget("SP_LineChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_LineChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "linechart.png",
			});
	}
);
