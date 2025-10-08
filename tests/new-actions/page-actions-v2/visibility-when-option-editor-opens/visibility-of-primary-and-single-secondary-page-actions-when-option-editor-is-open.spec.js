/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With Widget's, Page-Settings and Application-Settings option editor being open, verifying Primary and single Secondary page actions are visible to users.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Changing the Secondary Page actions data to show just 1 active action.
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		//Open the option editor of a scalar widget
		findWidget("Primary Action Type Selected").openOptionDialog();

		//With a widget's option editor open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		//Open Page-Settings option editor
		findWidget("team_infinity").openOptionDialog();

		//With Page-Settings option editor open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		//Open Application-Settings option editor
		findWidget("application").openOptionDialog();

		//With the Application-Settings option editor open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;
	}
);
