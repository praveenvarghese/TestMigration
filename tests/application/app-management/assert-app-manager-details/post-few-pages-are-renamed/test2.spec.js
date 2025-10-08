/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"After renaming few grid-layout pages at top and child pages, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		openAppManager().unfoldPageNodes(["Main Project/Test Page"]);

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza/Custom Grid Page",
			})
			.clickOnRename()
			.enterName("Renamed Custom Grid Page")
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Page ]",
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
					Name: "Renamed Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Renamed Custom Grid Page [ Page ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Page ]",
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

		pageRefresh();

		openAppManager().unfoldPageNodes(["Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza"]);

		getAppManager().unfoldWidgetContainers(["Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza"]);

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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Page ]",
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
					Name: "Renamed Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Renamed Custom Grid Page [ Page ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Page ]",
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
