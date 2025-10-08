/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Change widgets to different areas when layout is changed from custom layout to standard layout",
	() => {
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

		getPageConfigurator().selectLayout("Layout 9");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
				{
					areaName: "Unassigned widgets",
					widgets: ["LargeDialog_2", "Flag_4", "MediumDIalog_2"],
				},
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([{ areaName: "Area A", widgets: ["SmallDIalog_2"] }]);

		getPageConfigurator()
			.dragWidget("MediumDIalog_2")
			.dropBefore("SmallDIalog_2");

		getPageConfigurator()
			.dragWidget("Flag_4")
			.dropBefore("SmallDIalog_2");

		getPageConfigurator()
			.dragWidget("LargeDialog_2")
			.dropAfter("Flag_4");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/CustomLayout");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["MediumDIalog_2", "Flag_4", "LargeDialog_2", "SmallDIalog_2"],
				},
			]);
	}
);
