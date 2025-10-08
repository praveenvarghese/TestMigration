/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */
scenario("Add a widget in classic layout dialog page without the flag", () => {
	loadPage("Main Project/classicDIalogPage?_aimms_only_persistence.write=true");

	findWidget("classicdialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag"]);

	findWidget("classicdialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	findWidget("classicdialogpage_1").selectSizeOfDialogPage("medium");

	createWidget("scalar", ["Flag"], "SelectFlag1");

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag", "SelectFlag1"]);

	findWidget("classicdialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");

	findWidget("classicdialogpage_1").selectSizeOfDialogPage("large");

	createWidget("scalar", ["Flag"], "SelectFlag2");

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag", "SelectFlag1", "SelectFlag2"]);

	findWidget("classicdialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");

	getPageMenu().navigateToPage("Main Project/checkDialogPageV2");

	findWidget("OpenClassicLayoutDIalogPage").click();

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag", "SelectFlag1", "SelectFlag2"]);

	findWidget("classicdialogpage_1").clickDialogPageButton("ok");

	openAppManager().navigateToPage("Main Project/classicDIalogPage");

	openWidgetManager().deleteWidget("SelectFlag");

	openWidgetManager().deleteWidget("SelectFlag1");

	openWidgetManager().deleteWidget("SelectFlag2");

	closeWidgetManager();

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql([]);

	getPageMenu().navigateToPage("Main Project/checkDialogPageV2");

	findWidget("OpenClassicLayoutDIalogPage").click();

	findWidget("classicdialogpage_1")
		.getVisibleWidgets()
		.should.eql([]);
});
