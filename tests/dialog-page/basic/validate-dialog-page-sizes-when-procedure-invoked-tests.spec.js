/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify right dialog pages are displayed when respective procedures are runned",
	() => {
		loadPage("Main Project/page for dialogs?_aimms_only_dialogpage=true");

		//Verify right dialog pages are displayed when respective procedures are runned
		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		//Verify Large dialog page is displayed when procedure is triggered
		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		findWidget("large_dp")
			.getSelectedDialogPageSize()
			.should.eql("Large");
		findWidget("large_dp").hasPageColumns(8).should.be.true;
		findWidget("large_dp").hasPageRows(3).should.be.true;

		findWidget("large_dp").clickDialogPageButton("cancel");

		//Verify Medium dialog page is displayed when procedure is triggered
		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.getPageActionV2Details(1)
			.click();

		findWidget("medium_dp")
			.getSelectedDialogPageSize()
			.should.eql("Medium");
		findWidget("medium_dp").hasPageColumns(6).should.be.true;
		findWidget("medium_dp").hasPageRows(3).should.be.true;

		findWidget("medium_dp").clickDialogPageButton("ok");

		//Verify Small dialog page is displayed when procedure is triggered
		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.getPageActionV2Details(2)
			.click();

		findWidget("small_dp")
			.getSelectedDialogPageSize()
			.should.eql("Small");
		findWidget("small_dp").hasPageColumns(3).should.be.true;
		findWidget("small_dp").hasPageRows(2).should.be.true;

		findWidget("small_dp").clickDialogPageButton("ok");
	}
);
