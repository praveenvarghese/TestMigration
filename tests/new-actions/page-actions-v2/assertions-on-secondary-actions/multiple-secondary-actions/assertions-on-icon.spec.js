/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting icon's shown on multiple Secondary page actions, for different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// For an active Secondary Action with aimms icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.hasIcon("aimms-home").should.be.true;

		// For a Secondary Action with invalid/mis-spelt aimms icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(3)
			.hasIcon("aimms-madhukgowda").should.be.true;

		// For a Secondary Action with custom AIMMS Optimize icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.hasIcon("optimize-btn-icon").should.be.true;

		// For a Secondary Action with custom icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(6)
			.hasIcon("entypo-infinity").should.be.true;

		// Through interaction, icons of few Secondary actions are updated
		findWidget("Updates Secondary Action Data").click();

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// For an inactive Secondary Action with custom icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(5)
			.hasIcon("entypo-infinity").should.be.true;

		// For a Secondary Action with custom AIMMS Optimize icon configured, asserting icon class shown on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(6)
			.hasIcon("optimize-btn-icon").should.be.true;
	}
);
