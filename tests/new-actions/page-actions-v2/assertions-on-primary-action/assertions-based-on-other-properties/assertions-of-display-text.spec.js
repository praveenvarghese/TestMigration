/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting display text shown on the Primary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Asserting the display text on the active Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getTitle()
			.should.eql("Power of AIMMS");

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Inactive action");

		// Asserting the display text on the inactive Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getTitle()
			.should.eql("Inactive Optimize");

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no title");

		// Asserting "OPTIMIZE" display text is shown when no data was configured
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getTitle()
			.should.eql("OPTIMIZE");

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no procedure");

		// With a lengthy text configured for Primary Action, asserting the display text shown.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getTitle()
			.should.eql(
				"A platform to help your team solve problems and uncover opportunities, providing more breakthroughs from more people."
			);

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With custom icon");

		// Asserting the display text shown on the Primary Action with Custom icon.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getTitle()
			.should.eql("Solve");
	}
);
