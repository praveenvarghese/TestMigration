/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("GL1757 - Uploading an empty file gave a 'Path not found' error message.", () => {
	loadPage("Main Project/THird Page");

	// Do the upload
	findWidget("UploadTheFile").uploadFile("EmptyPic.jpg");

	// Check that indeed a file of 0 bytes has been uploaded (by downloading it)
	findWidget("DownloadUploaded")
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "EmptyPic.jpg",
			size: 0,
			contents: "",
		});

	// Verify that no
});
