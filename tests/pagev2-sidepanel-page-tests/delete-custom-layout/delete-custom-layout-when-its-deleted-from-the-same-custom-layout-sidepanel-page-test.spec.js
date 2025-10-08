/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an same custom layout page", () => {
	loadPage("Main Project/KPIs/Energy Score?_aimms_only_persistence.write=true");

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["flagStatusCustom"] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: [] },
		]);

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["flagStatusCustom"] },
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Area B", widgets: ["TestmapCustom"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["customTable"] }]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Unassigned widgets", widgets: ["TestmapCustom", "flagStatusCustom"] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Energy Score");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["customTable"] }]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Unassigned widgets", widgets: ["TestmapCustom", "flagStatusCustom"] },
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("energy_score")
		.getWidgetAreas()
		.should.include.something.like([{ areaName: "Area A", widgets: ["customTable"] }]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 11" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["customTable"] },
			{ areaName: "Unassigned widgets", widgets: ["TestmapCustom", "flagStatusCustom"] },
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
