/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar Chart widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar Chart Data");

		// Open Sidepanel tab with Bar Charts
		findWidget("bar_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar Chart");

		// Hover the title of the Bar Chart widget.
		findWidget("SP_IA").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_IA")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "barchart.png",
			});
	}
);
