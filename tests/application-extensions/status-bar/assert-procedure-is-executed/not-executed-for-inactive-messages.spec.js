/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Assert action on click of inactive Statusbar messages that has no or invalid procedure configured.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Resetting data on the page.
		findWidget("Reset StatusBar Data").click();

		// Click on the 3rd Status Bar message. This is an inactive Status bar message, but with an invalid procedure configured

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;

		// Click on the 4th Status Bar message. This is an inactive Status bar message, but with no procedure set

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.click();

		// Assert no action is performed. No veil or dialogs shown.
		getVeil().should.not.exist;
		getDialog().should.not.exist;
	}
);
