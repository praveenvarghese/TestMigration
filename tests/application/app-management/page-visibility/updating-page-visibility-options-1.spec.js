/*!
 * @AIMMS_FILE=models/PageV2/InvisibleWidgets/InvisibleWidgets.aimms
 */

scenario(
	"Updating Visibility options for few Regular pages, setting them to literal and identifier. Asserting the visibility indication on pages listed on App Manager.",
	() => {
		loadPage("Main Project/Factories?_aimms_only_persistence.write=true");

		// Reset the test data
		findWidget("Set Flag False").click();

		// Open App Manager
		openAppManager();

		// Update Visibility options on current page
		// ToDo: Bug in product. When an identifier is set for visibility option. It is not reflected immediately, unless a refresh is made.
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories",
			})
			.clickOnVisibility()
			.setValue({ value: "Flag", optionValueType: "IDENTIFIER" });

		// Update Visibility options on few of Regular pages
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/North America",
			})
			.clickOnVisibility()
			.setValue({ value: "0", optionValueType: "LITERAL" });

		// ToDo: Here the value is not cleared off. To be fixed later!
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/South America",
			})
			.clickOnVisibility()
			.clearValue();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/South America/Brazil",
			})
			.clickOnVisibility()
			.setValue({ value: "0", optionValueType: "LITERAL" });

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/Europe",
			})
			.clickOnVisibility()
			.setValue({ value: "Flag", optionValueType: "IDENTIFIER" });

		// With few pages having Visibility option set through literal and "Flag" identifier.
		// Assert the information shown on App Manager.
		//Need to correct the tests once these tickets are fixed #3278 & #3276
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
					NodeType: "Pagev2-grid",
					Tooltip: "home [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Factories",
					Slug: "factories_1",
					NodeType: "Page",
					Tooltip: "Factories [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: true,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "factories_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Europe",
					Slug: "europe_1",
					NodeType: "Page",
					Tooltip: "Europe [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "North America",
					Slug: "north_america",
					NodeType: "Page",
					Tooltip: "North America [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "South America",
					Slug: "south_america",
					NodeType: "Page",
					Tooltip: "South America [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "south_america-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Brazil",
					Slug: "brazil_1",
					NodeType: "Page",
					Tooltip: "Brazil [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Asia",
					Slug: "asia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Asia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Australia",
					Slug: "australia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Australia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Dialogs",
					Slug: "dialogs_1",
					NodeType: "Dialog",
					Tooltip: "Dialogs [ Classic Dialog ]",
					NodeState: "Collapsed",
					Icon: "icon-popout",
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
					Name: "GridPage",
					Slug: "gridpage_1",
					NodeType: "Pagev2-grid",
					Tooltip: "GridPage [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridDialogPage",
					Slug: "griddialogpage_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "GridDialogPage [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridSidePanelPage",
					Slug: "gridsidepanelpage_1",
					NodeType: "Pagev2-grid-sidepanel",
					Tooltip: "GridSidePanelPage [ Side Panel ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-sidepanel",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		// Change the Flag identifier value to True.
		findWidget("Set Flag True").click();

		// With few pages having Visibility option set through literal and "Flag" identifier.
		// Assert the information shown on App Manager.
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
					NodeType: "Pagev2-grid",
					Tooltip: "home [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Factories",
					Slug: "factories_1",
					NodeType: "Page",
					Tooltip: "Factories [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "factories_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Europe",
					Slug: "europe_1",
					NodeType: "Page",
					Tooltip: "Europe [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "North America",
					Slug: "north_america",
					NodeType: "Page",
					Tooltip: "North America [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "South America",
					Slug: "south_america",
					NodeType: "Page",
					Tooltip: "South America [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "south_america-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Brazil",
					Slug: "brazil_1",
					NodeType: "Page",
					Tooltip: "Brazil [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Asia",
					Slug: "asia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Asia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Australia",
					Slug: "australia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Australia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dialogs",
					Slug: "dialogs_1",
					NodeType: "Dialog",
					Tooltip: "Dialogs [ Classic Dialog ]",
					NodeState: "Collapsed",
					Icon: "icon-popout",
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
					Name: "GridPage",
					Slug: "gridpage_1",
					NodeType: "Pagev2-grid",
					Tooltip: "GridPage [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridDialogPage",
					Slug: "griddialogpage_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "GridDialogPage [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridSidePanelPage",
					Slug: "gridsidepanelpage_1",
					NodeType: "Pagev2-grid-sidepanel",
					Tooltip: "GridSidePanelPage [ Side Panel ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-sidepanel",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		// Unfold the pages of our interest
		getAppManager().unfoldPageNodes([
			"Main Project/Factories/South America",
			"Main Project/Factories/North America",
		]);

		// With few pages having Visibility option set through literal and "Flag" identifier.
		// Assert the information shown on App Manager.
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
					NodeType: "Pagev2-grid",
					Tooltip: "home [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Factories",
					Slug: "factories_1",
					NodeType: "Page",
					Tooltip: "Factories [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "4",
					Slug: "factories_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Europe",
					Slug: "europe_1",
					NodeType: "Page",
					Tooltip: "Europe [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "North America",
					Slug: "north_america",
					NodeType: "Page",
					Tooltip: "North America [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "north_america-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "USA",
					Slug: "usa_1",
					NodeType: "Pagev2-grid",
					Tooltip: "USA [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Mexico",
					Slug: "mexico_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Mexico [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "South America",
					Slug: "south_america",
					NodeType: "Page",
					Tooltip: "South America [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "south_america-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Brazil",
					Slug: "brazil_1",
					NodeType: "Page",
					Tooltip: "Brazil [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-file2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: true,
				},
				{
					Name: "Asia",
					Slug: "asia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Asia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Australia",
					Slug: "australia_1",
					NodeType: "Pagev2-grid",
					Tooltip: "Australia [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dialogs",
					Slug: "dialogs_1",
					NodeType: "Dialog",
					Tooltip: "Dialogs [ Classic Dialog ]",
					NodeState: "Collapsed",
					Icon: "icon-popout",
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
					Name: "GridPage",
					Slug: "gridpage_1",
					NodeType: "Pagev2-grid",
					Tooltip: "GridPage [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridDialogPage",
					Slug: "griddialogpage_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "GridDialogPage [ Dialog ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "GridSidePanelPage",
					Slug: "gridsidepanelpage_1",
					NodeType: "Pagev2-grid-sidepanel",
					Tooltip: "GridSidePanelPage [ Side Panel ]",
					NodeState: "Collapsed",
					Icon: "pagev2-grid-sidepanel",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);
	}
);
