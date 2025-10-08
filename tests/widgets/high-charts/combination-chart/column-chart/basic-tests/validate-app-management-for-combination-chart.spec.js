/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether item actions work fine on a combination Chart", () => {
	loadPage(
		//"Main Project/AppManagementTests2&_aimms_only_persistence.write=true"
		"Main Project/AppManagementTests2"
	);

	// Open the App Manager.
	openAppManager();

	// Unfold Widget container of the "AppManagerTests" page
	getAppManager().unfoldWidgetContainers([
		"Main Project/AppManagementTests",
		"Main Project/AppManagementTests2",
	]);

	// Cut the CC1 widget of this page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests",
			widgetName: "CC1",
		})
		.clickOnCut();

	// Paste the cut widget onto the AppManagementTests2 page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests2",
		})
		.clickOnPasteWidget();

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "AppManagementTests",
				Slug: "appmanagementtests",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "0",
				Slug: "appmanagementtests-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "AppManagementTests2",
				Slug: "appmanagertests2",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests2 [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "appmanagertests2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "CC1",
				Slug: "CC1",
				NodeType: "Widget",
				Tooltip: "CC1 [ Widget ]",
				WidgetState: "",
			},
		]);

	// Copy (as opposed to cut) the CC1 widget of this page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests2",
			widgetName: "CC1",
		})
		.clickOnCopy();

	// Paste the copied widget onto the AppManagementTests1 page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests",
		})
		.clickOnPasteWidget();

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "AppManagementTests",
				Slug: "appmanagementtests",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "appmanagementtests-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "CC1 (1)",
				Slug: "CC1_1",
				NodeType: "Widget",
				Tooltip: "CC1 (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "AppManagementTests2",
				Slug: "appmanagertests2",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests2 [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "CC1",
				Slug: "CC1",
				NodeType: "Widget",
				Tooltip: "CC1 [ Widget ]",
				WidgetState: "",
			},
		]);

	// Rename the copied widget
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests",
			widgetName: "CC1_1",
		})
		.clickOnRename()
		.enterName("CC2")
		.pressKeys([SPECIAL_KEYS.enter]);

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "AppManagementTests",
				Slug: "appmanagementtests",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "appmanagementtests-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "CC2",
				Slug: "CC1_1",
				NodeType: "Widget",
				Tooltip: "CC2 [ Widget ]",
				WidgetState: "",
			},
		]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/AppManagementTests",
			widgetName: "CC1_1",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "AppManagementTests",
				Slug: "appmanagementtests",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "0",
				Slug: "appmanagementtests-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "AppManagementTests2",
				Slug: "appmanagertests2",
				NodeType: "Pagev2-grid",
				Tooltip: "AppManagementTests2 [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "appmanagertests2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "CC1",
				Slug: "CC1",
				NodeType: "Widget",
				Tooltip: "CC1 [ Widget ]",
				WidgetState: "",
			},
		]);
});
