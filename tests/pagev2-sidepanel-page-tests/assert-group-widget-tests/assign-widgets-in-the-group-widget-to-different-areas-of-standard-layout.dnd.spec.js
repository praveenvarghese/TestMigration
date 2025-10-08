/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign widgets in the group widget to different areas of standard layout", () => {
	loadPage("Main Project/KPIs/Demo Rating?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout 1");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{
				areaName: "Unassigned widgets",
				widgets: ["sidepanelGroupTableWidget1", "sidepanelGroupWidget1"],
			},
		]);

	findWidget("demo_rating")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);

	getPageConfigurator()
		.dragWidget("sidepanelGroupWidget1")
		.toArea("Area B");

	getPageConfigurator()
		.dragWidget("sidepanelGroupTableWidget1")
		.toArea("Area A");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("demo_rating")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Demo Rating");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("demo_rating")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("demo_rating")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelGroupTableWidget1"] },
			{ areaName: "Area B", widgets: ["sidepanelGroupWidget1"] },
		]);
});
