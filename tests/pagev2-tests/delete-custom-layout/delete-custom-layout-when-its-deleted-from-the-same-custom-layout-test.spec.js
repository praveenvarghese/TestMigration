/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an same custom layout page", () => {
	loadPage("Main Project/CustomLayout?_aimms_only_persistence.write=true");

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
		]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Unassigned widgets", widgets: ["LargeDialog_2", "Flag_4"] },
		]);

	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/CustomLayout");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
		]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Unassigned widgets", widgets: ["LargeDialog_2", "Flag_4"] },
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
		]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Unassigned widgets", widgets: ["LargeDialog_2", "Flag_4"] },
		]);
});
