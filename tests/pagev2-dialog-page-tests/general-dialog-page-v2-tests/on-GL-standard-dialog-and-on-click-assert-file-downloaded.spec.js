/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"For a Table widget on a GL Standard Dialog, click on 'Download Image - PNG' button and downlaod csv and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/S&OP Review");

		// Opens the Dialog containing Table widget
		findWidget("openDialogPage").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Table widget.
		findWidget("testTable").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("testTable")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "table.png",
			});

		findWidget("testTable")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like([
				{
					filename: "testTable.csv",
					size: 91,
				},
			]);

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
