/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 * @DURATION=long
 */

scenario("Asserting the Primary page actions loaded on the page.", () => {
	loadPage("Main Project/Page Actions V2/Team Infinity");

	// Verify there is 1 active Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Inactive action");

	// Verify there is 1 inactive Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.false;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Hidden action");

	// Verify there is no Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.not.exist;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Misspelt state action");

	// Verify there is no Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.not.exist;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With empty data");

	// Verify there is no Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.not.exist;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With no title");

	// Verify there is 1 active Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With no icon");

	// Verify there is 1 active Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With no state set");

	// Verify there is no Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.not.exist;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With no procedure");

	// Verify there is 1 active Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Changing the Page actions data.
	findWidget("Primary Action Type Selected").setValue("Action - With custom icon");

	// Verify there is 1 active Primary page action
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("team_infinity")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;
});
