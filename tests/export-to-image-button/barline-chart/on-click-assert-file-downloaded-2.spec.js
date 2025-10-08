/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar-Line Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

		// Maximize the Bar-Line chart
		findWidget("Another_BLC1").goInFullScreenMode();

		// Hover the title of the Bar-Line Chart widget.
		// Widget has the title coming from an identifier
		findWidget("Another_BLC1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("Another_BLC1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title from an Identifier and includes _!@#$%^&_() characters..png",
			});

		// Maximize the Bar-Line chart
		findWidget("Another_BLC1").exitFullScreenMode();

		// Hover the title of another Bar-Line Chart widget.
		// Widget has no title
		findWidget("Another_BLC2").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("Another_BLC2")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "barlinechart.png",
			});
	}
);
