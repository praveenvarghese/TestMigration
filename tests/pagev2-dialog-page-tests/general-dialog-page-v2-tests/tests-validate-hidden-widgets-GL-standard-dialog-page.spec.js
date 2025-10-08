/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify Hidden widgets functinalities in Standard page", () => {
	loadPage("Main Project/standardLayoutWithHiddenWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["testTable"] },
			{ areaName: "Area B", widgets: ["Test"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("Test").isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.showHiddenWidgets();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["testTable"] },
			{ areaName: "Area B", widgets: ["Test"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("Test").isDisplayedInViewport().should.be.true;

	getPageMenu().navigateToPage("Main Project/S&OP Review");

	findWidget("openDialogPage").click();

	findWidget("Test").isDisplayedInViewport().should.be.true;
});
