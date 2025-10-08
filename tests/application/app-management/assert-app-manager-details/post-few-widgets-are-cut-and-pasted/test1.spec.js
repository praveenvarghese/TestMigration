/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Having cut a widget from Regular Classic-Layout page, pasting it across multiple pages and then asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Open App Manager
		openAppManager();

		// Cut a widget from current active Regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "gfdgfd",
			})
			.clickOnCut();

		// Paste the cut widget back to same page.
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnPasteWidget();

		// Cut another widget from current page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "flagsonhome",
			})
			.clickOnCut();

		// Paste the cut widget to another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
			})
			.clickOnPasteWidget();

		// Cut a widget from another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
				widgetName: "Mooietekst",
			})
			.clickOnCut();

		// Paste the cut widget to current page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
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
					Name: "gfdgfd",
					Slug: "gfdgfd",
					NodeType: "Widget",
					Tooltip: "gfdgfd [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Mooietekst",
					Slug: "Mooietekst",
					NodeType: "Widget",
					Tooltip: "Mooietekst [ Widget ]",
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
					WidgetsCount: "3",
					Slug: "mischapage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Headertje",
					Slug: "Headertje",
					NodeType: "Widget",
					Tooltip: "Headertje [ Widget ]",
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
					Name: "flagsonhome",
					Slug: "flagsonhome",
					NodeType: "Widget",
					Tooltip: "flagsonhome [ Widget ]",
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
	}
);
