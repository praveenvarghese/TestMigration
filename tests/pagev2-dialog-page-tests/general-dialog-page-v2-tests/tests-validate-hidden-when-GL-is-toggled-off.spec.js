/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify hidden widgets functionalities when GL is disabled", () => {
	loadPage(
		"Main Project/standardLayoutWithHiddenWidgets/customLayoutWithGridDIalogHiddenWidget?ignore-grid-layout=true"
	);

	findWidget("Test_1").isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.showHiddenWidgets();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("Test_1").isDisplayedInViewport().should.be.true;

	getPageMenu().navigateToPage("Main Project/S&OP Review");

	findWidget("openCustomLayoutDialogPage_1").click();

	findWidget("Test_1").isDisplayedInViewport().should.be.true;

	findWidget("customlayoutwithgriddialoghiddenwidget_1").clickDialogPageButton("ok");

	getCurrentPage().should.be.equal("Main Project/S&OP Review");
});
