/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("When uploading and downloading a file", () => {
	loadPage("Main Project/THird Page");

	findWidget("UploadTheFile").uploadFile("FileToUpload.jpg");

	findWidget("DownloadUploaded")
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "FileToUpload.jpg",
			size: 192489,
			contents: "<binary>",
		});
});
