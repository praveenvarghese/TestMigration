/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario(
	"Through Widget Manager, adding few widgets on Standard and custom Grid-Layout sidepanel pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/home/standardPanelWithWidgets?_aimms_only_persistence.write=true");

		createWidget("scalar", ["c2"], "Countries");
		createWidget("map", [], "EmptyMap");

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home/standardPanelWithWidgets"]);

		// Assert data on App Manager
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
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
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
					Name: "Countries",
					Slug: "Countries",
					NodeType: "Widget",
					Tooltip: "Countries [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
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

		getAppManager().navigateToPage("Main Project/home/customPanelWithWidgets");

		createWidget("scalar", ["c2"], "Countries1");
		createWidget("map", [], "EmptyMap1");

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home/customPanelWithWidgets"]);

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
					WidgetsCount: "4",
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
					Name: "Countries",
					Slug: "Countries",
					NodeType: "Widget",
					Tooltip: "Countries [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
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
					WidgetsCount: "4",
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
					Name: "Countries1",
					Slug: "Countries1",
					NodeType: "Widget",
					Tooltip: "Countries1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap1",
					Slug: "EmptyMap1",
					NodeType: "Widget",
					Tooltip: "EmptyMap1 [ Widget ]",
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

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home/customPanelWithWidgets"]);

		getAppManager().unfoldWidgetContainers(["Main Project/home/standardPanelWithWidgets"]);

		// Assert data on App Manager
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
					WidgetsCount: "4",
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
					Name: "Countries",
					Slug: "Countries",
					NodeType: "Widget",
					Tooltip: "Countries [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
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
					WidgetsCount: "4",
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
					Name: "Countries1",
					Slug: "Countries1",
					NodeType: "Widget",
					Tooltip: "Countries1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap1",
					Slug: "EmptyMap1",
					NodeType: "Widget",
					Tooltip: "EmptyMap1 [ Widget ]",
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
	}
);
