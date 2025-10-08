/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Test to verify dialog page v2 title functionality ", () => {
	loadPage("Main Project/page for dialogs v2");

	//Verify by default dialog page v2 title will display dialog page name itself when title is not provided from procedure
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	//Open an dialog page v2
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	//Validate dialog page v2 title is set as dialog page name when title is not passed from model
	findWidget("large_dp_v2")
		.getDialogPageTitle()
		.should.be.equal("large dp v2");

	findWidget("large_dp_v2").clickDialogPageButton("ok");

	getCurrentPage().should.be.equal("Main Project/page for dialogs v2");
});
