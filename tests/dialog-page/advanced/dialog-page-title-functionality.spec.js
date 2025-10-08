/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify dialog page title functionality ", () => {
	loadPage("Main Project/page for dialogs?_aimms_only_dialogpage=true");

	//Verify by default dialog page title will display dialog page name itself when title is not provided from procedure
	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	//Open an dialog page
	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	//Validate dialog page title is set as dialog page name when title is not passed from model
	findWidget("large_dp")
		.getDialogPageTitle()
		.should.be.equal("large dp");
	findWidget("large_dp").clickDialogPageButton("ok");
});
