/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Test to verify on click on button of dialog page v2 a procedure is triggered", () => {
	loadPage("Main Project/page for dialogs v2");

	//Verify on click on button of dialog page v2 a procedure is triggered

	//Validating initial state of flag is set to false
	findWidget("Flag Status v2")
		.getValue()
		.should.be.equal(false);

	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	//Open an dialog page
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	//Click on a OK button
	findWidget("large_dp_v2").clickDialogPageButton("ok");

	//Validating the flag set to true
	findWidget("Flag Status v2")
		.getValue()
		.should.be.equal(true);
});
