/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario("Page name validation whne name is passed from properties file", () => {
	loadPage("Main Project/home");

	//Create a page and Validate Page Name is according to the properties file
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddPage()
		.enterName("translation_page");

	getAppManager().hasPages(["Main Project/translation_page"]).should.be.true;
	getAppManager().navigateToPage("Main Project/translation_page");

	getPageMenu()
		.getCurrentPageName()
		.should.eql("Translation Page");
});
