/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Test to verify which options are displayed for widgets inside dialog page v2", () => {
	loadPage("Main Project/page for dialogs v2");

	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	findWidget("medium_dp_v2");
	findWidget("table_Test_v2")
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	findWidget("table_Test_v2")
		.mouseHover()
		.getWidgetDownloadButton().should.exist;
	findWidget("table_Test_v2")
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");

	findWidget("medium_dp_v2").clickDialogPageButton("ok");

	getCurrentPage().should.be.equal("Main Project/page for dialogs v2");
});
