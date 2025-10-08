/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"After renaming few widgets on grid-layout page, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Open the App Manager.
		openAppManager();

		// Renaming a widget with special characters
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
				widgetName: "Map",
			})
			.clickOnRename()
			.enterName("Globe āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Renaming another widget on a grid-layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Cover1",
			})
			.clickOnRename()
			.enterName("Book Cover 1")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Renaming another widget on a grid-layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Legend1",
			})
			.clickOnRename()
			.enterName("Book Legend")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Renaming another widget on a grid-layout page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Table1",
			})
			.clickOnRename()
			.enterName("Book Table")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Again renaming an earlier renamed widget
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Cover1",
			})
			.clickOnRename()
			.enterName("Book Cover")
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
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: true,
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
					IsNodeSelected: false,
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
					Name: "Book Legend (1)",
					Slug: "Book Legend1",
					NodeType: "Widget",
					Tooltip: "Book Legend (1) [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "Book Table (1)",
					Slug: "Book Table1",
					NodeType: "Widget",
					Tooltip: "Book Table (1) [ Widget ]",
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
					Name: "Book Cover (1)",
					Slug: "Book Cover1",
					NodeType: "Widget",
					Tooltip: "Book Cover (1) [ Widget ]",
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
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "a_grid_page_but_hidden-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Data",
					Slug: "Data",
					NodeType: "Widget",
					Tooltip: "Data [ Widget ]",
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
					Name: "Globe āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
					Slug: "Map",
					NodeType: "Widget",
					Tooltip: "Globe āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Widget ]",
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

		pageRefresh();

		// Open the App Manager.
		openAppManager().unfoldPageNodes(["Main Project/Test Page/A Grid Page But Hidden"]);

		openAppManager().unfoldWidgetContainers(["Main Project/Test Page/A Grid Page But Hidden"]);

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
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: true,
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
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "8",
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
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "a_grid_page_but_hidden-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Data",
					Slug: "Data",
					NodeType: "Widget",
					Tooltip: "Data [ Widget ]",
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
					Name: "Globe āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
					Slug: "Map",
					NodeType: "Widget",
					Tooltip: "Globe āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Widget ]",
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
	}
);
