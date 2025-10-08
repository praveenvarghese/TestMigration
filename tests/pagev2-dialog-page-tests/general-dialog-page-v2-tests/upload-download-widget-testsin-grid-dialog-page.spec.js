/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("When uploading and downloading a file in GL dialog page", () => {
	loadPage("Main Project/glDIalogPage");

	findWidget("UploadTheFile_1").uploadFile("FileToUpload.jpg");

	findWidget("DownloadUploaded_1")
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "FileToUpload.jpg",
			size: 192489,
			contents: "<binary>",
		});
});
