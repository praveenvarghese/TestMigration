/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign all the widgets to un assign and validate page is empty in custom layout", () => {
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
		.dragWidget("tableWidget")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["flag_5"] },
			{ areaName: "Area B", widgets: ["setFlagTrue"] },
			{ areaName: "Area D", widgets: ["setFlagFalse"] },
			{ areaName: "Unassigned widgets", widgets: ["tableWidget"] },
		]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: ["flag_5"] },
			{ areaName: "Area B", widgets: ["setFlagTrue"] },
			{ areaName: "Area D", widgets: ["setFlagFalse"] },
		]);

	getPageConfigurator()
		.dragWidget("flag_5")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["setFlagTrue"] },
			{ areaName: "Area D", widgets: ["setFlagFalse"] },
			{ areaName: "Unassigned widgets", widgets: ["tableWidget", "flag_5"] },
		]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: ["setFlagTrue"] },
			{ areaName: "Area D", widgets: ["setFlagFalse"] },
		]);

	getPageConfigurator()
		.dragWidget("setFlagTrue")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.dragWidget("setFlagFalse")
		.toArea("Unassigned widgets");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["tableWidget", "flag_5", "setFlagTrue", "setFlagFalse"],
			},
		]);

	findWidget("customdialogpagewithwidgets_1")
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

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["tableWidget", "flag_5", "setFlagTrue", "setFlagFalse"],
			},
		]);

	findWidget("customdialogpagewithwidgets_1")
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
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["tableWidget", "flag_5", "setFlagTrue", "setFlagFalse"],
			},
		]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);
});
