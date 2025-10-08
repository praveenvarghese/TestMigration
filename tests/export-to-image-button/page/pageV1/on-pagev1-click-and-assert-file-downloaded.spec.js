/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On WebUI page (PageV1), click on 'Download Image - PNG' button and assert the file name being downloaded.",
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

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Second Page");

		// Click on "Export-To-Image" button on the page header
		// Assert the file being downloaded
		getPageHeader()
			.getButtons()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "app (1).png",
			});
	}
);
