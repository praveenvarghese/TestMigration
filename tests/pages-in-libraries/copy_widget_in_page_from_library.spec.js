/*!
 * @AIMMS_FILE=models/PILTestModel/PILTestModel.aimms
 */

scenario("Copy a widget to a page in a library.", () => {
	loadPage("Main Project/home");

	openAppManager().unfoldPageNodes(["MischaLib1/First Page"]);
	getAppManager().unfoldWidgetContainers(["MischaLib1/First Page"]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "MischaLib1/First Page",
			widgetName: "Scal",
		})
		.clickOnCopy();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "MischaLib1/First Page",
		})
		.clickOnPasteWidget();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "MischaLib1/Second Page in Lib1",
		})
		.clickOnPasteWidget();

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
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "MischaLib1",
				Slug: "ml1::mischalib1",
				NodeType: "Pagev2-grid",
				Tooltip: "MischaLib1",
				NodeState: "Expanded",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Second Page in Lib1",
				Slug: "ml1::second_page_in_lib1",
				NodeType: "Pagev2-grid",
				Tooltip: "Second Page in Lib1 [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "1",
				Slug: "ml1::second_page_in_lib1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Scal (2)",
				Slug: "ml1::Scal_2",
				NodeType: "Widget",
				Tooltip: "Scal (2) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "First Page",
				Slug: "ml1::first_page",
				NodeType: "Pagev2-grid",
				Tooltip: "First Page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "5",
				Slug: "ml1::first_page-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "LV Renamed 莊子",
				Slug: "ml1::LV",
				NodeType: "Widget",
				Tooltip: "LV Renamed 莊子 [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Hop-Knop",
				Slug: "ml1::Hop-Knop",
				NodeType: "Widget",
				Tooltip: "Hop-Knop [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Scal",
				Slug: "ml1::Scal",
				NodeType: "Widget",
				Tooltip: "Scal [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Nog een",
				Slug: "ml1::Nog een",
				NodeType: "Widget",
				Tooltip: "Nog een [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Scal (1)",
				Slug: "ml1::Scal_1",
				NodeType: "Widget",
				Tooltip: "Scal (1) [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "Mischa Library 2",
				Slug: "ml2::mischa library 2",
				NodeType: "Pagev2-grid",
				Tooltip: "Mischa Library 2",
				NodeState: "Collapsed",
				Icon: "",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);
});
