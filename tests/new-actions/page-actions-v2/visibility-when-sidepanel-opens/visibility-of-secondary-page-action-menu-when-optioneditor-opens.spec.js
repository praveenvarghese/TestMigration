/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"On opening a Sidepanel tab and on collapsing it, verifying Secondary page actions menu is visible to users. And that it is in collapsed mode.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Open "Filters 1" Sidepanel
		findWidget("team_infinity")
			.getSidepanels()
			.openSidepanelTab("Filters 1");

		// With "Filters 1" Sidepanel open, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;

		// Close "Filters 1" Sidepanel
		findWidget("team_infinity")
			.getSidepanels()
			.closeSidepanelTab();

		// Closing the opened "Filters 1" Sidepanel, verify that Secondary page actions menu is visible, and that it is not unfolded.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getHamburgerButton().should.exist;
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.isHamburgerButtonExpanded().should.be.false;
	}
);
