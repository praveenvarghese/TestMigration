/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Page visibility tests", () => {
	loadPage("Main Project/home");

	// Open App Manager, set visibility false to home page.
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/home",
		})
		.clickOnVisibility()
		.setValue({ value: "0", optionValueType: "LITERAL" });

	// Assert home page is marked visibility-hidden on App Manager
	getAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "home",
				Slug: "home",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
		]);

	// Assert home page is not available on MenuBar
	getPageMenu().hasNotPages(["Main Project/home"]).should.be.true;

	// Navigate to another page
	getPageMenu().navigateToPage("Main Project/Step1");

	// Assert home page is marked visibility-hidden on App Manager
	openAppManager()
		.getAppManagerInfo()
		.should.include.something.like([
			{
				Name: "home",
				Slug: "home",
				NodeType: "Page",
				NodeHasHiddenIndication: true,
			},
		]);

	// Assert home page is not available on MenuBar
	getPageMenu().hasNotPages(["Main Project/home"]).should.be.true;
});
