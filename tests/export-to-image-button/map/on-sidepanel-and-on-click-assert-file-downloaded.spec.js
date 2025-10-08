/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For a Map widget on a Sidepanel Tab, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage(
			"Main Project/StepsV3/2 - Single node layer, single arc layer?Download-Image=true"
		);

		// Open Sidepanel tab with Maps
		findWidget("2_-_single_node_layer_single_arc_layer_1")
			.getSidepanels()
			.openSidepanelTab("Cities Nodes Information");

		// Hover the title of the Map widget.
		findWidget("SP_Map1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_Map1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title comes from AIMMS.png",
			});
	}
);
