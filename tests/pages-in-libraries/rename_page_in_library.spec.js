/*!
 * @AIMMS_FILE=models/PILTestModel/PILTestModel.aimms
 */

scenario("Rename a page in a library and check that the rename functions as expected.", () => {
	loadPage("Main Project/home");

	openAppManager().unfoldPageNodes(["MischaLib1/First Page"]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "MischaLib1/First Page",
		})
		.clickOnRename()
		.enterName("Previously the First Page")
		.pressKeys([SPECIAL_KEYS.enter]);

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
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Previously the First Page",
				Slug: "ml1::first_page",
				NodeType: "Pagev2-grid",
				Tooltip: "Previously the First Page [ Page ]",
				NodeState: "Expanded",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "4",
				Slug: "ml1::first_page-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
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
