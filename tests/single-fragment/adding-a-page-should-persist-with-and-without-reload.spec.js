/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

// The idea of this test is that we want to prove that in changes to the 'application' widget
// persist both using WebUI navigation menu and after reload.
//
// We try to achieve this with the following steps:
//
// 1. Load a page
// 2. Add a page
// 3. Move to another page.
// 4. Move to the previous page.
// 5. Assert that the page is still there.
// 6. Reload the WebUI (still) in non-PRO mode.
// 7. Assert that the page is still there.
//
// This way, we prove in an e2e kind of way that both in-memory fragment and server were updated.
scenario("Pivoting a table in developer mode should persist both with and without reload", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Assert "Main Project/pietjepuk" page does not exists in App Manager.
	openAppManager()
		.getAppManagerInfo()
		.should.not.deep.include({
			Name: "pietjepuk",
			Slug: "pietjepuk",
			NodeType: "Pagev2-grid",
			Tooltip: "pietjepuk [ Page ]",
			NodeState: "Collapsed",
			Icon: "icon-grid6",
			IsNodeSelected: false,
			NodeHasHiddenIndication: false,
		});

	// Add "Main Project/pietjepuk" page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddPage()
		.enterName("pietjepuk");

	// Assert "Main Project/pietjepuk" page now exists in App Manager.
	getAppManager()
		.getAppManagerInfo()
		.should.deep.include({
			Name: "pietjepuk",
			Slug: "pietjepuk",
			NodeType: "Pagev2-grid",
			Tooltip: "pietjepuk [ Page ]",
			NodeState: "Collapsed",
			Icon: "icon-grid6",
			IsNodeSelected: false,
			NodeHasHiddenIndication: false,
		});

	// "Navigate away"
	getPageMenu().navigateToPage("Main Project/Charts");

	// "Wait until page has loaded"
	findWidget("Linechart").should.be.a.widgetOfType("linechart");

	// "Navigate back"
	getPageMenu().navigateToPage("Main Project/DisplayDomain");

	// Assert "Main Project/pietjepuk" page exists in App Manager.
	openAppManager()
		.getAppManagerInfo()
		.should.deep.include({
			Name: "pietjepuk",
			Slug: "pietjepuk",
			NodeType: "Pagev2-grid",
			Tooltip: "pietjepuk [ Page ]",
			NodeState: "Collapsed",
			Icon: "icon-grid6",
			IsNodeSelected: false,
			NodeHasHiddenIndication: false,
		});

	// Refresh the page
	pageRefresh();

	// Assert "Main Project/pietjepuk" page exists in App Manager.
	openAppManager()
		.getAppManagerInfo()
		.should.deep.include({
			Name: "pietjepuk",
			Slug: "pietjepuk",
			NodeType: "Pagev2-grid",
			Tooltip: "pietjepuk [ Page ]",
			NodeState: "Collapsed",
			Icon: "icon-grid6",
			IsNodeSelected: false,
			NodeHasHiddenIndication: false,
		});
});
