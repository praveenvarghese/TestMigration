/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to same area and validate the widgets in the standard layout page",
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

		getPageConfigurator()
			.dragWidget("MediumDialog_1")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDialog_1", "MediumDialog_1"] },
				{ areaName: "Area B", widgets: [] },
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

		getPageConfigurator()
			.dragWidget("LargeDialog_1")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["Flag_3"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["Flag_3"] },
			]);

		getPageConfigurator()
			.dragWidget("Flag_3")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/StandardLayout");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standardlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
