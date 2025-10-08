/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("When uploading and downloading a file in GL dialog page", () => {
	loadPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("Upload & Download Widget");

	findWidget("UploadTheFile_2").uploadFile("FileToUpload.jpg");

	findWidget("DownloadUploaded_2")
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "FileToUpload.jpg",
			size: 192489,
			contents: "<binary>",
		});
});
