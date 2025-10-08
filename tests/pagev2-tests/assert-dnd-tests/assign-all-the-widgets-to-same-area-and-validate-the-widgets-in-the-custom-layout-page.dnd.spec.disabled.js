/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to same area and validate the widgets in the custom layout page",
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

		getPageConfigurator()
			.dragWidget("SmallDIalog_2")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["LargeDialog_2"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["MediumDIalog_2", "SmallDIalog_2"] },
				{ areaName: "Area D", widgets: ["Flag_4"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["LargeDialog_2"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["MediumDIalog_2", "SmallDIalog_2"] },
				{ areaName: "Area D", widgets: ["Flag_4"] },
			]);

		getPageConfigurator()
			.dragWidget("LargeDialog_2")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2"],
				},
				{ areaName: "Area D", widgets: ["Flag_4"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2"],
				},
				{ areaName: "Area D", widgets: ["Flag_4"] },
			]);

		getPageConfigurator()
			.dragWidget("Flag_4")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/CustomLayout");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customlayout_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["MediumDIalog_2", "SmallDIalog_2", "LargeDialog_2", "Flag_4"],
				},
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
