/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Through interaction on the page the state property of Primary page action is updated, and asserting the active and inactive state Primary Action is available on the page. ",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Asserting the Secondary page actions available on page load, is taken care in .\assertions-based-on-state.spec.js test file.

		// Performing interaction on the page that updates state of the Secondary actions
		findWidget("Updates Secondary Action Data").click();

		// Unfold the page actions by click on the menu button
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		// Verify 7 Secondary page actions are available
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionsCount()
			.should.be.equal(7);
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getActivePageActionsCount()
			.should.be.equal(6);
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getInactivePageActionsCount()
			.should.be.equal(1);

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Hidden Action");

		//Performing interaction that would update the state of Single Secondary page action from hidden to inactive
		findWidget("Flags")
			.getCell(0, 0)
			.setValue(true);

		// Asserting inactive Single Secondary page action is available
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.isActiveSinglePageAction().should.be.false;

		//Performing interaction that would update the state of Single Secondary page action from inactive to active
		findWidget("Flags")
			.getCell(0, 1)
			.setValue(true);

		// Asserting inactive Single Secondary page action is available
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.isActiveSinglePageAction().should.be.true;
	}
);
