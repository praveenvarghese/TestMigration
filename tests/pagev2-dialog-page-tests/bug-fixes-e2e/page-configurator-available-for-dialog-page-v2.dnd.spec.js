/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Test for checking that Page Configurator is available for dialog page v2", () => {
	loadPage("Main Project/Main Dialog Page v2?table-v2=false");

	//openAppManager().navigateToPage("Main Project/Main Dialog Page v2");

	findWidget("main_dialog_page_v2")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	// Open App manager > Page-Configurator and create a table widget in the dialog page v2
	openPageConfigurator().createWidget("table", ["SidePanels_HomePage"], "tableWidget_v2");

	getPageConfigurator()
		.dragWidget("tableWidget_v2")
		.toArea("Area A");

	findWidget("tableWidget_v2")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);
});
