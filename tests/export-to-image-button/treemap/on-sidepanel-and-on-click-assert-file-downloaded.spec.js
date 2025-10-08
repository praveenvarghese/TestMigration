/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Tree Map widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Tree Map Data");

		// Open Sidepanel tab with Line Charts
		findWidget("tree_map_data")
			.getSidepanels()
			.openSidepanelTab("Tree Maps");

		// Hover the title of the Tree Map widget.
		findWidget("SP_TM1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_TM1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "treemap.png",
			});
	}
);
