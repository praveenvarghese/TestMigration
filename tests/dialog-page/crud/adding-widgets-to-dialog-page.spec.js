/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify only setting option is displayed for widgets added to dialog page", () => {
	loadPage("Main Project/Main Dialog Page?_aimms_only_dialogpage=true&table-v2=false");

	//Create a table widget in the dialog page
	createWidget("table", ["SidePanels_HomePage"], "tableWidget");

	//Verify widget edit actions are displayed for widgets in dialog configuration page
	findWidget("main_dialog_page");
	const widgetVariable = findWidget("tableWidget");
	widgetVariable
		.mouseHover()
		.getWidgetMaximizeButton()
		.should.be.eql("None");
	widgetVariable
		.mouseHover()
		.getWidgetSettingButton()
		.should.not.be.eql("None");
	widgetVariable.mouseHover().getWidgetDownloadButton().should.not.exist;
});
