/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an another standard layout page", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets?_aimms_only_persistence.write=true");

	const widgetList = [
		{ areaName: "Area A", widgets: ["sidepanelFlag"] },
		{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
		{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
		{ areaName: "Area D", widgets: ["downloadWidget"] },
	];

	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["flag_5"] }]);

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["flag_5"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["setFlagFalse", "setFlagTrue", "tableWidget"],
			},
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["flag_5"] }]);

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["flag_5"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["setFlagFalse", "setFlagTrue", "tableWidget"],
			},
		]);

	closePageConfigurator();

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 5", "Layout 6", "Layout 11", "Layout: classic"]);

	getPageConfigurator().clickLeftArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 3", "Layout 4", "Layout 9", "Layout 10"]);

	getPageConfigurator().clickLeftArrow();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	// Re-create CustomLayout1 as clone of standard Layout 1
	getPageConfigurator().cloneLayout("Layout 1", "standard");

	const newLayoutName = "CustomLayout1";

	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
	});

	getCustomLayoutDialog().save();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);
});
