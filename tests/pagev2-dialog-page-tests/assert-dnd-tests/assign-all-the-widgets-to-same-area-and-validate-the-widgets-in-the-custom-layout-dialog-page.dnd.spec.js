/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to same area and validate the widgets in the custom layout dialog page",
	() => {
		loadPage("Main Project/CustomDialogPageWithWidgets?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["tableWidget"] },
				{ areaName: "Area A", widgets: ["flag_5"] },
				{ areaName: "Area B", widgets: ["setFlagTrue"] },
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["tableWidget"] },
				{ areaName: "Area A", widgets: ["flag_5"] },
				{ areaName: "Area B", widgets: ["setFlagTrue"] },
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
			]);

		getPageConfigurator()
			.dragWidget("flag_5")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["tableWidget"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["setFlagTrue", "flag_5"] },
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: ["tableWidget"] },
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["setFlagTrue", "flag_5"] },
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
			]);

		getPageConfigurator()
			.dragWidget("tableWidget")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "tableWidget", "flag_5"],
				},
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "tableWidget", "flag_5"],
				},
				{ areaName: "Area D", widgets: ["setFlagFalse"] },
			]);

		getPageConfigurator()
			.dragWidget("setFlagFalse")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "flag_5", "tableWidget", "setFlagFalse"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "tableWidget", "flag_5", "setFlagFalse"],
				},
				{ areaName: "Area D", widgets: [] },
			]);

		closePageConfigurator();

		getPageMenu().navigateToPage("Main Project/home");

		openPageConfigurator().selectAppSection();

		openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "flag_5", "tableWidget", "setFlagFalse"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "tableWidget", "flag_5", "setFlagFalse"],
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
					widgets: ["setFlagTrue", "flag_5", "tableWidget", "setFlagFalse"],
				},
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("customdialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area A", widgets: [] },
				{
					areaName: "Area B",
					widgets: ["setFlagTrue", "tableWidget", "flag_5", "setFlagFalse"],
				},
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
