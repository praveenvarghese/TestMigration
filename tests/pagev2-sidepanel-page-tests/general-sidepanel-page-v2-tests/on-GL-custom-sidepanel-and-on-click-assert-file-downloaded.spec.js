/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"For a Table widget on a GL Custom sidepanel, click on 'Download Image - PNG' button and downlaod csv and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("WoW Score");

		// Hover the title of the Table widget.
		findWidget("customTable2").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("customTable2")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "table.png",
			});

		findWidget("customTable2")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like([
				{
					filename: "customTable2.csv",
					size: 91,
				},
			]);
	}
);
