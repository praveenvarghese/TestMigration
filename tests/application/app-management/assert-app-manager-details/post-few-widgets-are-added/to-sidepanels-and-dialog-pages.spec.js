/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Through Widget Manager, adding few widgets on SidePanels and Dialog pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/SidePanels?_aimms_only_persistence.write=true");

		// While we are on a SidePanel page, add few widgets here.
		createWidget("scalar", ["Flag"], "sp_flag");
		createWidget("map", [], "sp_map");

		// Navigate to another SidePanel page
		openAppManager().navigateToPage("Main Project/SidePanels/Help");

		// While we are on another SidePanel page, add few widgets here.
		createWidget("scalar", ["Flag"], "hsp_flag");
		createWidget("map", [], "hsp_map");

		// Navigate to a Dialog page
		openAppManager().navigateToPage("Main Project/Dialog Pages/Help");

		// While we are on a Dialog page, add few widgets here.
		createWidget("scalar", ["Flag"], "hdp_flag");
		createWidget("map", [], "hdp_map");

		// Navigate to another Dialog page
		openAppManager().navigateToPage("Main Project/Dialog Pages");

		// While we are on another Dialog page, add few widgets here.
		createWidget("scalar", ["Flag"], "dp_flag");
		createWidget("map", [], "dp_map");

		// Open App Manager. Collapse all nodes.
		openAppManager().collapseAllNodes();

		// Unfold the pages of our interest
		getAppManager().unfoldPageNodes([
			"Main Project/SidePanels/Help",
			"Main Project/Dialog Pages/Help",
		]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/SidePanels/Help",
			"Main Project/Dialog Pages/Help",
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
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "sidepanels_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "KPIs",
					Slug: "kpis_1",
					NodeType: "Sidepanel",
					Tooltip: "KPIs [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Filters",
					Slug: "filters_1",
					NodeType: "Sidepanel",
					Tooltip: "Filters [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help",
					Slug: "help_1",
					NodeType: "Sidepanel",
					Tooltip: "Help [ Classic Side Panel ]",
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "help_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help Text",
					Slug: "Help Text",
					NodeType: "Widget",
					Tooltip: "Help Text [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hsp_flag",
					Slug: "hsp_flag",
					NodeType: "Widget",
					Tooltip: "hsp_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hsp_map",
					Slug: "hsp_map",
					NodeType: "Widget",
					Tooltip: "hsp_map [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "StoreFocus",
					Slug: "storefocus_1",
					NodeType: "Sidepanel",
					Tooltip: "StoreFocus [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG",
					Slug: "mkg_1",
					NodeType: "Sidepanel",
					Tooltip: "MKG [ Classic Side Panel ]",
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
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					Tooltip: "Help [ Classic Dialog ]",
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					Tooltip: "AllSidePanels [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					Tooltip: "BookCoverImage [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hdp_flag",
					Slug: "hdp_flag",
					NodeType: "Widget",
					Tooltip: "hdp_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hdp_map",
					Slug: "hdp_map",
					NodeType: "Widget",
					Tooltip: "hdp_map [ Widget ]",
					WidgetState: "",
				},
			]);

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		// Unfold the pages of our interest
		getAppManager().unfoldPageNodes([
			"Main Project/SidePanels/Help",
			"Main Project/Dialog Pages/Help",
		]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/SidePanels/Help",
			"Main Project/Dialog Pages/Help",
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
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "sidepanels_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "KPIs",
					Slug: "kpis_1",
					NodeType: "Sidepanel",
					Tooltip: "KPIs [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Filters",
					Slug: "filters_1",
					NodeType: "Sidepanel",
					Tooltip: "Filters [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help",
					Slug: "help_1",
					NodeType: "Sidepanel",
					Tooltip: "Help [ Classic Side Panel ]",
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "help_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help Text",
					Slug: "Help Text",
					NodeType: "Widget",
					Tooltip: "Help Text [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hsp_flag",
					Slug: "hsp_flag",
					NodeType: "Widget",
					Tooltip: "hsp_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hsp_map",
					Slug: "hsp_map",
					NodeType: "Widget",
					Tooltip: "hsp_map [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "StoreFocus",
					Slug: "storefocus_1",
					NodeType: "Sidepanel",
					Tooltip: "StoreFocus [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG",
					Slug: "mkg_1",
					NodeType: "Sidepanel",
					Tooltip: "MKG [ Classic Side Panel ]",
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
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					Tooltip: "Help [ Classic Dialog ]",
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					Tooltip: "AllSidePanels [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					Tooltip: "BookCoverImage [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hdp_flag",
					Slug: "hdp_flag",
					NodeType: "Widget",
					Tooltip: "hdp_flag [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "hdp_map",
					Slug: "hdp_map",
					NodeType: "Widget",
					Tooltip: "hdp_map [ Widget ]",
					WidgetState: "",
				},
			]);
	}
);
