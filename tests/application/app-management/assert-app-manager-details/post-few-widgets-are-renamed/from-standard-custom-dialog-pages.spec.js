/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario(
	"From App Manager, renaming few widgets of standard and custom layout Dialog Pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Open App Manager
		openAppManager();

		// Rename widget from a Standard Layout
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/FilterDialogPage v2",
				widgetName: "TableFilterDialog_v2",
			})
			.clickOnRename()
			.enterName("MKG 05061984")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Rename from Custom layout
		getAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/FilterDialogPage v2 cust",
				widgetName: "TableFilterDialog_v2_cust",
			})
			.clickOnRename()
			.enterName("Iñtërnâtiônàlizætiøn☃")
			.pressKeys([SPECIAL_KEYS.enter]);

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
					WidgetsCount: "1",
					Slug: "filterdialogpage_v2-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG 05061984",
					Slug: "TableFilterDialog_v2",
					NodeType: "Widget",
					Tooltip: "MKG 05061984 [ Widget ]",
					WidgetState: "",
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
					WidgetsCount: "1",
					Slug: "filterdialogpage_v2_cust-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Iñtërnâtiônàlizætiøn☃",
					Slug: "TableFilterDialog_v2_cust",
					NodeType: "Widget",
					Tooltip: "Iñtërnâtiônàlizætiøn☃ [ Widget ]",
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

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

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
					WidgetsCount: "1",
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
					WidgetsCount: "1",
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
