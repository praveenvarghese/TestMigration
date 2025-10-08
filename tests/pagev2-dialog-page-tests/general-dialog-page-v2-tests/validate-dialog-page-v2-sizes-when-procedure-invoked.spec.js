/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Test to verify right dialog page v2 is displayed when opening procedure is run", () => {
	loadPage("Main Project/page for dialogs v2");

	//Verify right dialog page v2 is displayed when respective procedure is run
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	//Verify Large dialog page v2 is displayed when procedure is triggered
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	findWidget("large_dp_v2")
		.getSelectedDialogPageSize()
		.should.eql("Large");
	findWidget("large_dp_v2").hasPageColumns(8).should.be.true;
	findWidget("large_dp_v2").hasPageRows(3).should.be.true;

	findWidget("large_dp_v2").clickDialogPageButton("cancel");

	//Verify Medium dialog page v2 is displayed when procedure is triggered
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	findWidget("medium_dp_v2")
		.getSelectedDialogPageSize()
		.should.eql("Medium");
	findWidget("medium_dp_v2").hasPageColumns(6).should.be.true;
	findWidget("medium_dp_v2").hasPageRows(3).should.be.true;

	findWidget("medium_dp_v2").clickDialogPageButton("ok");

	//Verify Small dialog page is displayed when procedure is triggered
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(2)
		.click();

	findWidget("small_dp_v2")
		.getSelectedDialogPageSize()
		.should.eql("Small");
	findWidget("small_dp_v2").hasPageColumns(3).should.be.true;
	findWidget("small_dp_v2").hasPageRows(2).should.be.true;

	findWidget("small_dp_v2").clickDialogPageButton("ok");

	//Verify Custom Size dialog page is displayed when procedure is triggered
	findWidget("page_for_dialogs_v2")
		.getSecondaryPageActions()
		.getPageActionV2Details(3)
		.click();

	findWidget("custom_size_dp_v2").hasPageColumns(7).should.be.true;
	findWidget("custom_size_dp_v2").hasPageRows(4).should.be.true;

	findWidget("custom_size_dp_v2").clickDialogPageButton("ok");

	getCurrentPage().should.be.equal("Main Project/page for dialogs v2");
});
