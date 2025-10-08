/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Validate item action with procedure action type as upload", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	//Invoke dialog page by clicking on a button
	findWidget("OpenDialog").click();

	//Assert ItemAction on table widget
	findWidget("carsScalar_1")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActions()
		.should.beEqualTo([
			{ title: "ItemActionUpload", icon: "aimms-upload", state: "active" },
			{ title: "ItemActionDownload", icon: "aimms-download", state: "active" },
		]);

	//Initate upload ItemAction on a cell - scalar widget
	findWidget("carsScalar_1")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActionDetails(1)
		.click();

	findWidget("carsScalar_1")
		.getScalarCell()
		.rightClick(0, 0)
		.getItemActionDetails(1)
		.getDownloadedFile()
		.should.include.something.like({
			filename: "TheUploadedFile1.jpg",
			size: 144432,
			contents: "<binary>",
		});

	// Click on OK button of Dialog page
	findWidget("upload-download-dialog").clickDialogPageButton("OK");
});
