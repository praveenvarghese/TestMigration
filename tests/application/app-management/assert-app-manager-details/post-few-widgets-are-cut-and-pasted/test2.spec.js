/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Having cut a widget from Grid-Layout page, pasting it across multiple pages and then asserting data on App Manager.",
	() => {
		loadPage("Main Project/Test Page?_aimms_only_persistence.write=true");

		// Open App Manager
		openAppManager();

		// Cut a widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Legend1",
			})
			.clickOnCut();

		// Paste the cut widget back to same page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
			})
			.clickOnPasteWidget();

		// Cut another widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Author Portrait1",
			})
			.clickOnCut();

		// Paste the cut widget to current page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
			})
			.clickOnPasteWidget();

		// Cut a widget from another Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
				widgetName: "Data1",
			})
			.clickOnCut();

		// Paste the cut widget to current page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
			})
			.clickOnPasteWidget();

		// Cut a widget from another Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
				widgetName: "Data",
			})
			.clickOnCut();

		// Paste the cut widget to another Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
			})
			.clickOnPasteWidget();

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
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "8",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					Tooltip: "Flags [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Legend1",
					Slug: "Book Legend1",
					NodeType: "Widget",
					Tooltip: "Book Legend1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Data1",
					Slug: "Data1",
					NodeType: "Widget",
					Tooltip: "Data1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Custom Grid Page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "6",
					Slug: "custom_grid_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Aantal Hoofdstukken",
					Slug: "Aantal Hoofdstukken",
					NodeType: "Widget",
					Tooltip: "Aantal Hoofdstukken [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "BC AantalWoorden",
					Slug: "BC AantalWoorden",
					NodeType: "Widget",
					Tooltip: "BC AantalWoorden [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "PC AantalHoofdstukken",
					Slug: "PC AantalHoofdstukken",
					NodeType: "Widget",
					Tooltip: "PC AantalHoofdstukken [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Booksdata",
					Slug: "Booksdata",
					NodeType: "Widget",
					Tooltip: "Booksdata [ Widget ]",
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
					Name: "Data",
					Slug: "Data",
					NodeType: "Widget",
					Tooltip: "Data [ Widget ]",
					WidgetState: "",
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
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "a_grid_page_but_hidden-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Map",
					Slug: "Map",
					NodeType: "Widget",
					Tooltip: "Map [ Widget ]",
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
		openAppManager().collapseAllNodes();

		// Cut a widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Table1",
			})
			.clickOnCut();

		// Paste the cut widget back to a Regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnPasteWidget();

		// Cut a widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Bars1",
			})
			.clickOnCut();

		// Paste the cut widget back to a SidePanel page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels",
			})
			.clickOnPasteWidget();

		// Cut a widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Second Book Bars1",
			})
			.clickOnCut();

		// Paste the cut widget back to a Dialog page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.clickOnPasteWidget();

		// Collapse all pages and unfold pages of our interest
		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home", "Main Project/Test Page"]);

		getAppManager().unfoldWidgetContainers(["Main Project/home", "Main Project/Test Page"]);

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
					WidgetsCount: "7",
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
					Name: "Book Table1",
					Slug: "Book Table1",
					NodeType: "Widget",
					Tooltip: "Book Table1 [ Widget ]",
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
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "5",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					Tooltip: "Flags [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Legend1",
					Slug: "Book Legend1",
					NodeType: "Widget",
					Tooltip: "Book Legend1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Data1",
					Slug: "Data1",
					NodeType: "Widget",
					Tooltip: "Data1 [ Widget ]",
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

		// Collapse all pages and unfold pages of our interest
		getAppManager()
			.collapseAllNodes()
			.unfoldPageNodes(["Main Project/SidePanels", "Main Project/Dialog Pages"]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/SidePanels",
			"Main Project/Dialog Pages",
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
					IsNodeSelected: true,
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
					WidgetsCount: "2",
					Slug: "sidepanels_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "SidePanels",
					Slug: "SidePanels",
					NodeType: "Widget",
					Tooltip: "SidePanels [ Widget ]",
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
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "AantalHoofdstukken_1",
					Slug: "AantalHoofdstukken_1",
					NodeType: "Widget",
					Tooltip: "AantalHoofdstukken_1 [ Widget ]",
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
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					Tooltip: "Help [ Classic Dialog ]",
					NodeState: "Collapsed",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);
	}
);
