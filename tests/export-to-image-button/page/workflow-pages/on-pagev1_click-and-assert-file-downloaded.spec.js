/*!
 * @AIMMS_FILE=models/PageV2/GridPageRedirect/GridPageRedirect.aimms
 */

scenario(
	"On PageV2 Classic layout WebUI page, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/home/Page 2");

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
