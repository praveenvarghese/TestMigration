/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Scrolling to bottom and top of a lengthy Regular page, and changing the page actions available on page and asserting their details.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Reset Data
		findWidget("Reset Data").click();

		// Updating Secondary page actions to just 1 action
		findWidget("PageActionTypeSelected").scrollIntoView();
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Hiding Primary page action
		findWidget("Primary Action Type Selected").setValue("Hidden action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Getting back Primary action and hiding Secondary page action
		findWidget("Primary Action Type Selected").setValue("Active action");
		findWidget("PageActionTypeSelected").setValue("Only 1 Hidden Action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Reset Data").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;

		// Scroll back to top of the page
		findWidget("Primary Action Type Selected").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
	}
);
