/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar-Line Chart widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Opens the Dialog containing Bar-Line chart widget
		findWidget("Opens Dialog").click();

		// Hover the title of the Bar-Line Chart widget.
		// Widget has a literal title.
		findWidget("DP_BLC1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_BLC1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Bar-Line Chart 1.png",
			});

		// Hover the title of the Bar-Line Chart widget.
		// Widget has the title coming from an identifier
		findWidget("DP_BLC2").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_BLC2")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title from an Identifier and includes _!@#$%^&_() characters..png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
