/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"On opening a Sidepanel tab and on collapsing it, verifying Primary and single Secondary page actions are visible to users.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Changing the Secondary Page actions data to show just 1 active action.
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		// Open "Filters 1" Sidepanel
		findWidget("team_infinity")
			.getSidepanels()
			.openSidepanelTab("Filters 1");

		// With "Filters 1" Sidepanel open, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;

		// Close "Filters 1" Sidepanel
		findWidget("team_infinity")
			.getSidepanels()
			.closeSidepanelTab();

		// Closing the opened "Filters 1" Sidepanel, verify that the Primary and single Secondary page actions are all visible.
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction().should.exist;
	}
);
