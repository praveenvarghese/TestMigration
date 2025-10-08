/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Create dialog page v2 and assert size", () => {
	loadPage("Main Project/page for dialogs v2");

	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/page for dialogs v2",
		})
		.clickOnAddDialogPage()
		.enterName("new dp v2");

	getAppManager().navigateToPage("Main Project/page for dialogs v2/new dp v2");

	findWidget("new_dp_v2")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	findWidget("new_dp_v2").hasPageRows(2).should.be.true;
	findWidget("new_dp_v2").hasPageColumns(3).should.be.true;

	loadPage("Main Project/home");

	getCurrentPage().should.be.equal("Main Project/home");
});
