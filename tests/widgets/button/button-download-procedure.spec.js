/*!
 * @AIMMS_FILE=models/UploadDownload/UploadDownload.aimms
 */

scenario("Downloading a file using a procedure behind a button", () => {
	loadPage("Main Project/home");

	findWidget("SW")
		.getValue()
		.should.be.equal("");

	findWidget("DS")
		.getValue()
		.should.be.equal("");

	findWidget("BD").click();

	findWidget("BD")
		.getDownloadedFile()
		.should.include.something.like(
			//{ filename: ".gitkeep", size: 0, contents: "" },
			{ filename: "test456.txt", size: 0, contents: "" }
		);

	findWidget("SW")
		.getValue()
		.should.be.equal("Download File:  test456.txt");

	findWidget("DS")
		.getValue()
		.should.be.equal("Success");
});
