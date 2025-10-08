/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify widgets edit option in custom and standard sidepanel pages ", () => {
	loadPage("Main Project/home?table-v2=true");

	//Verify widget edit actions are not displayed for widgets in classic page

	findWidget("selectedTable")
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	findWidget("selectedTable")
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");
	findWidget("selectedTable")
		.mouseHover()
		.getWidgetDownloadButton().should.exist;

	//Verify widget edit actions are not displayed for widgets in stnadrad page
	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Impact Score");

	findWidget("tableStandard")
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	findWidget("tableStandard")
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");
	findWidget("tableStandard")
		.mouseHover()
		.getWidgetDownloadButton().should.exist;

	//Verify widget edit actions are not displayed for widgets in custom page
	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("WoW Score");

	findWidget("customTable2")
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	findWidget("customTable2")
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");
	findWidget("customTable2")
		.mouseHover()
		.getWidgetDownloadButton().should.exist;
});
