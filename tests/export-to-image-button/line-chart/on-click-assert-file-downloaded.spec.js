/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Line Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Line Chart Data");

		// Hover the title of the Line Chart widget.
		findWidget("LineChart_1_1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("LineChart_1_1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Scrum Master - Widget Info.png",
			});

		// Maximize the Line chart
		findWidget("LineChart_1_2").goInFullScreenMode();

		// Hover the title of the Line Chart widget.
		findWidget("LineChart_1_2").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("LineChart_1_2")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title from an Identifier and includes _!@#$%^&_() characters..png",
			});
	}
);
