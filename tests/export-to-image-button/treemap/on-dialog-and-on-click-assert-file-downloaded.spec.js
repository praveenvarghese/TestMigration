/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Tree Map widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Tree Map Data");

		// Opens the Dialog containing Tree Map widget
		findWidget("Opens Dialog containing TreeMap").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Tree Map widget.
		findWidget("DP_TM1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_TM1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "DP Tree Map.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
