/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Change widgets to different areas in the same Custom layout", () => {
	loadPage("Main Project/CustomLayout?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	getPageConfigurator()
		.dragWidget("LargeDialog_2")
		.dropAfter("SmallDIalog_2");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/CustomLayout");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2", "LargeDialog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);
});
