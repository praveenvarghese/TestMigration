/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario(
	"After deleting standard and custom layout Sidepanel pages, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		openAppManager().unfoldWidgetContainers([
			"Main Project/home/Panel1",
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
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
					Slug: "panel1_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "NeighbourBarChart",
					Slug: "NeighbourBarChart",
					NodeType: "Widget",
					Tooltip: "NeighbourBarChart [ Widget ]",
					WidgetState: "",
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

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/standardPanelWithWidgets",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/Panel1",
			})
			.clickOnDelete()
			.actionYes()
			.click();

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

		pageRefresh();

		openAppManager().unfoldWidgetContainers(["Main Project/home"]);

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
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Table1",
					Slug: "Table1",
					NodeType: "Widget",
					Tooltip: "Table1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Table2",
					Slug: "Table2",
					NodeType: "Widget",
					Tooltip: "Table2 [ Widget ]",
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
	}
);
