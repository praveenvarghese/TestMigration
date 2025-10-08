/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Table widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/home");

		// Hover the title of the widget.
		findWidget("DailyPassengers").movePointerToWidget(70, 20);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DailyPassengers")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Daily Number Of Passengers.png",
			});
	}
);
