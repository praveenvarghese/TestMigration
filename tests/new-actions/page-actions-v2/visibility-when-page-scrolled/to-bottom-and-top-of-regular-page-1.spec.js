/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 * @DURATION=medium
 */

scenario(
	"Scrolling to bottom and top of a lengthy Regular page, and changing the page actions available on page and asserting their details.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Reset Data
		findWidget("Reset Data").click();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the Primary action button and Secondary actions Hamburger button are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the Primary action button and Secondary actions Hamburger button are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;

		// Unfolding the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);

		// Hiding the Primary page action.
		findWidget("Primary Action Type Selected").setValue("Hidden action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.true;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(9);
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		// Collapses the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the Primary action button and unfolded Secondary actions buttons are all visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.not.exist;
	}
);
