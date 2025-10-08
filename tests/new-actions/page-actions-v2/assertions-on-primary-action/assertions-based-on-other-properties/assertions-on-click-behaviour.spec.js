/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Asserting click behaviour on the Primary page action, with different data configurations.",
	() => {
		loadPage("Main Project/Page Actions V2/Team Infinity");

		// Click on the active Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		// Asserting Flag parameter is set to True
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;

		// Click again on the active Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		// Asserting Flag parameter is set to False
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.false;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Inactive action");

		// Try click on the inactive Primary Action
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		// Asserting Flag1 parameter is not updated, and remains False
		findWidget("Flags")
			.getCell(0, 1)
			.getValue().should.be.false;

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no procedure");

		// Click on the Primary Action wherein no procedure is configured
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		//Verify an error message is reported, and that count of log messages is 1.
		getLogMessage()
			.getCount()
			.should.be.equal(1);

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With no icon");

		// Click on the Primary Action wherein an invalid/non-existing procedure is configured
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		//Verify an error message is reported, and that count of log messages is 2.
		getLogMessage()
			.getCount()
			.should.be.equal(2);

		// Changing the Page actions data.
		findWidget("Primary Action Type Selected").setValue("Action - With custom icon");

		// Click on the Primary Action with custom icon
		findWidget("team_infinity")
			.getPrimaryPageAction()
			.click();

		// Asserting Flag7 parameter is set to True
		findWidget("Flags")
			.getCell(0, 7)
			.getValue().should.be.true;
	}
);
