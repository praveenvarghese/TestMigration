/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Gantt Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Gantt Page");

		// Hover the title of the Gantt Chart widget.
		findWidget("The Gantt Chart").movePointerToWidget(500, 150);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("The Gantt Chart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Gantt Chart.png",
			});
	}
);
