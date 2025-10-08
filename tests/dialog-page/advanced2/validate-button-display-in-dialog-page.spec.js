/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify button displayed when no button is passed,one button is passed,more then three button is passed",
	() => {
		loadPage("Main Project/dialog button test?_aimms_only_dialogpage=true");

		//Verify by default two buttons are displayed if user doesn't specify buttons
		findWidget("dialog_button_test")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		findWidget("dialog_button_test")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		findWidget("no_button")
			.getDialogPageButtonDisplayedList()
			.should.eql("CancelOK");

		findWidget("no_button").clickDialogPageButton("ok");

		//Verify by only one button is displayed if user specify one button
		findWidget("dialog_button_test")
			.getSecondaryPageActions()
			.getPageActionV2Details(1)
			.click();

		findWidget("one_button")
			.getDialogPageButtonDisplayedList()
			.should.eql("One");

		findWidget("one_button").clickDialogPageButton("one");

		//Verify by max three buttons are displayed if user specify more then three buttons
		findWidget("dialog_button_test")
			.getSecondaryPageActions()
			.getPageActionV2Details(2)
			.click();

		findWidget("three_button")
			.getDialogPageButtonDisplayedList()
			.should.eql("FIrstSecondThird");

		findWidget("three_button").clickDialogPageButton("second");
	}
);
