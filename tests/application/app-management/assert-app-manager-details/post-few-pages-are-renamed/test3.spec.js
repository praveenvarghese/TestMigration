/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"After renaming few Sidepanel and Dialog pages at top and child pages, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		openAppManager().unfoldWidgetContainers([
			"Main Project/SidePanels",
			"Main Project/Dialog Pages",
		]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels/MKG",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze/Help",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages/Help",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souzy")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.clickOnRename()
			.enterName("āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souzy",
			})
			.clickOnRename()
			.enterName("Dialog Pages")
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Side Panel ]",
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "help_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Side Panel ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
					Slug: "mkg_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Dialog ]",
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
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
					Name: "Dialog Pages",
					Slug: "help_2",
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

		// Open the App Manager. Unfold the renamed Sidepanel and Dialog pages
		openAppManager().unfoldWidgetContainers([
			"Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
			"Main Project/āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
		]);

		// Assert the info seen on App Manager
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
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Side Panel ]",
					NodeState: "Expanded",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze",
					Slug: "help_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souze [ Classic Side Panel ]",
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
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥",
					Slug: "mkg_1",
					NodeType: "Sidepanel",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ [ Classic Side Panel ]",
					NodeState: "Collapsed",
					Icon: "icon-arrow-left7",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					Tooltip: "āæśṣḍ ēr̥ṅṭñḥ ṇṁūīōl̥ D'Souza [ Classic Dialog ]",
					NodeState: "Expanded",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
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
					Name: "Dialog Pages",
					Slug: "help_2",
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
