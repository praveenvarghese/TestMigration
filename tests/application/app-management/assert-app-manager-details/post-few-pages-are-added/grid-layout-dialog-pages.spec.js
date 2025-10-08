/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Adding few Dialog Pages pages at different level, checking for data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddDialogPage()
			.enterName("MKG E2E Testing");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG E2E Testing",
			})
			.clickOnAddDialogPage()
			.enterName("MKG E2E Testing");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG E2E Testing",
			})
			.clickOnAddDialogPage()
			.enterName("12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~`");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG E2E Testing/MKG E2E Testing",
			})
			.clickOnAddDialogPage()
			.enterName("12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~`");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG E2E Testing",
			})
			.clickOnAddPage()
			.enterName("Grid Library Section");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.clickOnAddDialogPage()
			.enterName("Dialog under a Dialog page");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.clickOnAddSidepanelPage()
			.enterName("SidePanel under a Dialog page");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.clickOnAddPage()
			.enterName("Page under a Dialog page");

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
					NodeState: "Collapsed",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dialog under a Dialog page",
					Slug: "dialog_under_a_dialog_page",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Dialog under a Dialog page [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "SidePanel under a Dialog page",
					Slug: "sidepanel_under_a_dialog_page",
					NodeType: "Pagev2-grid-sidepanel",
					Tooltip: "SidePanel under a Dialog page [ Side Panel ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-sidepanel",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Page under a Dialog page",
					Slug: "page_under_a_dialog_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Page under a Dialog page [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "MKG E2E Testing [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "mkg_e_2_e_testing-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "MKG E2E Testing [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "mkg_e_2_e_testing_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~`",
					Slug: "12345_67890_usd_and_-_or_less_than_greater_than_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~` [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~`",
					Slug: "12345_67890_usd_and_-_or_less_than_greater_than",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~` [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Grid Library Section",
					Slug: "grid_library_section",
					NodeType: "Pagev2-grid",
					Tooltip: "Grid Library Section [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		pageRefresh();

		openAppManager().unfoldWidgetContainers([
			"Main Project/MKG E2E Testing",
			"Main Project/Dialog Pages",
		]);

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
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					Tooltip: "Help [ Classic Dialog ]",
					NodeState: "Collapsed",
					Icon: "icon-popout",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dialog under a Dialog page",
					Slug: "dialog_under_a_dialog_page",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Dialog under a Dialog page [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "SidePanel under a Dialog page",
					Slug: "sidepanel_under_a_dialog_page",
					NodeType: "Pagev2-grid-sidepanel",
					Tooltip: "SidePanel under a Dialog page [ Side Panel ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-sidepanel",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Page under a Dialog page",
					Slug: "page_under_a_dialog_page",
					NodeType: "Pagev2-grid",
					Tooltip: "Page under a Dialog page [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "MKG E2E Testing [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "mkg_e_2_e_testing-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "MKG E2E Testing [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~`",
					Slug: "12345_67890_usd_and_-_or_less_than_greater_than",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "12345 67890 !@#$ ^&*() _+-= [] {} \\| ;':\" ,.<>? ~` [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Grid Library Section",
					Slug: "grid_library_section",
					NodeType: "Pagev2-grid",
					Tooltip: "Grid Library Section [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);
	}
);
