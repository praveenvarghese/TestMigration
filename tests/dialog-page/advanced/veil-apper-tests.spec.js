/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify Veil is displayed when dialog page is opened and busy icon comes up when procedure is run in the dialog page ",
	() => {
		loadPage("Main Project/page for dialogs");

		getVeil().should.not.exist;

		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		findWidget("page_for_dialogs")
			.getSecondaryPageActions()
			.getPageActionV2Details(2)
			.click();

		getVeil().should.exist;

		getVeil().IsABusyVeil().should.be.false;

		findWidget("Delay").click();

		getVeil().IsABusyVeil().should.be.true;
		getVeil().should.exist;
	}
);
