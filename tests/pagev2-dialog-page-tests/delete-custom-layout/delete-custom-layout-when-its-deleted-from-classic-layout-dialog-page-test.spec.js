/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an another classic layout page", () => {
	loadPage("Main Project/classicDialogPageWithWidgets?_aimms_only_persistence.write=true");

	findWidget("classicdialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql(["sidepanelOPen"]);

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	//Validate Standard Layouts names displayed (actually: jumping back to the selected layout for this page: Classic)
	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 5", "Layout 6", "Layout 11", "Layout: classic"]);

	findWidget("classicdialogpagewithwidgets_1")
		.getVisibleWidgets()
		.should.eql(["sidepanelOPen"]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["flag_5"] }]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["flag_5"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["setFlagFalse", "setFlagTrue", "tableWidget"],
			},
		]);

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	pageRefresh();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("customdialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["flag_5"] }]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["flag_5"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["setFlagFalse", "setFlagTrue", "tableWidget"],
			},
		]);

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

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

	// Re-create CustomLayout1 as clone of standard Layout 10
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
