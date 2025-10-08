/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("After renaming few widgets on regular pages, checking for data on App Manager.", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Open the App Manager.
	openAppManager();

	// Renaming a widget on current home page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
			widgetName: "flagsonhome",
		})
		.clickOnRename()
		.enterName("MKG 05061984")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Renaming a widget with special characters
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Book Corner",
			widgetName: "Second Book Bars",
		})
		.clickOnRename()
		.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Renaming another widget
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Book Corner/JE",
			widgetName: "Scene",
		})
		.clickOnRename()
		.enterName("Test Widget")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Renaming another widget with existing widget name
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Book Corner/JE",
			widgetName: "Header",
		})
		.clickOnRename()
		.enterName("Test Widget")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Renaming another widget with similar widget name
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Book Corner",
			widgetName: "Book Legend",
		})
		.clickOnRename()
		.enterName("Test Widget 1")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Renaming another widget with existing widget name
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Book Corner",
			widgetName: "Book Cover",
		})
		.clickOnRename()
		.enterName("Test Widget")
		.pressKeys([SPECIAL_KEYS.enter]);

	// Asserting data as shown on App Manager
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
				WidgetsCount: "6",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "gfdgfd",
				Slug: "gfdgfd",
				NodeType: "Widget",
				Tooltip: "gfdgfd [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Groupie1",
				Slug: "Groupie1",
				NodeType: "Widget",
				Tooltip: "Groupie1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "yfhtye",
				Slug: "yfhtye",
				NodeType: "Widget",
				Tooltip: "yfhtye [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "BOE",
				Slug: "BOE",
				NodeType: "Widget",
				Tooltip: "BOE [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ggggfhfgdh",
				Slug: "ggggfhfgdh",
				NodeType: "Widget",
				Tooltip: "ggggfhfgdh [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "MKG 05061984",
				Slug: "flagsonhome",
				NodeType: "Widget",
				Tooltip: "MKG 05061984 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Another Page",
				Slug: "another_page",
				NodeType: "Page",
				Tooltip: "Another Page [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Button Page",
				Slug: "button_page",
				NodeType: "Page",
				Tooltip: "Button Page [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Book Corner",
				Slug: "wh_subpage",
				NodeType: "Page",
				Tooltip: "Book Corner [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "7",
				Slug: "wh_subpage-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Widget 1",
				Slug: "Book Legend",
				NodeType: "Widget",
				Tooltip: "Test Widget 1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Book Table",
				Slug: "Book Table",
				NodeType: "Widget",
				Tooltip: "Book Table [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Book Bars",
				Slug: "Book Bars",
				NodeType: "Widget",
				Tooltip: "Book Bars [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
				Slug: "Second Book Bars",
				NodeType: "Widget",
				Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Selected Book Set",
				Slug: "Selected Book Set",
				NodeType: "Widget",
				Tooltip: "Selected Book Set [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Test Widget (2)",
				Slug: "Book Cover",
				NodeType: "Widget",
				Tooltip: "Test Widget (2) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Author Portrait",
				Slug: "Author Portrait",
				NodeType: "Widget",
				Tooltip: "Author Portrait [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "WH",
				Slug: "mischapage_1",
				NodeType: "Page",
				Tooltip: "WH [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "JE",
				Slug: "je_1",
				NodeType: "Page",
				Tooltip: "JE [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "je_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Widget (1)",
				Slug: "Header",
				NodeType: "Widget",
				Tooltip: "Test Widget (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Excerpt",
				Slug: "Excerpt",
				NodeType: "Widget",
				Tooltip: "Excerpt [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Test Widget",
				Slug: "Scene",
				NodeType: "Widget",
				Tooltip: "Test Widget [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "öβå",
				Slug: "oeva",
				NodeType: "Page",
				Tooltip: "öβå [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Page",
				Slug: "test_page",
				NodeType: "Pagev2-grid",
				Tooltip: "Test Page [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "SidePanels",
				Slug: "sidepanels_1",
				NodeType: "Sidepanel",
				Tooltip: "SidePanels [ Classic Side Panel ]",
				NodeState: "Collapsed",
				Icon: "icon-arrow-left7",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Dialog Pages",
				Slug: "dialog_pages",
				NodeType: "Dialog",
				Tooltip: "Dialog Pages [ Classic Dialog ]",
				NodeState: "Collapsed",
				Icon: "icon-popout",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	pageRefresh();

	openAppManager().unfoldWidgetContainers(["Main Project/home", "Main Project/Book Corner/JE"]);

	openAppManager().unfoldWidgetContainers(["Main Project/home", "Main Project/Book Corner/JE"]);

	// Asserting data as shown on App Manager
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
				WidgetsCount: "6",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "gfdgfd",
				Slug: "gfdgfd",
				NodeType: "Widget",
				Tooltip: "gfdgfd [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Groupie1",
				Slug: "Groupie1",
				NodeType: "Widget",
				Tooltip: "Groupie1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "yfhtye",
				Slug: "yfhtye",
				NodeType: "Widget",
				Tooltip: "yfhtye [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "BOE",
				Slug: "BOE",
				NodeType: "Widget",
				Tooltip: "BOE [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ggggfhfgdh",
				Slug: "ggggfhfgdh",
				NodeType: "Widget",
				Tooltip: "ggggfhfgdh [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "MKG 05061984",
				Slug: "flagsonhome",
				NodeType: "Widget",
				Tooltip: "MKG 05061984 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Another Page",
				Slug: "another_page",
				NodeType: "Page",
				Tooltip: "Another Page [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Button Page",
				Slug: "button_page",
				NodeType: "Page",
				Tooltip: "Button Page [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Book Corner",
				Slug: "wh_subpage",
				NodeType: "Page",
				Tooltip: "Book Corner [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "7",
				Slug: "wh_subpage-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "WH",
				Slug: "mischapage_1",
				NodeType: "Page",
				Tooltip: "WH [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "JE",
				Slug: "je_1",
				NodeType: "Page",
				Tooltip: "JE [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "je_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Widget (1)",
				Slug: "Header",
				NodeType: "Widget",
				Tooltip: "Test Widget (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Excerpt",
				Slug: "Excerpt",
				NodeType: "Widget",
				Tooltip: "Excerpt [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Test Widget",
				Slug: "Scene",
				NodeType: "Widget",
				Tooltip: "Test Widget [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "öβå",
				Slug: "oeva",
				NodeType: "Page",
				Tooltip: "öβå [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Page",
				Slug: "test_page",
				NodeType: "Pagev2-grid",
				Tooltip: "Test Page [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "SidePanels",
				Slug: "sidepanels_1",
				NodeType: "Sidepanel",
				Tooltip: "SidePanels [ Classic Side Panel ]",
				NodeState: "Collapsed",
				Icon: "icon-arrow-left7",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Dialog Pages",
				Slug: "dialog_pages",
				NodeType: "Dialog",
				Tooltip: "Dialog Pages [ Classic Dialog ]",
				NodeState: "Collapsed",
				Icon: "icon-popout",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);
});
