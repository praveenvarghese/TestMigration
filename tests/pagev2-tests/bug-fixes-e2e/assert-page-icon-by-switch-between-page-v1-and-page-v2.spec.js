/*!
 * @AIMMS_FILE=models/PageV2/HumanAnatomyv2/HumanAnatomy.aimms
 */

scenario("Switch between page v1 and page v2 and validate page icon", () => {
	loadPage("Main Project/test-identifier-specification");

	// Assert Information on each of the pages listed on App Manager
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
			{
				Name: "main dp v2",
				Slug: "main_dp_v2",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "main dp v2 [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openPageConfigurator().selectStandardLayoutsSection();

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
			{
				Name: "main dp v2",
				Slug: "main_dp_v2",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "main dp v2 [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);

	openPageConfigurator().selectStandardLayoutsSection();

	openPageConfigurator().selectLayout("Layout: classic");

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
				NodeType: "Page",
				Tooltip: "test-identifier-specification [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: true,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "main dp v2",
				Slug: "main_dp_v2",
				NodeType: "Pagev2-grid-dialog",
				Tooltip: "main dp v2 [ Dialog ]",
				NodeState: "Collapsed",
				Icon: "pagev2-grid-dialog",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);
});
