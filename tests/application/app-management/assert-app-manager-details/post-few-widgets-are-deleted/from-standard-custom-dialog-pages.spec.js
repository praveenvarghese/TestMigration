/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario(
	"From App Manager, deleting few widgets of standard and custom layout Dialog Pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Open App Manager
		openAppManager();

		// Delete widget from a Standard Layout
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/FilterDialogPage v2",
				widgetName: "TableFilterDialog_v2",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager().navigateToPage("Main Project/FilterDialogPage v2");

		findWidget("filterdialogpage_v2")
			.getWidgetAreas()
			.should.include.something.like([{ areaName: "Area A", widgets: [] }]);

		// Delete from Custom layout
		getAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

		// Delete widget from current active Sidepanel page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/FilterDialogPage v2 cust",
				widgetName: "TableFilterDialog_v2_cust",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		findWidget("filterdialogpage_v2_cust")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		// Assert data on App Manager
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
					WidgetsCount: "0",
					Slug: "filterdialogpage_v2_cust-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
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

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		getAppManager().navigateToPage("Main Project/FilterDialogPage v2");

		findWidget("filterdialogpage_v2")
			.getWidgetAreas()
			.should.include.something.like([{ areaName: "Area A", widgets: [] }]);

		// Delete from Custom layout
		getAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

		findWidget("filterdialogpage_v2_cust")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		// // Unfold the pages of our interest
		getAppManager().unfoldPageNodes([
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
					WidgetsCount: "0",
					Slug: "filterdialogpage_v2_cust-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
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
	}
);
