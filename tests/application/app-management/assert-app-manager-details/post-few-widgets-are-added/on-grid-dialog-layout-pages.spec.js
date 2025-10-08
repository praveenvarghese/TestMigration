/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario(
	"Through Widget Manager, adding few widgets on Standard Grid-Layout pages. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/EmptysStandardLayoutDialogPage?_aimms_only_persistence.write=true");

		createWidget("scalar", ["ShowUnits"], "ShowUnits");
		createWidget("map", [], "EmptyMap");

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/EmptysStandardLayoutDialogPage"]);

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
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "emptysstandardlayoutdialogpage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ShowUnits",
					Slug: "ShowUnits",
					NodeType: "Widget",
					Tooltip: "ShowUnits [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
					WidgetState: "",
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

		getAppManager().navigateToPage("Main Project/EmptyCustomLayoutDialogPage");

		createWidget("scalar", ["ShowUnits"], "ShowUnits1");
		createWidget("map", [], "EmptyMap1");

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/EmptyCustomLayoutDialogPage"]);

		getAppManager().unfoldWidgetContainers(["Main Project/EmptysStandardLayoutDialogPage"]);

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
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "emptysstandardlayoutdialogpage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ShowUnits",
					Slug: "ShowUnits",
					NodeType: "Widget",
					Tooltip: "ShowUnits [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyCustomLayoutDialogPage",
					Slug: "emptycustomlayoutdialogpage_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "EmptyCustomLayoutDialogPage [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "emptycustomlayoutdialogpage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ShowUnits1",
					Slug: "ShowUnits1",
					NodeType: "Widget",
					Tooltip: "ShowUnits1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap1",
					Slug: "EmptyMap1",
					NodeType: "Widget",
					Tooltip: "EmptyMap1 [ Widget ]",
					WidgetState: "",
				},
			]);

		// Refresh the page
		pageRefresh();

		// Open App Manager
		openAppManager();

		getAppManager()
			.collapseAllNodes()
			.unfoldWidgetContainers(["Main Project/EmptysStandardLayoutDialogPage"]);

		getAppManager().unfoldWidgetContainers(["Main Project/EmptyCustomLayoutDialogPage"]);

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
					NodeState: "Collapsed",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
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
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "emptysstandardlayoutdialogpage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ShowUnits",
					Slug: "ShowUnits",
					NodeType: "Widget",
					Tooltip: "ShowUnits [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap",
					Slug: "EmptyMap",
					NodeType: "Widget",
					Tooltip: "EmptyMap [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyCustomLayoutDialogPage",
					Slug: "emptycustomlayoutdialogpage_1",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "EmptyCustomLayoutDialogPage [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "emptycustomlayoutdialogpage_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Expanded",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "ShowUnits1",
					Slug: "ShowUnits1",
					NodeType: "Widget",
					Tooltip: "ShowUnits1 [ Widget ]",
					WidgetState: "",
				},
				{
					Name: "EmptyMap1",
					Slug: "EmptyMap1",
					NodeType: "Widget",
					Tooltip: "EmptyMap1 [ Widget ]",
					WidgetState: "",
				},
			]);
	}
);
