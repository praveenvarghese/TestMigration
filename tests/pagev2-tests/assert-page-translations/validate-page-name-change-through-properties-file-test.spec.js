/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
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

	getAppManager()
		.getAppManagerInfo()
		.should.deep.include({
			Name: "translation_page",
			Slug: "translation_page",
			NodeType: "Pagev2-grid",
			Tooltip: "translation_page [ Page ]",
			NodeState: "Collapsed",
			Icon: "icon-grid6",
			IsNodeSelected: false,
			NodeHasHiddenIndication: false,
		});

	getAppManager().navigateToPage("Main Project/translation_page");

	getPageMenu()
		.getCurrentPageV2Name()
		.should.eql("Translation Page");
});
