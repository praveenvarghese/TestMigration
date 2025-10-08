/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to un assign and validate page is empty in standard layout",
	() => {
		loadPage("Main Project/KPIs/Impact Score?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["selectionText"] },
				{ areaName: "Area B", widgets: ["tableStandard"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("impact_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["selectionText"] },
				{ areaName: "Area B", widgets: ["tableStandard"] },
			]);

		getPageConfigurator()
			.dragWidget("selectionText")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["tableStandard"] },
				{ areaName: "Unassigned widgets", widgets: ["selectionText"] },
			]);

		findWidget("impact_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["tableStandard"] },
			]);

		getPageConfigurator()
			.dragWidget("tableStandard")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["selectionText", "tableStandard"] },
			]);

		findWidget("impact_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		closePageConfigurator();

		getPageMenu().navigateToPage("Main Project/home");

		openPageConfigurator().selectAppSection();

		openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["selectionText", "tableStandard"] },
			]);

		findWidget("impact_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["selectionText", "tableStandard"] },
			]);

		findWidget("impact_score")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);
	}
);
