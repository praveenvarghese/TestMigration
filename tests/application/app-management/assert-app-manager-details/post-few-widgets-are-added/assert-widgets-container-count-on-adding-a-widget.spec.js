/*!
 * @AIMMS_FILE=models/Bugs/GLc3912-SmallExample/SmallExample.aimms
 */

scenario("Adding 1st widget to a page, and asseting the count on widget container node.", () => {
	loadPage("Main Project/translation_page");

	openAppManager().unfoldWidgetContainers(["Main Project/home", "Main Project/translation_page"]);

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
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets-Container",
				WidgetsCount: "1",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets-Container",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TimeTable",
				Slug: "TimeTable",
				NodeType: "Widget",
				Tooltip: "TimeTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "translation_page",
				Slug: "translation_page_1",
				NodeType: "Pagev2-grid",
				Tooltip: "translation_page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets-Container",
				WidgetsCount: "0",
				Slug: "translation_page_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets-Container",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	createWidget("map", [], "MapMyWorld");

	openAppManager().unfoldWidgetContainers(["Main Project/home", "Main Project/translation_page"]);

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
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets-Container",
				WidgetsCount: "1",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets-Container",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "TimeTable",
				Slug: "TimeTable",
				NodeType: "Widget",
				Tooltip: "TimeTable [ Widget ]",
				WidgetState: "",
			},
			{
				Name: "translation_page",
				Slug: "translation_page_1",
				NodeType: "Pagev2-grid",
				Tooltip: "translation_page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets-Container",
				WidgetsCount: "1",
				Slug: "translation_page_1-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets-Container",
				NodeState: "Expanded",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "MapMyWorld",
				Slug: "MapMyWorld",
				NodeType: "Widget",
				Tooltip: "MapMyWorld [ Widget ]",
				WidgetState: "",
			},
		]);
});
