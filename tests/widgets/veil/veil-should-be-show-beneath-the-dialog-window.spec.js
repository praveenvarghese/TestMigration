/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserts veil is behind the dialog window, and on operations from dialog window veil comes forward ",
	() => {
		loadPage("Main Project/Shipping Schedules");

		// Assert no veil is seen.
		getVeil().should.not.exist;

		// Action triggers a dialog window.
		findWidget("Validate Data").click();

		// Assert no veil is seen.
		getVeil().should.exist;

		// Assert modal-dialog-veil is seen.
		getVeil().IsAModalDialogVeil().should.be.true;
		// Assert veil has no message and buttons
		getVeil().getMessage().should.not.exist;
		getVeil().getButton().should.not.exist;

		// Action triggers a busy window for 5 seconds
		findWidget("Retry").click();

		// Assert busy-veil is seen.
		getVeil().IsABusyVeil().should.be.true;

		// Assert message shown on busy veil.
		getVeil()
			.getMessage()
			.should.equal("Waits for 5 seconds.");
		// Assert text of button shown on busy veil.
		getVeil()
			.getButton()
			.should.contains("Cancel");

		//Assuming 5 seconds is past since "Retry" button was clicked.

		// Assert the busy-veil is closed and now the modal-dialog-veil is seen
		getVeil().IsABusyVeil().should.be.false;
		getVeil().IsAModalDialogVeil().should.be.true;

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();

		// Assert no veil is seen.
		getVeil().should.not.exist;
	}
);
