/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For a Map widget with no title set, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage(
			"Main Project/StepsV3/2 - Single node layer, single arc layer?Download-Image=true"
		);

		// Hover the header section of the Map widget.
		findWidget("anothermap").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("anothermap")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "map.png",
			});
	}
);
