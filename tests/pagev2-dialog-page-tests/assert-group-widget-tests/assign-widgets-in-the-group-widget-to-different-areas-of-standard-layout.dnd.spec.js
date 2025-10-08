/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign widgets in the group widget to different areas of standard layout", () => {
	loadPage("Main Project/classicLayoutWithGroupWidget?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout 1");

	getPageConfigurator()
		.dragWidget("widgetGroup2")
		.toArea("Area B");

	getPageConfigurator()
		.dragWidget("widgetGroup1")
		.toArea("Area A");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("classiclayoutwithgroupwidget_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/classicLayoutWithGroupWidget");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("classiclayoutwithgroupwidget_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
			{
				areaName: "Unassigned widgets",
				widgets: [],
			},
		]);

	findWidget("classiclayoutwithgroupwidget_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["widgetGroup1"] },
			{ areaName: "Area B", widgets: ["widgetGroup2"] },
		]);
});
