/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 * @DURATION=medium
 */

scenario("Asserting the Secondary page actions loaded on the page.", () => {
	loadPage("Main Project/Page Actions V2/Team Infinity");

	// Unfold the page actions by click on the menu button
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	// Verify 9 Secondary page actions are available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getPageActionsCount()
		.should.be.equal(9);
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getActivePageActionsCount()
		.should.be.equal(7);
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getInactivePageActionsCount()
		.should.be.equal(2);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

	// Verify only 1 active page action is available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.singlePageAction().should.exist;
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getActivePageActionsCount()
		.should.be.equal(1);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("Only 1 Inactive Action");

	// Verify only 1 inactive page action is available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.singlePageAction().should.exist;
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getInactivePageActionsCount()
		.should.be.equal(1);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("Only 1 Hidden Action");

	// Verify no page action is available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getPageActionsCount()
		.should.be.equal(0);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("One each Active and Inactive actions");

	// Verify the hamburger menu, with 1 each active and inactive page actions are available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getHamburgerButton().should.exist;
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getActivePageActionsCount()
		.should.be.equal(1);
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getInactivePageActionsCount()
		.should.be.equal(1);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("One each Active and hidden actions");

	// Verify only 1 active page action is available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.singlePageAction().should.exist;
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getActivePageActionsCount()
		.should.be.equal(1);

	// Changing the Page actions data.
	findWidget("PageActionTypeSelected").setValue("One each Inactive and hidden actions");

	// Verify only 1 inactive page action is available
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.singlePageAction().should.exist;
	findWidget("team_infinity")
		.getSecondaryPageActions()
		.getInactivePageActionsCount()
		.should.be.equal(1);
});
