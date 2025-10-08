/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario(
	"Through interaction on the page the state property of Primary page action is updated, and asserting the active and inactive state Primary Action is available on the page. ",
	() => {
		loadPage("Main Project/Page Actions V2/Team Haarlem");

		// Verify the Primary page action of state Hidden is not available on the page.
		findWidget("team_haarlem")
			.getPrimaryPageAction()
			.getButton().should.not.exist;

		// Performing interaction on the page that updates state of the Primary action to inactive.
		findWidget("Some Interactions").setValue("PreRequisitiesFilledIn", true);

		// Verify the Primary page action of state inactive is now available on the page.
		findWidget("team_haarlem")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_haarlem")
			.getPrimaryPageAction()
			.isAnActiveAction().should.be.false;

		// Performing interaction on the page that updates state of the Primary action to active.
		findWidget("Some Interactions").setValue("LetsOptimize", true);

		// Verify the Primary page action of state active is now available on the page.
		findWidget("team_haarlem")
			.getPrimaryPageAction()
			.getButton().should.exist;
		findWidget("team_haarlem")
			.getPrimaryPageAction()
			.isAnActiveAction().should.be.true;
	}
);
