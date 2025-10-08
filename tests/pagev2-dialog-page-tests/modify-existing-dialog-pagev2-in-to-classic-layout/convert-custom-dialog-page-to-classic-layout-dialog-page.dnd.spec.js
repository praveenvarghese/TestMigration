/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Convert custom layout dialog page v2 to classic layout", () => {
	loadPage("Main Project/CustomDialogPageWithWidgets?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout: classic");

	findWidget("customdialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql(["flag_5", "setFlagTrue", "setFlagFalse", "tableWidget"]);

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");

	closePageConfigurator();

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	findWidget("customdialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql(["flag_5", "setFlagTrue", "setFlagFalse", "tableWidget"]);

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");
});
