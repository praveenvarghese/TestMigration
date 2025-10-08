/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify Hidden widgets functinalities in Standard page", () => {
	loadPage("Main Project/standardLayoutWithHiddenWidgets/customLayoutWithGridDIalogHiddenWidget");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["testCustomTable"] },
			{ areaName: "Area B", widgets: ["TestCustom"] },
		]);

	findWidget("Test_1").isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.showHiddenWidgets();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["testCustomTable"] },
			{ areaName: "Area B", widgets: ["TestCustom"] },
		]);

	findWidget("Test_1").isDisplayedInViewport().should.be.true;

	getPageMenu().navigateToPage("Main Project/S&OP Review");

	findWidget("openCustomLayoutDialogPage_1").click();

	findWidget("Test_1").isDisplayedInViewport().should.be.true;
});
