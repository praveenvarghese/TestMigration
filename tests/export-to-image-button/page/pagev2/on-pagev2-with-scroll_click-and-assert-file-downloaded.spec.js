/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On PageV2 with scrolls page, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/home");

		// Click on "Export-To-Image" button on the page header
		// Assert the file being downloaded
		getPageHeader()
			.getButtons()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "app.png",
			});
	}
);
