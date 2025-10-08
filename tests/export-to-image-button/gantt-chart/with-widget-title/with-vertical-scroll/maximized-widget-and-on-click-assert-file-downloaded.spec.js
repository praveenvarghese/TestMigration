/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"For a maximized Gantt Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/resizing");

		findWidget("set min height_1").setValue("100");

		// Maximize the Gantt chart widget
		findWidget("GanttWithSlicedData").goInFullScreenMode();

		// Hover the title of the Gantt Chart widget.
		findWidget("GanttWithSlicedData").movePointerToWidget(500, 150);

		// Click on the "Download Image - PNG" button and assert the file being downloaded
		findWidget("GanttWithSlicedData")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Resources Allocation - 2021.png",
			});
	}
);
