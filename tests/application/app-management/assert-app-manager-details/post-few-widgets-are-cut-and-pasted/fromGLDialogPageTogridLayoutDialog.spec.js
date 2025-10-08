/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario("Cut and paste widget from GL dialog page to GL dialog page.", () => {
	loadPage("Main Project/FilterDialogPage v2?_aimms_only_persistence.write=true");

	// Open App Manager
	openAppManager();

	// Copy a widget from current active Regular page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/FilterDialogPage v2",
			widgetName: "TableFilterDialog_v2",
		})
		.clickOnCut();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/FilterDialogPage v2 cust",
		})
		.clickOnPasteWidget();

	getAppManager().unfoldWidgetContainers([
		"Main Project/FilterDialogPage v2",
		"Main Project/FilterDialogPage v2 cust",
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
				WidgetsCount: "0",
				Slug: "filterdialogpage_v2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage v2 cust",
				Slug: "filterdialogpage_v2_cust",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 cust [ Dialog ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
				Slug: "filterdialogpage_v2_cust-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TableFilterDialog_v2_cust",
				Slug: "TableFilterDialog_v2_cust",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2_cust [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TableFilterDialog_v2",
				Slug: "TableFilterDialog_v2",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2 [ Widget ]",
				WidgetState: "",
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
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["TableFilterDialog_v2_cust"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["TableFilterDialog_v2"] },
		]);

	pageRefresh();

	// Open App Manager
	openAppManager();

	getAppManager().unfoldWidgetContainers([
		"Main Project/FilterDialogPage v2",
		"Main Project/FilterDialogPage v2 cust",
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
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "0",
				Slug: "filterdialogpage_v2-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "FilterDialogPage v2 cust",
				Slug: "filterdialogpage_v2_cust",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "FilterDialogPage v2 cust [ Dialog ]",
				NodeState: "Expanded",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "2",
				Slug: "filterdialogpage_v2_cust-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TableFilterDialog_v2_cust",
				Slug: "TableFilterDialog_v2_cust",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2_cust [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "TableFilterDialog_v2",
				Slug: "TableFilterDialog_v2",
				NodeType: "Widget",
				Tooltip: "TableFilterDialog_v2 [ Widget ]",
				WidgetState: "",
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
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["TableFilterDialog_v2_cust"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["TableFilterDialog_v2"] },
		]);
});
