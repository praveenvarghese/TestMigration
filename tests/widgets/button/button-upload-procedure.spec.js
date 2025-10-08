/*!
 * @AIMMS_FILE=models/UploadDownload/UploadDownload.aimms
 */

scenario("Downloading a file using a procedure behind a button", () => {
	loadPage("Main Project/home");

	findWidget("UC")
		.getValue()
		.should.be.equal("0.00");

	findWidget("BU").uploadFile("test123.txt");

	findWidget("US")
		.getValue()
		.should.be.equal("Success");

	findWidget("UC")
		.getValue()
		.should.be.equal("1.00");
});
