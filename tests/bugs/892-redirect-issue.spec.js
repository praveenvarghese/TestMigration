/*!
 * @AIMMS_FILE=models/Bugs/GL-892-redirectIssue/RedirectIssue.aimms
 */

scenario(
	"Changing the state of a workflow in the same procedure as thewebui::OpenPage call triggered an incorrect message and did not open the new page.",
	() => {
		// Use the mechanism 10 times, because the bug did not always occur. But it did every 4 to 5 times, so 10 should be enough to make sure it
		// is indeed fixed.
		for (let i = 0; i < 10; i++) {
			loadPage("Main Project/home");

			findWidget("btn_inactive").click();

			// This should navigate to the 'new' page and not leave any errors.
			findWidget("btn_run").click();

			getCurrentPage().should.eql("Main Project/new");
		}

		getLogMessage()
			.getErrorCount()
			.should.be.equal(0);
	}
);
