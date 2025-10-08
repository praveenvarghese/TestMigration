/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting icon's shown on the Single Secondary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Asserting the configured icon on the active Single Secondary Action
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.hasIcon("aimms-home").should.be.true;

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Inactive Action");

		// Asserting the configured icon on the inactive Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.hasIcon("aimms-at-sign").should.be.true;

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - No Procedure Configured"
		);

		// Asserting the configured invalid/non-existing icon class name is shown on the Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.hasIcon("aimms-wrong-icon").should.be.true;

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - Custom Icon Configured"
		);

		// Asserting the configured custom iconis shown on the Single Secondary Action.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.hasIcon("entypo-infinity").should.be.true;
	}
);
