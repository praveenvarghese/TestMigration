/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify widgets in sidepanel tabs.", () => {
	loadPage("Main Project/home");

	//Verify widget edit actions are not displayed for widgets in sidepanel tab
	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Impact Score");
	const widgetVariable = findWidget("selectionText");
	widgetVariable
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	widgetVariable
		.mouseHover()
		.getWidgetSettingButton()
		.should.be.eql("None");
});
