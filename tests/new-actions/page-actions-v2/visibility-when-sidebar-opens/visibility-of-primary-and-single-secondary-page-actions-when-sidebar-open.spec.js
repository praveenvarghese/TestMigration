/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"With Page Manager, Widget Manager and Data Manager sidebars' open, verifying Primary and single Secondary page actions are visible to users.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Changing the Secondary Page actions data to show just 1 active action.
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		//Get the Page Manager sidebar open
		openAppManager();

		//With Page Management sidebar open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		//Get the Widget Manager sidebar open
		openWidgetManager();

		//With Widget Manager sidebar open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		//Get the Data Manager sidebar open
		openDataManager();

		//With Data Manager sidebar open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;
	}
);
