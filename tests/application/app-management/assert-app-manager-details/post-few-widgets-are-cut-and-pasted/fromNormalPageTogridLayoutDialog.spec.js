/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario("Cut and paste widget from normal page to GL dialog page.", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Open App Manager
	openAppManager();

	// Copy a widget from current active Regular page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
			widgetName: "PepperData",
		})
		.clickOnCut();

	// Paste the copied widget to Standard layout and custom layout
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/FilterDialogPage v2",
		})
		.clickOnPasteWidget();

	getAppManager().unfoldWidgetContainers(["Main Project/FilterDialogPage v2"]);

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
				WidgetsCount: "13",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "UnitSwitch",
				Slug: "UnitSwitch",
				NodeType: "Widget",
				Tooltip: "UnitSwitch [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Pepper Heat Scale",
				Slug: "Pepper Heat Scale",
				NodeType: "Widget",
				Tooltip: "Pepper Heat Scale [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "SelectedPepperImage",
				Slug: "SelectedPepperImage",
				NodeType: "Widget",
				Tooltip: "SelectedPepperImage [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "ShuffleHeat",
				Slug: "ShuffleHeat",
				NodeType: "Widget",
				Tooltip: "ShuffleHeat [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "RipeScalar",
				Slug: "RipeScalar",
				NodeType: "Widget",
				Tooltip: "RipeScalar [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "UnitZooi",
				Slug: "UnitZooi",
				NodeType: "Widget",
				Tooltip: "UnitZooi [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "bubblr",
				Slug: "bubblr",
				NodeType: "Widget",
				Tooltip: "bubblr [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "test",
				Slug: "test",
				NodeType: "Widget",
				Tooltip: "test [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "OpenDialog",
				Slug: "OpenDialog",
				NodeType: "Widget",
				Tooltip: "OpenDialog [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "binaryTable",
				Slug: "binaryTable",
				NodeType: "Widget",
				Tooltip: "binaryTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "binaryTable_1",
				Slug: "binaryTable_1",
				NodeType: "Widget",
				Tooltip: "binaryTable_1 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "OpenDialogV2",
				Slug: "OpenDialogV2",
				NodeType: "Widget",
				Tooltip: "OpenDialogV2 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "OpenDialogV2_cust",
				Slug: "OpenDialogV2_cust",
				NodeType: "Widget",
				Tooltip: "OpenDialogV2_cust [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TablePage",
				Slug: "tablepage_1",
				NodeType: "Page",
				Tooltip: "TablePage [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage",
				Slug: "filterdialogpage_1",
				NodeType: "Dialog",
				Tooltip: "FilterDialogPage [ Classic Dialog ]",
				NodeState: "Collapsed",
				Icon: "icon-popout",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "newFilterPage",
				Slug: "newfilterpage_1",
				NodeType: "Page",
				Tooltip: "newFilterPage [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage v2",
				Slug: "filterdialogpage_v2",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 [ Dialog ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
				Slug: "filterdialogpage_v2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TableFilterDialog_v2",
				Slug: "TableFilterDialog_v2",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "PepperData",
				Slug: "PepperData",
				NodeType: "Widget",
				Tooltip: "PepperData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "FilterDialogPage v2 cust",
				Slug: "filterdialogpage_v2_cust",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 cust [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "EmptysStandardLayoutDialogPage",
				Slug: "emptysstandardlayoutdialogpage_1",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "EmptysStandardLayoutDialogPage [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "EmptyCustomLayoutDialogPage",
				Slug: "emptycustomlayoutdialogpage_1",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "EmptyCustomLayoutDialogPage [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openAppManager().navigateToPage("Main Project/FilterDialogPage v2");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["TableFilterDialog_v2"] },
			{ areaName: "Unassigned widgets", widgets: ["PepperData"] },
		]);

	pageRefresh();

	// Open App Manager
	openAppManager();

	getAppManager().unfoldWidgetContainers(["Main Project/FilterDialogPage v2"]);

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
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TablePage",
				Slug: "tablepage_1",
				NodeType: "Page",
				Tooltip: "TablePage [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage",
				Slug: "filterdialogpage_1",
				NodeType: "Dialog",
				Tooltip: "FilterDialogPage [ Classic Dialog ]",
				NodeState: "Collapsed",
				Icon: "icon-popout",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "newFilterPage",
				Slug: "newfilterpage_1",
				NodeType: "Page",
				Tooltip: "newFilterPage [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage v2",
				Slug: "filterdialogpage_v2",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 [ Dialog ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
				Slug: "filterdialogpage_v2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TableFilterDialog_v2",
				Slug: "TableFilterDialog_v2",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "PepperData",
				Slug: "PepperData",
				NodeType: "Widget",
				Tooltip: "PepperData [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "FilterDialogPage v2 cust",
				Slug: "filterdialogpage_v2_cust",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 cust [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "EmptysStandardLayoutDialogPage",
				Slug: "emptysstandardlayoutdialogpage_1",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "EmptysStandardLayoutDialogPage [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "EmptyCustomLayoutDialogPage",
				Slug: "emptycustomlayoutdialogpage_1",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "EmptyCustomLayoutDialogPage [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openAppManager().navigateToPage("Main Project/FilterDialogPage v2");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["TableFilterDialog_v2"] },
			{ areaName: "Unassigned widgets", widgets: ["PepperData"] },
		]);
});
