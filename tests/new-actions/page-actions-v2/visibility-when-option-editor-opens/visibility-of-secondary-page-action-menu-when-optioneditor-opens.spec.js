/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With Widget's, Page-Settings and Application-Settings option editor being opened, verifying Secondary page actions menu is visible to users. And that it is in collapsed mode.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Open the option editor of a scalar widget
		findWidget("Primary Action Type Selected").openOptionDialog();

		//With the widget's option editor open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;

		//Open Page-Settings option editor
		findWidget("team_infinity").openOptionDialog();

		//With Page-Settings option editor open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;

		//Open Application-Settings option editor
		findWidget("application").openOptionDialog();

		//With the Application-Settings option editor open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;
	}
);
