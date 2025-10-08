/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bubble Chart widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Opens the Dialog containing Bubble chart widget
		findWidget("Open Dialog").click();

		// Hover the title of the Bubble Chart widget.
		findWidget("DP_BubbleChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_BubbleChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "DP Bubble Chart.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
