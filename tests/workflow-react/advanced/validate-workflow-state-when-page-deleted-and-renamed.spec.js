/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With Hidden Page In Workflow/Infinity Model.aimms
 */

scenario("Tests to verify workflow behaviour when page is deleted and renamed", () => {
	loadPage("Main Project/Dialog Pages");

	//Verify workflow behaviour when page is deleted
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Tooltips",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	getAppManager().navigateToPage("Main Project/Item Actions");

	// Skip waiting for page load because the page does not exists
	findWidget("item_actions")
		.getWorkflowItems()
		.getStepElement("Step WF5 2")
		.click({ waitForPageLoad: false });

	getLogMessage()
		.getCount()
		.should.be.equal(1);

	//Verify workflow behaviour when page is renamed
	openAppManager().navigateToPage("Main Project/Annotations");

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Item Actions",
		})
		.clickOnRename()
		.enterName("New Item Actions")
		.pressKeys([SPECIAL_KEYS.enter]);

	findWidget("annotations_1")
		.getWorkflowItems()
		.getStepElement("Step WF5 1")
		.click();

	findWidget("item_actions").should.exist;
});
