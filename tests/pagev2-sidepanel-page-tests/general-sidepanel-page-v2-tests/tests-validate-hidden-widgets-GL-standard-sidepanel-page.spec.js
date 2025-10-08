/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("Test to verify Hidden widgets functinalities in standard page", () => {
	loadPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("Hidden Widget Standard Page");

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.false;

	openAppManager().navigateToPage("Main Project/hiddenWidgetSidepanelStandardPage");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["hiddenWidget1"] },
			{ areaName: "Area B", widgets: ["nonHiddenWidget1"] },
		]);

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.showHiddenWidgets();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["hiddenWidget1"] },
			{ areaName: "Area B", widgets: ["nonHiddenWidget1"] },
		]);

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.true;

	getPageMenu().navigateToPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("Hidden Widget Standard Page");

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.true;
});
