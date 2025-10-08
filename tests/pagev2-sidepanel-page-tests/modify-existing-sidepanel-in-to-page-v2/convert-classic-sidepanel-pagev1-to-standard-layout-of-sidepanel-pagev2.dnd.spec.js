/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert sidepanel page to standard sidepanel PageV2", () => {
	loadPage("Main Project/KPIs/Sprint Reliability?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.clickRightArrow()
		.selectLayout("Layout 1");

	getPageConfigurator()
		.dragWidget("selectedPage")
		.toArea("Area A");

	getPageConfigurator()
		.dragWidget("selectedTable")
		.toArea("Area B");

	findWidget("sprint_reliability")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectedPage"] },
			{ areaName: "Area B", widgets: ["selectedTable"] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	findWidget("sprint_reliability")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectedPage"] },
			{ areaName: "Area B", widgets: ["selectedTable"] },
		]);
});
