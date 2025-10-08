/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Convert standard layout dialog page v2 to classic layout", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout: classic");

	findWidget("standarddialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql([
			"sidepanelFlag",
			"sidePanelOPenButton",
			"WrongDilaogPageId",
			"downloadWidget",
		]);

	findWidget("standarddialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");

	closePageConfigurator();

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	findWidget("standarddialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql([
			"sidepanelFlag",
			"sidePanelOPenButton",
			"WrongDilaogPageId",
			"downloadWidget",
		]);

	findWidget("standarddialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");
});
