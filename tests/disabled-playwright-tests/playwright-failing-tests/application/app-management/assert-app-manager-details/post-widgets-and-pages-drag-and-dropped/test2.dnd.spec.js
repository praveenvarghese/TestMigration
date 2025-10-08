/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Drag widgets from current page to other pages. Asserting the data on App Manager.",
	() => {
		loadPage("Main Project/home");

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home", "Main Project/Another Page"]);

		// Drag a widget from current page to another page
		getAppManager()
			.dragWidget({ pagePath: "Main Project/home", widgetName: "gfdgfd" })
			.toPage({ pagePath: "Main Project/Another Page" });

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/home", "Main Project/Another Page"]);

		// Assert the details on App Manager
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
					WidgetsCount: "5",
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
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "another_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ImportTable",
					Slug: "ImportTable",
					NodeType: "Widget",
					Tooltip: "ImportTable [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Selected Country",
					Slug: "Selected Country",
					NodeType: "Widget",
					Tooltip: "Selected Country [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "CalendarTableNowWorkingReally",
					Slug: "CalendarTableNowWorkingReally",
					NodeType: "Widget",
					Tooltip: "CalendarTableNowWorkingReally [ Widget ]",
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
