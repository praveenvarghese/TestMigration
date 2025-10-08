/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario("Page CRUD operation tests", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	// Assert there is no "Main Project/home/Page2" and "Main Project/Deliverables" pages in App-Manager
	openAppManager()
		.unfoldPageNodes(["Main Project/home"])
		.getAppManagerInfo()
		.should.not.include.something.like([
			{
				Name: "Page2",
				NodeType: "Pagev2-grid",
			},
			{
				Name: "Deliverables",
				NodeType: "Pagev2-grid",
			},
		]);

	// Assert there is no "Main Project/home/Page2" and "Main Project/Deliverables" pages in MenuBar
	getPageMenu().hasNotPages(["Main Project/Deliverables", "Main Project/home/Page2"]).should.be
		.true;
	// Close the Page Menu
	getPageMenu().closeMenu();

	// Add "Main Project/home/Page2" page through App-Manager
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddPage()
		.enterName("Deliverables");

	// Add "Main Project/home/Page2" page through App-Manager
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
		})
		.clickOnAddPage()
		.enterName("Page2");

	// Assert now there is "Main Project/home/Page2" and "Main Project/Deliverables" pages in App-Manager
	getAppManager()
		.unfoldPageNodes(["Main Project/home"])
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Page2",
				NodeType: "Pagev2-grid",
			},
			{
				Name: "Deliverables",
				NodeType: "Pagev2-grid",
			},
		]);

	// Assert now there is "Main Project/home/Page2" and "Main Project/Deliverables" pages in MenuBar
	getPageMenu().hasPages(["Main Project/Deliverables", "Main Project/home/Page2"]).should.be.true;

	// Refresh the page and assert the pages still exists in App-Manager and PageMenu
	pageRefresh();
	openAppManager()
		.unfoldPageNodes(["Main Project/home"])
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "Page2",
				NodeType: "Pagev2-grid",
			},
			{
				Name: "Deliverables",
				NodeType: "Pagev2-grid",
			},
		]);
	getPageMenu().hasPages(["Main Project/Deliverables", "Main Project/home/Page2"]).should.be.true;
	//Close the Page Menu
	getPageMenu().closeMenu();

	// Delete "Main Project/Deliverables" page.
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Deliverables",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	// Delete "Main Project/home/Page2" page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home/Page2",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	// Assert now there are no "Main Project/home/Page2" and "Main Project/Deliverables" pages in App-Manager
	getAppManager()
		.unfoldPageNodes(["Main Project/home"])
		.getAppManagerInfo()
		.should.not.include.something.like([
			{
				Name: "Page2",
				NodeType: "Pagev2-grid",
			},
			{
				Name: "Deliverables",
				NodeType: "Pagev2-grid",
			},
		]);

	// Assert now there are no "Main Project/home/Page2" and "Main Project/Deliverables" pages in Menubar
	getPageMenu().hasNotPages(["Main Project/Deliverables", "Main Project/home/Page2"]).should.be
		.true;

	// Refresh the page
	pageRefresh();
	openAppManager();

	// Post a page refresh, assert now there are no "Main Project/home/Page2" and "Main Project/Deliverables" pages in Menubar
	getPageMenu().hasNotPages(["Main Project/Deliverables", "Main Project/home/Page2"]).should.be
		.true;

	// Navigate to "Main Project/Step1/Step2/Step3" page and delete it
	openAppManager().navigateToPage("Main Project/Step1/Step2/Step3");
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Step1/Step2/Step3",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	// Assert now there are no "Main Project/Step1/Step2/Step3" pages in App-Manager
	getAppManager()
		.unfoldPageNodes(["Main Project/Step1/Step2"])
		.getAppManagerInfo()
		.should.not.include.something.like([
			{
				Name: "Step3",
				NodeType: "Pagev2-grid",
			},
		]);
});
