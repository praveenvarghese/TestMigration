/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"For a Table widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Filters");

		// Opens the Dialog containing Table widget
		findWidget("Opens Dialog").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Table widget.
		findWidget("DP_Table").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_Table")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "DP_Table.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
