/*!
 * @AIMMS_FILE=models/PILTestModel/PILTestModel.aimms
 */

scenario("Creating a widget on a page in a library.", () => {
	loadPage("MischaLib1/First Page");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Hop-Knop"] },
			{ areaName: "Area B", widgets: ["LV Renamed 莊子"] },
			{ areaName: "Area C", widgets: ["Scal", "Nog een"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openAppManager().unfoldWidgetContainers(["MischaLib1/First Page"]);

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
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "First Page",
				Slug: "ml1::first_page",
				NodeType: "Pagev2-grid",
				Tooltip: "First Page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "4",
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

	openPageConfigurator().createWidget("scalar", ["Global1"], "Global1");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Hop-Knop"] },
			{ areaName: "Area B", widgets: ["LV Renamed 莊子"] },
			{ areaName: "Area C", widgets: ["Scal", "Nog een"] },
			{ areaName: "Unassigned widgets", widgets: ["Global1"] },
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
				NodeType: "Pagev2-grid",
				Tooltip: "home [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-home",
				IsNodeSelected: false,
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
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "First Page",
				Slug: "ml1::first_page",
				NodeType: "Pagev2-grid",
				Tooltip: "First Page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
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
				Name: "Global1",
				Slug: "ml1::Global1",
				NodeType: "Widget",
				Tooltip: "Global1 [ Widget ]",
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
