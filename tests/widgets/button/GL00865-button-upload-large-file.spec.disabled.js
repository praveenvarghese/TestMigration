/*!
 * @AIMMS_FILE=models/UploadDownload/UploadDownload.aimms
 */

scenario("Downloading a file using a procedure behind a button", () => {
	loadPage("Main Project/home");

	findWidget("UC")
		.getValue()
		.should.be.equal("0.00");

	findWidget("BU").uploadFile("AIMMS.exe");

	findWidget("US")
		.getValue()
		.should.be.equal("Uploading...");

	findWidget("UC")
		.getValue()
		.should.be.equal("1.00");

	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("RequestFileUpload:The file size exceeds the maximum limit of 128MB");
});
