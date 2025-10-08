/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario("After renaming Sidepanel pages, checking for data on App Manager.", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	openAppManager().unfoldWidgetContainers([
		"Main Project/home",
		"Main Project/home/Panel1",
		"Main Project/home/standardPanelWithWidgets",
		"Main Project/home/customPanelWithWidgets",
		"Main Project/Page2",
	]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/standardPanelWithWidgets",
		})
		.clickOnRename()
		.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥")
		.pressKeys([SPECIAL_KEYS.enter]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/customPanelWithWidgets",
		})
		.clickOnRename()
		.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze")
		.pressKeys([SPECIAL_KEYS.enter]);

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
				Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
				Slug: "standardpanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Side Panel ]",
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
				Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Side Panel ]",
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
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "page2_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "ABar",
				Slug: "ABar",
				NodeType: "Widget",
				Tooltip: "ABar [ Widget ]",
				WidgetState: "",
			},
		]);

	// Refresh the page
	pageRefresh();

	openAppManager().unfoldWidgetContainers([
		"Main Project/home",
		"Main Project/home/Panel1",
		"Main Project/home/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
		"Main Project/home/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
		"Main Project/Page2",
	]);

	// Assert the info seen on App Manager
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
				Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
				Slug: "standardpanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Side Panel ]",
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
				Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
				Slug: "custompanelwithwidgets_1",
				NodeType: "Pagev2-grid-sidepanel",
				Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Side Panel ]",
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
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "page2_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "ABar",
				Slug: "ABar",
				NodeType: "Widget",
				Tooltip: "ABar [ Widget ]",
				WidgetState: "",
			},
		]);
});
