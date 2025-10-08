/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting display text shown on the Single Secondary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Changing the Secondary Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		// Asserting the display text on the active Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.getTitle()
			.should.eql("Update Demand Data");

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Inactive Action");

		// Asserting the display text on the inactive Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.getTitle()
			.should.eql("Reset Demand Data");

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - No DisplayText Configured"
		);

		// With no text configured for Single Secondary Action, asserting the display text shown.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.getTitle()
			.should.eql("");

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - No Procedure Configured"
		);

		// With a lengthy text configured for Single Secondary Action, asserting the display text shown.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.getTitle()
			.should.eql(
				"A platform to help your team solve problems and uncover opportunities, providing more breakthroughs from more people."
			);

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Inactive Secondary Action - Custom Icon Configured"
		);

		// Asserting the display text shown on the Single Secondary Action with custom icon.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.getTitle()
			.should.eql("Jumbo - Solve");
	}
);
