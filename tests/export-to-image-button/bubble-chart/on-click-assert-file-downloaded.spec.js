/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bubble Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bubble Chart Data");

		// Hover the title of the Bubble Chart widget.
		findWidget("BubbleChart_1_1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("BubbleChart_1_1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "BubbleChart_1_1.png",
			});

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/home");

		// Get data on Bubble chart
		findWidget("PlaneSelectionBox").selectAll();

		// Maximize the Bubble chart
		findWidget("AircraftData").goInFullScreenMode();

		// Hover the title of the Bubble Chart widget.
		findWidget("AircraftData").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("AircraftData")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Aircraft Data.png",
			});
	}
);
