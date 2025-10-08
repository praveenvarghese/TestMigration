/*!
 * @AIMMS_FILE=models/Bugs/GLc3912-SmallExample/SmallExample.aimms
 */

scenario(
	"With translation applied to 'Widgets on Page' text. Asserting the data as seen on App Manager.",
	() => {
		loadPage("Main Project/home");

		openAppManager().unfoldWidgetContainers([
			"Main Project/home",
			"Main Project/translation_page",
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

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddDialogPage()
			.enterName("MKG GL-DP")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnAddPage()
			.enterName("MKG GL-P")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager().unfoldWidgetContainers([
			"Main Project/home/MKG GL-P",
			"Main Project/MKG GL-DP",
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
					Name: "MKG GL-P",
					Slug: "mkg_gl-p",
					NodeType: "Pagev2-grid",
					Tooltip: "MKG GL-P [ Page ]",
					NodeState: "Expanded",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets-Container",
					WidgetsCount: "0",
					Slug: "mkg_gl-p-widget-container",
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
					WidgetsCount: "0",
					Slug: "translation_page_1-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets-Container",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG GL-DP",
					Slug: "mkg_gl-dp",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "MKG GL-DP [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets-Container",
					WidgetsCount: "0",
					Slug: "mkg_gl-dp-widget-container",
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
