/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Drag and dropping pages across App Manager. Asserting the data seen.", () => {
	loadPage("Main Project/home");

	// Open App Manager
	openAppManager();

	getAppManager()
		.collapseAllNodes()
		.unfoldPageNodes(["Main Project/home"]);

	// Drag a page, drop it as a child of its sibling
	getAppManager()
		.dragPage({ pagePath: "Main Project/Another Page" })
		.asChildOf({ pagePath: "Main Project/home" });

	getAppManager()
		.collapseAllNodes()
		.unfoldPageNodes(["Main Project/home/Another Page"]);

	// Assert the details on App Manager
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
				WidgetsCount: "6",
				Slug: "home-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Another Page",
				Slug: "another_page",
				NodeType: "Page",
				Tooltip: "Another Page [ Classic Page ]",
				NodeState: "Expanded",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Widgets on page",
				WidgetsCount: "3",
				Slug: "another_page-widget-container",
				NodeType: "Container",
				Tooltip: "Widgets on page",
				NodeState: "Collapsed",
				Icon: "aimms-cube2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Button Page",
				Slug: "button_page",
				NodeType: "Page",
				Tooltip: "Button Page [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Book Corner",
				Slug: "wh_subpage",
				NodeType: "Page",
				Tooltip: "Book Corner [ Classic Page ]",
				NodeState: "Collapsed",
				Icon: "icon-file2",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Test Page",
				Slug: "test_page",
				NodeType: "Pagev2-grid",
				Tooltip: "Test Page [ Page ]",
				NodeState: "Collapsed",
				Icon: "icon-grid6",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "SidePanels",
				Slug: "sidepanels_1",
				NodeType: "Sidepanel",
				Tooltip: "SidePanels [ Classic Side Panel ]",
				NodeState: "Collapsed",
				Icon: "icon-arrow-left7",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
			{
				Name: "Dialog Pages",
				Slug: "dialog_pages",
				NodeType: "Dialog",
				Tooltip: "Dialog Pages [ Classic Dialog ]",
				NodeState: "Collapsed",
				Icon: "icon-popout",
				IsNodeSelected: false,
				NodeHasHiddenIndication: false,
			},
		]);
});
