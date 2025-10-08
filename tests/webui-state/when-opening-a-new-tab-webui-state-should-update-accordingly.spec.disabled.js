/*!
 * @AIMMS_FILE=models/WebUIFrontendStateTestModel/WebUIFrontendStateTestModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("When opening a new tab webui-state should update accordingly", () => {
	loadPage("Main Project/home?webui-state-support=true");

	findWidget("CurrentPageIds").should.be.a.widgetOfType("table");

	loadPageInNewTab("Main Project/Another Page?webui-state-support=true");
	findWidget("another_page").should.exist;

	switchToTab("Main Project/home");

	findWidget("CurrentPageIds")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("another_page");

	switchToTab("Main Project/Another Page");

	findWidget("another_page")
		.getSidepanels()
		.openSidepanelTab("A Side Panel Page");

	switchToTab("Main Project/home");

	findWidget("CurrentPageIds")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("a_side_panel_page");

	closeTab("Main Project/Another Page");

	openPageConfigurator();

	closePageConfigurator();

	findWidget("CurrentPageIds")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("home");

	findWidget("CurrentPageIds")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("");
});
