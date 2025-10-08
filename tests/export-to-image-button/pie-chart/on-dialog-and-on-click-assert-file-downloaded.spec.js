/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Pie Chart widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Pie Chart Data");

		// Opens the Dialog containing Pie chart widget
		findWidget("Opens Dialog containing PieChart").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further tes execution
		getDialog().should.exist;

		// Hover the title of the Pie Chart widget.
		findWidget("DP_PieChart").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("DP_PieChart")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "piechart.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
