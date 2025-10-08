/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"With StatusBar messages data updated, assert action on click of active and inactive Status Bar Messages.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Update StatusBar Messages data
		findWidget("Update StatusBar Data").click();

		// Click on the 1st Status Bar message. This is an active Status bar message, with a valid procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");

		// Again click on the 1st Status Bar message.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");

		// Click on the 2nd Status Bar message. This is an active Status bar message, but with no procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;

		// Click on the 3rd Status Bar message. This is an inactive Status bar message, but with a procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;

		// Click on the 4th Status Bar message. This is an active Status bar message, but with no procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;

		// Click on the 5th Status Bar message. This is an active Status bar message, with a valid Toggle_Flag procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.click();

		// Assert Flag identifier is true
		findWidget("Flag_1").getValue().should.be.false;

		// Again click on the 5th Status Bar message.

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.click();

		// Assert Flag identifier is true
		findWidget("Flag_1").getValue().should.be.true;

		// Click on the 6th Status Bar message. This is an active Status bar message, but with an invalid procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(5)
			.click();

		// Assert an error message indicating invalid procedure is attemped for execution
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"data session:Running procedure 'MKG' has resulted in an error: No authorization to run procedure MKG (code=500)"
			);

		// Click on the 7th Status Bar message. This is an active Status bar message, but with an invalid procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(6)
			.click();

		// Assert an error message indicating invalid procedure is attemped for execution
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"data session:Running procedure 'WrongProc' has resulted in an error: No authorization to run procedure WrongProc (code=500)"
			);
	}
);
