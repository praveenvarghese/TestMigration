/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign all the widgets to un assign and validate page is empty in custom layout", () => {
	loadPage("Main Project/ItemACtionCustomPage?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["table2"] },
			{ areaName: "Area B", widgets: ["Table1"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("itemactioncustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["table2"] },
			{ areaName: "Area B", widgets: ["Table1"] },
		]);

	getPageConfigurator()
		.dragWidget("table2")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["Table1"] },
			{ areaName: "Unassigned widgets", widgets: ["table2"] },
		]);

	findWidget("itemactioncustompage_1")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area B", widgets: ["Table1"] }]);

	getPageConfigurator()
		.dragWidget("Table1")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["Table1", "table2"] },
		]);

	findWidget("itemactioncustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/ItemACtionCustomPage");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["Table1", "table2"] },
		]);

	findWidget("itemactioncustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["Table1", "table2"] },
		]);

	findWidget("itemactioncustompage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);
});
