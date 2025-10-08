/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Pie Chart widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Pie Chart Data");

		// Open Sidepanel tab with Pie Charts
		findWidget("pie_chart_data")
			.getSidepanels()
			.openSidepanelTab("Pie Chart");

		// Hover the title of the Pie Chart widget.
		findWidget("SP_PieChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_PieChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "piechart.png",
			});
	}
);
