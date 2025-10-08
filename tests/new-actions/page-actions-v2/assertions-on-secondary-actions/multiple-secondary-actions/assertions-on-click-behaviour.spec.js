/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting click behaviour on multiple Secondary page actions, for different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// For an active Secondary Action with ToggleFlag procedure configured, asserting action on click of it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Asserting Flag parameter is set to True
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click again on the Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Asserting Flag parameter is set to False
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.false;

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// For an inactive Secondary Action with ToggleFlag procedure configured, asserting action on click of it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(1)
			.click();

		// Asserting Flag1 parameter is not updated, and remains False
		findWidget("Flags")
			.getCell(0, 1)
			.getValue().should.be.false;

		// For a Secondary Action with no procedure configured, asserting action on click of it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(2)
			.click();

		//Verify an error message is reported, and that count of log messages is 1.
		getLogMessage()
			.getCount()
			.should.be.equal(1);

		//Close the Log messages window
		getLogMessage().closeList();

		// For a Secondary Action with an invalid/non-existing procedure configured, asserting action on click of it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(6)
			.click();

		//Verify an error message is reported, and that count of log messages is 2.
		getLogMessage()
			.getCount()
			.should.be.equal(2);

		//Close the Log messages window
		getLogMessage().closeList();

		// Through interaction, procedures of 1st Secondary action is updated
		findWidget("Updates Secondary Action Data").mouseHover();
		findWidget("Updates Secondary Action Data").click();

		//Unfold the Secondary actions
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click on the Secondary Action.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Asserting Flag3 parameter is set to True
		findWidget("Flags")
			.getCell(0, 3)
			.getValue().should.be.true;
	}
);
