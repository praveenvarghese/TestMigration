/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to same area and validate the widgets in the custom layout sidepanel page",
	() => {
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
			.dragWidget("customTable")
			.toArea("Area C");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["flagStatusCustom", "customTable"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["TestmapCustom"] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("energy_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["flagStatusCustom", "customTable"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["TestmapCustom"] },
				{ areaName: "Area D", widgets: [] },
			]);

		getPageConfigurator()
			.dragWidget("TestmapCustom")
			.toArea("Area C");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("energy_score")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
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
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("energy_score")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("energy_score")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area C",
					widgets: ["flagStatusCustom", "customTable", "TestmapCustom"],
				},
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
