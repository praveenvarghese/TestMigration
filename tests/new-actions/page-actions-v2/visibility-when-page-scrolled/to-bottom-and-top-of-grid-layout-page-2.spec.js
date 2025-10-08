/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Scrolling to bottom and top of a lengthy Grid-Layout page, and changing the page actions available on page and asserting their details.",
	() => {
		loadPage("Main Project/Page Actions V2/Team WebUI Assembled");

		// Reset Data
		findWidget("Reset Data_1").click();

		// Updating Secondary page actions to just 1 action
		findWidget("PageActionTypeSelected_1").setValue("Only 1 Active Action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Hiding Primary page action
		findWidget("Primary Action Type Selected_1").setValue("Hidden action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Getting back Primary action and hiding Secondary page action
		findWidget("Primary Action Type Selected_1").setValue("Active action");
		findWidget("PageActionTypeSelected_1").setValue("Only 1 Hidden Action");

		// Scroll to the custom-position button widget at bottom of the page. This assumes we have scrolled down enough length.
		findWidget("Flag5").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;

		// Scroll back to top of the page
		findWidget("Reset Data_1").scrollIntoView();

		// Assert the single Secondary action button is visible.
		findWidget("team_webui_assembled")
			.getPrimaryPageAction()
			.getButton().should.exist;
	}
);
