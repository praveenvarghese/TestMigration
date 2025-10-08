/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Convert large dialog page to custom layout dialog PageV2", () => {
	loadPage("Main Project/KPIs/Sprint Reliability?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("CustomLayout1", "true");

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
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	findWidget("sprint_reliability")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectedPage"] },
			{ areaName: "Area B", widgets: ["selectedTable"] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);
});
