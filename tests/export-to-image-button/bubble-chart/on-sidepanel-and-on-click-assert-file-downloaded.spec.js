/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bubble Chart widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Open Sidepanel tab with Bubble Chart
		findWidget("bubble_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bubble Chart");

		// Hover the title of the Bubble Chart widget.
		findWidget("SP_BubbleChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_BubbleChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "SP Bubble Chart.png",
			});
	}
);
