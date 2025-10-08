/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Validate item action with procedure action type as upload", () => {
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
		.getItemActionDetails(1)
		.click();

	findWidget("carsScalar_2")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActionDetails(1)
		.getDownloadedFile()
		.should.include.something.like({
			filename: "TheUploadedFile1.jpg",
			size: 144432,
			contents: "<binary>",
		});
});
