/*!
 * @AIMMS_FILE=models/HumanAnatomy/HumanAnatomy.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Convert pagev1 to custom,standard layout page v2 and validate tooltip and icon", () => {
	loadPage("Main Project/test-identifier-specification");

	// Assert Information on each of the page's listed on Page Manager
	openAppManager()
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
				Name: "test-identifier-specification",
				Slug: "new_page",
				NodeType: "Page",
				Tooltip: "test-identifier-specification [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
		]);

	openPageConfigurator().selectLayout("CustomLayout", "true");

	closePageConfigurator();

	openAppManager()
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
				Name: "test-identifier-specification",
				Slug: "new_page",
				NodeType: "Pagev2-grid",
				Tooltip: "test-identifier-specification [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
		]);

	loadPage("Main Project/test-identifier-specification");

	openPageConfigurator().selectLayout("Layout 6");

	closePageConfigurator();

	openAppManager()
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
				Name: "test-identifier-specification",
				Slug: "new_page",
				NodeType: "Pagev2-grid",
				Tooltip: "test-identifier-specification [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
		]);

	loadPage("Main Project/home");

	// Assert Information on each of the page's listed on Page Manager
	openAppManager()
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
			{
				Name: "test-identifier-specification",
				Slug: "new_page",
				NodeType: "Page",
				Tooltip: "test-identifier-specification [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openPageConfigurator().selectLayout("Layout 1");

	closePageConfigurator();

	openAppManager()
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
				Name: "test-identifier-specification",
				Slug: "new_page",
				NodeType: "Page",
				Tooltip: "test-identifier-specification [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);
});
