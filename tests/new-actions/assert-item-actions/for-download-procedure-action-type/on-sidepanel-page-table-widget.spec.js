/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Validate item action with procedure action type as upload", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	// Open Sidepanel tab and assert Item Action for upload and download entries are updated
	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.openSidepanelTab("Table On-Sidepanel");

	//Assert ItemAction on table widget
	findWidget("Cars Production_2")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "ItemActionUpload", icon: "aimms-upload", state: "active" },
			{ title: "ItemActionDownload", icon: "aimms-download", state: "active" },
		]);

	//Initate download ItemAction on a cell - table widget
	findWidget("Cars Production_2")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(1)
		.click();

	//Validate file is downloaded from - table widget
	findWidget("Cars Production_2")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(1)
		.getDownloadedFile()
		.should.include.something.like({
			filename: "TheUploadedFile1.jpg",
			size: 144432,
			contents: "<binary>",
		});
});
