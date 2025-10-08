/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"For a Table widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Filters");

		// Open Sidepanel tab with Table widgets
		findWidget("filters_1")
			.getSidepanels()
			.openSidepanelTab("More Info");

		// Hover the title of the Table widget.
		findWidget("Authors").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("Authors")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Authors.png",
			});

		// Hover the title of another Table widget.
		findWidget("SalesData").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SalesData")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "undefined.png",
			});
	}
);
