/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign all the widgets to un assign and validate page is empty in custom layout", () => {
	loadPage("Main Project/KPIs/Energy Score?_aimms_only_persistence.write=true");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["flagStatusCustom"] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["flagStatusCustom"] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: [] },
		]);
	getPageConfigurator()
		.dragWidget("flagStatusCustom")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["flagStatusCustom"] },
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageConfigurator()
		.dragWidget("customTable")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["flagStatusCustom", "customTable"] },
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: [] },
		]);

	getPageConfigurator()
		.dragWidget("TestmapCustom")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["flagStatusCustom", "TestmapCustom", "customTable"],
			},
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Energy Score");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["flagStatusCustom", "TestmapCustom", "customTable"],
			},
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["flagStatusCustom", "TestmapCustom", "customTable"],
			},
		]);

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);
});
