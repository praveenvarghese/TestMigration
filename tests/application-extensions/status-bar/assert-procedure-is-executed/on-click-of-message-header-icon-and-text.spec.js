/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Assert action on click of active Statusbar message that has procedure configured. Similarly, assert on click of Statusbar message's header, icon and display-text elements.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Resetting data on the page.
		findWidget("Reset StatusBar Data").click();

		// Click on the Status Bar message

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");

		// Click on the Status Bar message - Header

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.getHeader()
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");

		// Click on the Status Bar message - Display Text

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.getMessage()
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");

		// Click on the Status Bar message - Icon

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.getIcon()
			.click();

		// Assert Dialog page is shown on the page.
		getDialog().should.exist;

		// Click on OK button of Dialog page
		findWidget("medium_dp").clickDialogPageButton("ok");
	}
);
