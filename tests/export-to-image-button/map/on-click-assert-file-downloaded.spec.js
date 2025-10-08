/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For a Map widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/StepsV3/Maps with Tooltip annotations?Download-Image=true");

		// Hover the title of the Map widget.
		findWidget("Map with icons and tooltip annotations").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("Map with icons and tooltip annotations")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Node Icons, Sizes and Tooltip Annotations.png",
			});

		// Maximize another Map widget on the page
		findWidget("Airports").goInFullScreenMode();

		// Hover the title of the Map widget.
		findWidget("Airports").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("Airports")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Size identifier with Tooltip annotations.png",
			});
	}
);
