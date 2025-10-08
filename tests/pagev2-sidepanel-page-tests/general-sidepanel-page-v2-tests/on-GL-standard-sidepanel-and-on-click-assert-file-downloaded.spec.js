/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"For a Table widget on a GL standard sidepanel, click on 'Download Image - PNG' button and downlaod csv and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Impact Score");

		// Hover the title of the Table widget.
		findWidget("tableStandard").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("tableStandard")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "table.png",
			});

		findWidget("tableStandard")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like([
				{
					filename: "tableStandard.csv",
					size: 571,
				},
			]);
	}
);
