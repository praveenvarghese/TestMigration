/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Validate item action with procedure action type as upload", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	// Open Sidepanel tab and assert Item Action for upload and download entries are updated
	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.openSidepanelTab("Bar On Sidepanel");

	// Initate download ItemAction on a bar - Bar chart widget
	// Right click on a Bar element
	findWidget("cars Bar Production_2")
		.findBar("Cars,Model-2,2022")
		.rightClick(0, 5);

	// Click on the item action
	findWidget("cars Bar Production_2")
		.getItemActions()
		.getItemActionDetails(1)
		.click();

	// Right click on a Bar element
	findWidget("cars Bar Production_2")
		.findBar("Cars,Model-2,2022")
		.rightClick(0, 5);

	//Validate file is downloaded from - Bar chart widget
	findWidget("cars Bar Production_2")
		.getItemActions()
		.getItemActionDetails(1)
		.getDownloadedFile()
		.should.include.something.like({
			filename: "TheUploadedFile1.jpg",
			size: 144432,
			contents: "<binary>",
		});

	// Open Sidepanel tab and assert Item Action for upload and download entries are updated
	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.openSidepanelTab("Scalar On-Sidepanel");
});
