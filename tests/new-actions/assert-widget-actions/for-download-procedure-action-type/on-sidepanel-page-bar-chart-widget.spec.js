/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Validate item action with procedure action type as upload", () => {
	loadPage("Main Project/Widget-Item-Actions-Upload-Download");

	// Open Sidepanel tab and assert Item Action for upload and download entries are updated
	findWidget("widget-item-actions-upload-download")
		.getSidepanels()
		.openSidepanelTab("Bar On Sidepanel");

	// Initate download widgetAction on a bar - Bar chart widget
	// Right click on a Bar element
	findWidget("cars Bar Production_2")
		.getWidgetActionMenuButton()
		.click();

	// Click on the widgetAction
	findWidget("cars Bar Production_2")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
			{ title: "WidgetUpload", icon: "aimms-upload", state: "active" },
			{ title: "WidgetDownload", icon: "aimms-download", state: "active" },
		]);

	// Right click on a Bar element
	findWidget("cars Bar Production_2")
		.mouseHover()
		.getProceduralDownloadButton()
		.click()
		.getDownloadedFile()
		.should.eql([{ filename: "TheUploadedFile1.jpg", size: 144432, contents: "<binary>" }]);
});
