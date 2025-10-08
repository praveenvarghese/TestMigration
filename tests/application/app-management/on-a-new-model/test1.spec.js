/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_ClassicLayout/ModelFromScratch1.aimms
 */

scenario(
	"On a new app, adding widgets to home and creating other page. Asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?aimms_only_persistence.write=true");

		// Open the App Manager.
		openAppManager();

		// Assert the information of App Manager Tree.
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
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
			]);

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
			]);

		// Create Few widgets
		createWidget("button", ["MainInitialization"], "Init");
		createWidget("Table", [], "BlankTable");

		pageRefresh();

		// Open the App Manager.
		openAppManager();

		// Assert the information of App Manager Tree.
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
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
			]);

		// Unfold the widget container of pages of our interest
		getAppManager().unfoldWidgetContainers(["Main Project/home"]);

		// Assert the information of App Manager Tree.
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
					WidgetsCount: "0",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "home-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddPage()
			.enterName("MKG E2E Testing");

		// Assert the information of App Manager Tree.
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
					WidgetsCount: "0",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid",
					Tooltip: "MKG E2E Testing [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "home-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/MKG E2E Testing");

		// Open the App Manager.
		openAppManager();

		// Assert the information of App Manager Tree.
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
					Name: "Widgets on page",
					WidgetsCount: "0",
					Slug: "home-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid",
					Tooltip: "MKG E2E Testing [ Page ]",
					NodeState: "Collapsed",
					Icon: "icon-grid6",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
			]);

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "home-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "MKG E2E Testing",
					Slug: "mkg_e_2_e_testing",
					NodeType: "Pagev2-grid",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
			]);
	}
);
