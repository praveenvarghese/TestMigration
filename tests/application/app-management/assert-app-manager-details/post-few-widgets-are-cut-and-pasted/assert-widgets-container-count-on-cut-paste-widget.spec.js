/*!
 * @AIMMS_FILE=models/Bugs/GLc3912-SmallExample/SmallExample.aimms
 */

scenario(
	"Cutting a widget from a page and pasting it to another page. Asserting the count on widget container node.",
	() => {
		loadPage("Main Project/home");

		openAppManager().unfoldWidgetContainers([
			"Main Project/home",
			"Main Project/translation_page",
		]);

		// Cut a widget from current active page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "TimeTable",
			})
			.clickOnCut();

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
					WidgetState: "cut",
				},
				{
					Name: "translation_page",
					Slug: "translation_page_1",
					NodeType: "Pagev2-grid",
					Tooltip: "translation_page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
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

		// Paste the cut-widget to another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/translation_page",
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
					NodeType: "Page",
					Tooltip: "home [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-home",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets-Container",
					WidgetsCount: "0",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets-Container",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "translation_page",
					Slug: "translation_page_1",
					NodeType: "Pagev2-grid",
					Tooltip: "translation_page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
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
					Name: "TimeTable",
					Slug: "TimeTable",
					NodeType: "Widget",
					Tooltip: "TimeTable [ Widget ]",
					WidgetState: "",
				},
			]);

		// Cut a widget from another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/translation_page",
				widgetName: "TimeTable",
			})
			.clickOnCut();

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
					Name: "Widgets-Container",
					WidgetsCount: "0",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets-Container",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "translation_page",
					Slug: "translation_page_1",
					NodeType: "Pagev2-grid",
					Tooltip: "translation_page [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
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
					Name: "TimeTable",
					Slug: "TimeTable",
					NodeType: "Widget",
					Tooltip: "TimeTable [ Widget ]",
					WidgetState: "cut",
				},
			]);

		// Paste the cut-widget to current page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
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
					NodeType: "Page",
					Tooltip: "home [ Classic Page ]",
					NodeState: "Expanded",
					Icon: "icon-home",
					IsNodeSelected: true,
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
					IsNodeSelected: false,
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
	}
);
