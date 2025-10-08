/*!
 * @AIMMS_FILE=models/PageActionsExample/PageActionsExample.aimms
 */

scenario("Verifying Page leave option functionality", () => {
	loadPage("Main Project/pageOpenTest");

	// When valid procedure is set in page leave option
	findWidget("pageopentest_1")
		.openActionUponLeaveOptionEditor()
		.setActionUponLeave({
			procedure: "flagstatus",
		});

	findWidget("Flag_1")
		.getValue()
		.should.be.equal(false);

	openAppManager()
		.navigateToPage("Main Project/home")
		.navigateToPage("Main Project/pageOpenTest");

	findWidget("Flag_1")
		.getValue()
		.should.be.equal(true);

	// When valid procedure with warnings is set in page leave option
	findWidget("pageopentest_1")
		.openActionUponLeaveOptionEditor()
		.setActionUponLeave({
			procedure: "throwsWarning",
		});

	openAppManager().navigateToPage("Main Project/home");

	getCurrentPage().should.be.equal("Main Project/home");

	openAppManager().navigateToPage("Main Project/pageOpenTest");

	// When Error procedure is set in page leave option
	findWidget("pageopentest_1")
		.openActionUponLeaveOptionEditor()
		.setActionUponLeave({
			procedure: "throwsError",
		});

	openAppManager().navigateToPageWithError({
		initialUri: "Main Project/home",
		finalUri: "Main Project/pageOpenTest",
	});

	getCurrentPage().should.be.equal("Main Project/pageOpenTest");
});
