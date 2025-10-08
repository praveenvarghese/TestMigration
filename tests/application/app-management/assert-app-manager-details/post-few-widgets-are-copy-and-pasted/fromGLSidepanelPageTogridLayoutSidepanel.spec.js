/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario("Copy widget from GL Sidepanel page to GL Sidepanel page.", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Open App Manager
	openAppManager();

	getAppManager().unfoldWidgetContainers([
		"Main Project/home/customPanelWithWidgets",
		"Main Project/home/standardPanelWithWidgets",
	]);

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
				WidgetsCount: "2",
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
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
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
				Name: "customPanelWithWidgets",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "customPanelWithWidgets [ Side Panel ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
				Slug: "custompanelwithwidgets_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "customTable",
				Slug: "standardTable_1",
				NodeType: "Widget",
				Tooltip: "customTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customLineChart",
				Slug: "standardLineChart_1",
				NodeType: "Widget",
				Tooltip: "customLineChart [ Widget ]",
				WidgetState: "",
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

	// Copy a widget from current active Regular page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/standardPanelWithWidgets",
			widgetName: "standardTable",
		})
		.clickOnCopy();

	// Paste the copied widget to Standard layout and custom layout
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/standardPanelWithWidgets",
		})
		.clickOnPasteWidget();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/customPanelWithWidgets",
		})
		.clickOnPasteWidget();
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
				WidgetsCount: "2",
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
				Name: "standardTable (1)",
				Slug: "standardTable_2",
				NodeType: "Widget",
				Tooltip: "standardTable (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customPanelWithWidgets",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "customPanelWithWidgets [ Side Panel ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "custompanelwithwidgets_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "customTable",
				Slug: "standardTable_1",
				NodeType: "Widget",
				Tooltip: "customTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customLineChart",
				Slug: "standardLineChart_1",
				NodeType: "Widget",
				Tooltip: "customLineChart [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "standardTable (2)",
				Slug: "standardTable_3",
				NodeType: "Widget",
				Tooltip: "standardTable (2) [ Widget ]",
				WidgetState: "",
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
			{ areaName: "Unassigned widgets", widgets: ["standardTable (1)"] },
		]);

	openAppManager().navigateToPage("Main Project/home/customPanelWithWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["customTable", "customLineChart"] },
			{ areaName: "Unassigned widgets", widgets: ["standardTable (2)"] },
		]);

	pageRefresh();

	// Open App Manager
	openAppManager();

	getAppManager().unfoldWidgetContainers([
		"Main Project/home/standardPanelWithWidgets",
		"Main Project/home/customPanelWithWidgets",
	]);

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
				WidgetsCount: "2",
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
				Name: "standardTable (1)",
				Slug: "standardTable_2",
				NodeType: "Widget",
				Tooltip: "standardTable (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customPanelWithWidgets",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "customPanelWithWidgets [ Side Panel ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-sidepanel",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "custompanelwithwidgets_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "customTable",
				Slug: "standardTable_1",
				NodeType: "Widget",
				Tooltip: "customTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "customLineChart",
				Slug: "standardLineChart_1",
				NodeType: "Widget",
				Tooltip: "customLineChart [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "standardTable (2)",
				Slug: "standardTable_3",
				NodeType: "Widget",
				Tooltip: "standardTable (2) [ Widget ]",
				WidgetState: "",
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
			{ areaName: "Unassigned widgets", widgets: ["standardTable (1)"] },
		]);

	openAppManager().navigateToPage("Main Project/home/customPanelWithWidgets");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["customTable", "customLineChart"] },
			{ areaName: "Unassigned widgets", widgets: ["standardTable (2)"] },
		]);
});
