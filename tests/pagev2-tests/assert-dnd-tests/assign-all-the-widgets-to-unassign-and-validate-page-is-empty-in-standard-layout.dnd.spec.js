/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to un assign and validate page is empty in standard layout",
	() => {
		loadPage("Main Project/ChartStandardPage?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["barchart1"] },
				{ areaName: "Area B", widgets: ["barchart2"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("chartstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["barchart1"] },
				{ areaName: "Area B", widgets: ["barchart2"] },
			]);

		getPageConfigurator()
			.dragWidget("barchart1")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["barchart2"] },
				{ areaName: "Unassigned widgets", widgets: ["barchart1"] },
			]);

		findWidget("chartstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([{ areaName: "Area B", widgets: ["barchart2"] }]);

		getPageConfigurator()
			.dragWidget("barchart2")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["barchart1", "barchart2"] },
			]);

		findWidget("chartstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/ChartStandardPage");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["barchart1", "barchart2"] },
			]);

		findWidget("chartstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["barchart1", "barchart2"] },
			]);

		findWidget("chartstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([]);
	}
);
