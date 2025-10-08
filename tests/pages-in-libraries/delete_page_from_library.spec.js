/*!
 * @AIMMS_FILE=models/PILTestModel/PILTestModel.aimms
 */

scenario("Delete a page from a library and check that it works as expected.", () => {
	loadPage("Main Project/home");

	openAppManager().unfoldPageNodes(["MischaLib1/First Page"]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "MischaLib1/First Page",
		})
		.clickOnDelete()
		.actionYes()
		.click();

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
