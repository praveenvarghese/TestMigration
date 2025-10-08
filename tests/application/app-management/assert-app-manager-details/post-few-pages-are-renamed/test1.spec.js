/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"After renaming few regular pages at top and child pages, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		openAppManager().unfoldPageNodes([
			"Main Project/Button Page",
			"Main Project/Book Corner/WH",
			"Main Project/Book Corner/JE",
			"Main Project/Book Corner/öβå",
		]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/Button Page",
			"Main Project/Book Corner/WH",
			"Main Project/Book Corner/JE",
			"Main Project/Book Corner/öβå",
		]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/JE",
			})
			.clickOnRename()
			.enterName("MKG 05061984")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza/WH",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Button Page",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnRename()
			.enterName("Welcome Page")
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
					Name: "Welcome Page",
					Slug: "home",
					NodeType: "Page",
					Tooltip: "Welcome Page [ Classic Page ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "button_page",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "button_page-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MyButton",
					Slug: "MyButton",
					NodeType: "Widget",
					Tooltip: "MyButton [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "B2",
					Slug: "B2",
					NodeType: "Widget",
					Tooltip: "B2 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "B3",
					Slug: "B3",
					NodeType: "Widget",
					Tooltip: "B3 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "B4",
					Slug: "B4",
					NodeType: "Widget",
					Tooltip: "B4 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "wh_subpage",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Page ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "mischapage_1",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Page ]",
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
					Name: "MKG 05061984",
					Slug: "je_1",
					NodeType: "Page",
					Tooltip: "MKG 05061984 [ Classic Page ]",
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
					Name: "Header",
					Slug: "Header",
					NodeType: "Widget",
					Tooltip: "Header [ Widget ]",
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
					Name: "Scene",
					Slug: "Scene",
					NodeType: "Widget",
					Tooltip: "Scene [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "öβå",
					Slug: "oeva",
					NodeType: "Page",
					Tooltip: "öβå [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "oeva-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
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
					Name: "Welcome Page",
					Slug: "home",
					NodeType: "Page",
					Tooltip: "Welcome Page [ Classic Page ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "button_page",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "wh_subpage",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Page ]",
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
					Name: "Book Legend",
					Slug: "Book Legend",
					NodeType: "Widget",
					Tooltip: "Book Legend [ Widget ]",
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
					Name: "Second Book Bars",
					Slug: "Second Book Bars",
					NodeType: "Widget",
					Tooltip: "Second Book Bars [ Widget ]",
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
					Name: "Book Cover",
					Slug: "Book Cover",
					NodeType: "Widget",
					Tooltip: "Book Cover [ Widget ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "mischapage_1",
					NodeType: "Page",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG 05061984",
					Slug: "je_1",
					NodeType: "Page",
					Tooltip: "MKG 05061984 [ Classic Page ]",
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
