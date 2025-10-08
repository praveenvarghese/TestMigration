/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("Test to verify Hidden widgets functinalities when GL is disabled", () => {
	loadPage("Main Project/OpenDIalogPage?ignore-grid-layout=true");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("Hidden Widget Standard Page");

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.false;

	openAppManager().navigateToPage("Main Project/hiddenWidgetSidepanelStandardPage");

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.showHiddenWidgets();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.true;

	getPageMenu().navigateToPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("Hidden Widget Standard Page");

	findWidget("hiddenWidget1").isDisplayedInViewport().should.be.true;
});
