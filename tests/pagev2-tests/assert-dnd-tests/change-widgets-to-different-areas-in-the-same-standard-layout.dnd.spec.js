/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Change widgets to different areas in the same Standard layout", () => {
	loadPage("Main Project/StandardLayout?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);

	getPageConfigurator()
		.dragWidget("MediumDialog_1")
		.dropAfter("SmallDialog_1");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);
});
