/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"For a Table widget on a GL Custom Dialog, click on 'Download Image - PNG' button and downlaod csv and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/checkdialogpagev2withwidgets");

		// Opens the Dialog containing Table widget
		findWidget("openCustomPageWithWidgets").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Table widget.
		findWidget("tableWidget").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("tableWidget")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "table.png",
			});

		findWidget("tableWidget")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like([
				{
					filename: "tableWidget.csv",
					size: 84,
				},
			]);

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
