/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Scrolling to bottom and top of a lengthy Grid-Layout page, and changing the page actions available on page and asserting their details.",
	() => {
		loadPage("Main Project/Page Actions V2/Team WebUI Assembled");

		// Reset Data
		findWidget("Reset Data_1").click();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the Primary action button and Secondary actions Hamburger button are all visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the Primary action button and Secondary actions Hamburger button are all visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;

		// Unfolding the Secondary actions
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Hiding the Primary page action.
		findWidget("Primary Action Type Selected_1").setValue("Hidden action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Collapses the Secondary actions
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
	}
);
