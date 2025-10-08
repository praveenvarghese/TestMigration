/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Through Widget Manager, adding few widgets on Regular and Grid-Layout pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/Test Page?_aimms_only_persistence.write=true");

		createWidget("scalar", ["Flag"], "tp_flag");
		createWidget("map", [], "tp_map");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/home");

		createWidget("scalar", ["Flag"], "home_flag");
		createWidget("map", [], "home_map");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Book Corner/öβå");

		createWidget("scalar", ["Flag"], "bc_flag");
		createWidget("map", [], "bc_map");

		// Open App Manager
		openAppManager();

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
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "öβå",
					Slug: "oeva",
					NodeType: "Page",
					Tooltip: "öβå [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: true,
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

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		// Unfold the pages of our interest
		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers([
				"Main Project/home",
				"Main Project/Book Corner/öβå",
				"Main Project/Test Page",
			]);

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
					WidgetsCount: "8",
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
					Name: "flagsonhome",
					Slug: "flagsonhome",
					NodeType: "Widget",
					Tooltip: "flagsonhome [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "home_flag",
					Slug: "home_flag",
					NodeType: "Widget",
					Tooltip: "home_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "home_map",
					Slug: "home_map",
					NodeType: "Widget",
					Tooltip: "home_map [ Widget ]",
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
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "öβå",
					Slug: "oeva",
					NodeType: "Page",
					Tooltip: "öβå [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "oeva-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "bc_flag",
					Slug: "bc_flag",
					NodeType: "Widget",
					Tooltip: "bc_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "bc_map",
					Slug: "bc_map",
					NodeType: "Widget",
					Tooltip: "bc_map [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Test Page",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Test Page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "10",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Book Legend1",
					Slug: "Book Legend1",
					NodeType: "Widget",
					Tooltip: "Book Legend1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Table1",
					Slug: "Book Table1",
					NodeType: "Widget",
					Tooltip: "Book Table1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Bars1",
					Slug: "Book Bars1",
					NodeType: "Widget",
					Tooltip: "Book Bars1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Second Book Bars1",
					Slug: "Second Book Bars1",
					NodeType: "Widget",
					Tooltip: "Second Book Bars1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Selected Book Set1",
					Slug: "Selected Book Set1",
					NodeType: "Widget",
					Tooltip: "Selected Book Set1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Cover1",
					Slug: "Book Cover1",
					NodeType: "Widget",
					Tooltip: "Book Cover1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Author Portrait1",
					Slug: "Author Portrait1",
					NodeType: "Widget",
					Tooltip: "Author Portrait1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					Tooltip: "Flags [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "tp_flag",
					Slug: "tp_flag",
					NodeType: "Widget",
					Tooltip: "tp_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "tp_map",
					Slug: "tp_map",
					NodeType: "Widget",
					Tooltip: "tp_map [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Custom Grid Page [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Classic Layout Page",
					Slug: "classic_layout_page",
					NodeType: "Page",
					Tooltip: "Classic Layout Page [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "A Grid Page But Hidden",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					Tooltip: "A Grid Page But Hidden [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
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
	}
);
