/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting click behaviour on the Single Secondary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Changing the Secondary Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Active Action");

		// Click on the active Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.click();

		// Asserting Flag parameter is set to True
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;

		// Click on the active Single Secondary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		// Asserting Flag parameter is set to False
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.false;

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - No DisplayText Configured"
		);

		//Verify there are no error/ info messages logged on the page.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// For Single Secondary Action with no procedure configured, click on it
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.click();

		//Verify an error message is reported, and that count of log messages is 1.
		getLogMessage()
			.getCount()
			.should.be.equal(1);

		//Close the Log messages window
		getLogMessage().closeList();

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - No Procedure Configured"
		);

		// With an invalid/non-existing procedure configured for Single Secondary Action, click on it.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.click();

		//Verify an error message is reported, and that count of log messages is 2.
		getLogMessage()
			.getCount()
			.should.be.equal(2);

		//Close the Log messages window
		getLogMessage().closeList();

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue(
			"Single Active Secondary Action - Custom Icon Configured"
		);

		// Click on the Single Secondary Action with custom icon.
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.click();

		// Asserting Flag7 parameter is set to True
		findWidget("Flags")
			.getCell(0, 7)
			.getValue().should.be.true;

		// Changing the Page actions data.
		findWidget("PageActionTypeSelected").setValue("Only 1 Inactive Action");

		// Click on the inactive Single Secondary Action
		findWidget("team_infinity")
			.getSecondaryPageActions()
			.singlePageAction()
			.click();

		// Asserting Flag1 parameter is not updated, and remains False
		findWidget("Flags")
			.getCell(0, 1)
			.getValue().should.be.false;
	}
);
