/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an another standard layout page", () => {
	loadPage("Main Project/StandardLayout?_aimms_only_persistence.write=true");

	const widgetList = [
		{ areaName: "Area A", widgets: ["SmallDialog_1"] },
		{ areaName: "Area B", widgets: ["MediumDialog_1"] },
		{ areaName: "Area C", widgets: ["LargeDialog_1"] },
		{ areaName: "Area D", widgets: ["Flag_3"] },
	];

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
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
