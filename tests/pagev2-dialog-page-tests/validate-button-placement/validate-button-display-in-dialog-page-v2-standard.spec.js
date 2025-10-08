/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario(
	"Test to verify button display when no button is passed, one button is passed, more then three button are passed",
	() => {
		loadPage("Main Project/dialog button test v2");

		//Verify by default two buttons are displayed if user doesn't specify buttons
		findWidget("dialog_button_test_v2")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		findWidget("dialog_button_test_v2")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		findWidget("no_button_v2")
			.getDialogPageButtonDisplayedList()
			.should.eql("CancelOK");

		findWidget("no_button_v2").clickDialogPageButton("ok");

		//Verify that only one button is displayed if user specify one button
		findWidget("dialog_button_test_v2")
			.getSecondaryPageActions()
			.getPageActionV2Details(1)
			.click();

		findWidget("one_button_v2")
			.getDialogPageButtonDisplayedList()
			.should.eql("One");

		findWidget("one_button_v2").clickDialogPageButton("one");

		//Verify that max three buttons are displayed if user specify more then three buttons
		findWidget("dialog_button_test_v2")
			.getSecondaryPageActions()
			.getPageActionV2Details(2)
			.click();

		findWidget("three_button_v2")
			.getDialogPageButtonDisplayedList()
			.should.eql("FIrstSecondThird");

		findWidget("three_button_v2").clickDialogPageButton("second");

		getCurrentPage().should.be.equal("Main Project/dialog button test v2");
	}
);
