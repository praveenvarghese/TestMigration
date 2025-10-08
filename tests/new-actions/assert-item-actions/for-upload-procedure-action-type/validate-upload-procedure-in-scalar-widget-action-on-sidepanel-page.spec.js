/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify widget actions has provision of doing upload On Dialog Page", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	// Open Sidepanel tab and assert Item Action for upload and download entries are updated
	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.openSidepanelTab("Scalar On-Sidepanel");

	//Assert ItemAction on table widget
	findWidget("carsScalar_2")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([
			{ title: "ItemActionUpload", icon: "aimms-upload", state: "active" },
			{ title: "ItemActionDownload", icon: "aimms-download", state: "active" },
		]);

	//Initate upload ItemAction on a cell - scalar widget
	findWidget("carsScalar_2")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActionDetails(0, "TheUploadedFile0.jpg")
		.click();

	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.closeSidepanelTab();

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
