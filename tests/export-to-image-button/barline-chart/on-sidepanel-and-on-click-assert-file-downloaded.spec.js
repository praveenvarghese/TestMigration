/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar-Line Chart widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Open Sidepanel tab with Bar-Line Chart
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Bar-Line Chart");

		// Hover the title of the Bar-Line Chart widget.
		// Widget has a literal title.
		findWidget("SP_BLC").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_BLC")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Bar Line Chart.png",
			});

		// Hover the title of the Bar-Line Chart widget.
		// Widget has the title coming from an identifier
		findWidget("SP_BLC2").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_BLC2")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title from an Identifier and includes _!@#$%^&_() characters..png",
			});
	}
);
