/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify on click on button of dialog page a procedure is triggered", () => {
	loadPage("Main Project/page for dialogs?_aimms_only_dialogpage=true");

	//Verify on click on button of dialog page a procedure is triggered

	//Validating initial state of flag is set to false
	findWidget("Flag Status")
		.getValue()
		.should.be.equal(false);

	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	//Open an dialog page
	findWidget("page_for_dialogs")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	//Click on a OK button
	findWidget("large_dp").clickDialogPageButton("ok");

	//Validating the flag set to true
	findWidget("Flag Status")
		.getValue()
		.should.be.equal(true);
});
