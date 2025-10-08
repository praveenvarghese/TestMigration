/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario("Cut widget from normal page to GL Sidepanel page.", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Open App Manager
	openAppManager();

	// Copy a widget from current active Regular page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
			widgetName: "Table1",
		})
		.clickOnCut();

	// Paste the copied widget to Standard layout and custom layout
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/standardPanelWithWidgets",
		})
		.clickOnPasteWidget();

	getAppManager().unfoldWidgetContainers(["Main Project/home/standardPanelWithWidgets"]);

	getAppManager()
		.getAppManagerInfo()
		.should.eql([
			{
				Name: "Main Project",
				Slug: "main_project",
				NodeType: "Pagev2-grid",
				Tooltip: "Main Project",
				NodeState: "Expanded",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "home",
				Slug: "home",
				NodeType: "Page",
				Tooltip: "home [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-home",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Table2",
				Slug: "Table2",
				NodeType: "Widget",
				Tooltip: "Table2 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Panel1",
				Slug: "panel1_1",
				NodeType: "Sidepanel",
				Tooltip: "Panel1 [ Classic Side Panel ]",
				NodeState: "Collapsed",
				Icon: "icon-arrow-left7",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "standardPanelWithWidgets",
				Slug: "standardpanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "standardPanelWithWidgets [ Side Panel ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "standardpanelwithwidgets_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "standardTable",
				Slug: "standardTable",
				NodeType: "Widget",
				Tooltip: "standardTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "standardLineChart",
				Slug: "standardLineChart",
				NodeType: "Widget",
				Tooltip: "standardLineChart [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Table1",
				Slug: "Table1",
				NodeType: "Widget",
				Tooltip: "Table1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customPanelWithWidgets",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "customPanelWithWidgets [ Side Panel ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Page2",
				Slug: "page2_1",
				NodeType: "Page",
				Tooltip: "Page2 [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openAppManager().navigateToPage("Main Project/home/standardPanelWithWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["standardTable"] },
			{ areaName: "Area B", widgets: ["standardLineChart"] },
			{ areaName: "Unassigned widgets", widgets: ["Table1"] },
		]);

	pageRefresh();

	// Open App Manager
	openAppManager();

	getAppManager().unfoldWidgetContainers(["Main Project/home/standardPanelWithWidgets"]);

	getAppManager()
		.getAppManagerInfo()
		.should.eql([
			{
				Name: "Main Project",
				Slug: "main_project",
				NodeType: "Pagev2-grid",
				Tooltip: "Main Project",
				NodeState: "Expanded",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "home",
				Slug: "home",
				NodeType: "Page",
				Tooltip: "home [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-home",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Panel1",
				Slug: "panel1_1",
				NodeType: "Sidepanel",
				Tooltip: "Panel1 [ Classic Side Panel ]",
				NodeState: "Collapsed",
				Icon: "icon-arrow-left7",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "standardPanelWithWidgets",
				Slug: "standardpanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "standardPanelWithWidgets [ Side Panel ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "standardpanelwithwidgets_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "standardTable",
				Slug: "standardTable",
				NodeType: "Widget",
				Tooltip: "standardTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "standardLineChart",
				Slug: "standardLineChart",
				NodeType: "Widget",
				Tooltip: "standardLineChart [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Table1",
				Slug: "Table1",
				NodeType: "Widget",
				Tooltip: "Table1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customPanelWithWidgets",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "customPanelWithWidgets [ Side Panel ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Page2",
				Slug: "page2_1",
				NodeType: "Page",
				Tooltip: "Page2 [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openAppManager().navigateToPage("Main Project/home/standardPanelWithWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["standardTable"] },
			{ areaName: "Area B", widgets: ["standardLineChart"] },
			{ areaName: "Unassigned widgets", widgets: ["Table1"] },
		]);
});
