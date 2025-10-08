/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting display text shown on multiple Secondary page action, for different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// For a Secondary Action with no display text set, asserting that no title is shown to users.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.getTitle()
			.should.eql("");

		// Asserting the display text on an active Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(6)
			.getTitle()
			.should.eql("Above action has missing title, icon and procedure.");

		// Asserting the display text on an inactive Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(1)
			.getTitle()
			.should.eql("1st action missing title. This action has missing icon.");

		// Through interaction, display text of Secondary actions are updated
		findWidget("Updates Secondary Action Data").click();

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Asserting the display text on the Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.getTitle()
			.should.eql("This action had missing display text");
	}
);
