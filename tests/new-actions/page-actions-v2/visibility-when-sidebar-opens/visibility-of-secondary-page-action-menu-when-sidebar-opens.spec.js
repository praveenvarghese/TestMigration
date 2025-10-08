/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With Page Manager, Widget Manager and Data Manager sidebars' open, verifying Secondary page actions menu is visible to users. And that it is in collapsed mode.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Get the Page Manager sidebar open
		openAppManager();

		//With Page Management sidebar open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;

		//Get the Widget Manager sidebar open
		openWidgetManager();

		//With Widget Manager sidebar open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;

		//Get the Data Manager sidebar open
		openDataManager();

		//With Data Manager sidebar open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;
	}
);
