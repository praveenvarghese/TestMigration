/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting icon's shown on the Primary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Asserting the configured icon on the active Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.hasIcon("aimms-earth").should.be.true;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Inactive action");

		// Asserting the configured icon on the inactive Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.hasIcon("aimms-bow").should.be.true;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no icon");

		// Asserting "OPTIMIZE" icon is shown when no data was configured
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.hasIcon("optimize-btn-icon-aimms").should.be.true;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no procedure");

		// Asserting the configured invalid/non-existing icon class name is shown on the Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.hasIcon("aimms-wrong-icon").should.be.true;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With custom icon");

		// Asserting the configured custom iconis shown on the Primary Action.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.hasIcon("entypo-infinity").should.be.true;
	}
);
