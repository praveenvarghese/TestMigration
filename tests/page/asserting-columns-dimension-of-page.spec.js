/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Page navigation config tests", () => {
	loadPage("Main Project/Page Links?e2e-onscreen-console=true&e2e-onscreen-monitor=true");

	// Verify page-layout of a default page. Assert it set of 14 columns.
	findWidget("new_page").hasPageColumns(14).should.be.true;

	// Set MaxColumns of the page to 10
	findWidget("new_page")
		.openMiscellaneousOptionEditor()
		.getMiscOption("maxcolumns")
		.setValue({
			value: "10",
		});

	// Assert page-layout is now of 0 columns.
	findWidget("new_page").hasPageColumns(10).should.be.true;

	// Create a new page and navigate to it.
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Page Links",
		})
		.clickOnAddPage()
		.enterName("MaxColumns Check");
	getPageMenu().navigateToPage("Main Project/Page Links/MaxColumns Check");

	openPageConfigurator().selectLayout("Layout: classic");

	// Assert page-layout is now of the default 14 columns.
	findWidget("maxcolumns_check").hasPageColumns(14).should.be.true;

	//Close the Page Manager and assert the page-layout is the same, 14 columns
	closeAppManager();
	findWidget("maxcolumns_check").hasPageColumns(14).should.be.true;

	// Navigate to another page that has a custom page-layout set
	getPageMenu().navigateToPage("Main Project/Model Analysis");

	// Assert page-layout is 8 columns.
	findWidget("model_analysis").hasPageColumns(8).should.be.true;
});
