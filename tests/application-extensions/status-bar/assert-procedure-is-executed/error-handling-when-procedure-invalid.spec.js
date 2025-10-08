/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Assert action on click of active Statusbar messages that has no or invalid procedure configured.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Resetting data on the page.
		findWidget("Reset StatusBar Data").click();

		// Click on the 2nd Status Bar message. This is an active Status bar message, but with no procedure set.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;

		// Click on the 5th Status Bar message. This is an active Status bar message, but with an invalid procedure configured.

		getStatusBar()
			.getStatusBarMessageDetails(5)
			.click();

		// Assert an error message indicating invalid procedure is attemped for execution
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"data session:Running procedure 'MKG' has resulted in an error: No authorization to run procedure MKG (code=500)"
			);
	}
);
