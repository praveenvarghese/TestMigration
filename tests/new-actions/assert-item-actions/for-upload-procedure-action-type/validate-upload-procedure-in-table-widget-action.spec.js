/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify widget actions has provision of doing upload", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	//Assert ItemAction on table widget
	findWidget("Cars Production")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "ItemActionUpload", icon: "aimms-upload", state: "active" },
			{ title: "ItemActionDownload", icon: "aimms-download", state: "active" },
		]);

	//Initate upload ItemAction on a cell - table widget
	findWidget("Cars Production")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(0, "TheUploadedFile0.jpg")
		.click();

	//Verify an info message is reported, and that count of log messages is 1.
	getLogMessage()
		.getCount()
		.should.be.equal(1);

	// Assert an upload response message indicating successful upload
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("Thank you for this beautiful image!");

	// Assert the empty message on above Image widget
	findWidget("Upload File")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Image");

	// Refresh the page
	pageRefresh();

	// Assert the Flag image URL
	findWidget("Upload File")
		.getUrl()
		.should.include(`/app-resources/resources/@lib/MainProject/images/TheUploadedFile0.jpg`);
});
