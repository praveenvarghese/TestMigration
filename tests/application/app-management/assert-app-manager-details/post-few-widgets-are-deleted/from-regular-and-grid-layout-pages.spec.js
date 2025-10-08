/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"From App Manager, deleting few widgets of Regular and Grid-Layout pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Open App Manager
		openAppManager();

		// Delete widget from current active Regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "gfdgfd",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Delete another widget from current active Regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "Groupie1",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Delete widget from another Regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
				widgetName: "Headertje",
			})
			.clickOnDelete()
			.actionYes()
			.click();

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
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "mischapage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Mooietekst",
					Slug: "Mooietekst",
					NodeType: "Widget",
					Tooltip: "Mooietekst [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Plaatje",
					Slug: "Plaatje",
					NodeType: "Widget",
					Tooltip: "Plaatje [ Widget ]",
					WidgetState: "",
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

		// Delete widget from a Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Selected Book Set1",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Navigate to a Grid-Layout page
		getAppManager().navigateToPage("Main Project/Test Page/Custom Grid Page");

		getAppManager().collapseAllNodes();

		// Delete widget from current active Grid-Layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
				widgetName: "Aantal Hoofdstukken",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Unfold the pages of our interest
		getAppManager().unfoldPageNodes(["Main Project/home", "Main Project/Book Corner/WH"]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/home",
			"Main Project/Book Corner/WH",
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
					WidgetsCount: "4",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "mischapage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Mooietekst",
					Slug: "Mooietekst",
					NodeType: "Widget",
					Tooltip: "Mooietekst [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Plaatje",
					Slug: "Plaatje",
					NodeType: "Widget",
					Tooltip: "Plaatje [ Widget ]",
					WidgetState: "",
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
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "7",
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
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Custom Grid Page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "custom_grid_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		// Unfold the pages of our interest
		getAppManager().unfoldPageNodes(["Main Project/home", "Main Project/Book Corner/WH"]);

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
					WidgetsCount: "4",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
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
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "mischapage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
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
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "7",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Custom Grid Page [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: true,
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
