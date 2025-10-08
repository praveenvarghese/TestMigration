/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Change widgets to different areas when layout is changed from standard layout to custom layout",
	() => {
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

		getPageConfigurator().selectLayout("Custom3", "true");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1"] },
				{ areaName: "Unassigned widgets", widgets: ["LargeDialog_1", "Flag_3"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			]);

		getPageConfigurator()
			.dragWidget("LargeDialog_1")
			.dropAfter("SmallDialog_1");

		getPageConfigurator()
			.dragWidget("Flag_3")
			.dropAfter("MediumDialog_1");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/StandardLayout");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "LargeDialog_1"] },
				{ areaName: "Area B", widgets: ["MediumDialog_1", "Flag_3"] },
			]);
	}
);
