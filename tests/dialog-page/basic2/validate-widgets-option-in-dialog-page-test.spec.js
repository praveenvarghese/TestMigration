/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify no options is displayed for widgets inside dialog pages", () => {
	loadPage("Main Project/page for dialogs?_aimms_only_dialogpage=true");

	//Verify no widget options are displayed for the widgets inside dialog pages
	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	findWidget("medium_dp");
	findWidget("table_Test")
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	findWidget("table_Test")
		.mouseHover()
		.getWidgetDownloadButton().should.exist;
	findWidget("table_Test")
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");

	findWidget("medium_dp").clickDialogPageButton("ok");
});
