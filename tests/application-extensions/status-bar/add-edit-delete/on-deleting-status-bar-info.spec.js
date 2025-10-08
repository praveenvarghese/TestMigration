/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Remove StatusBar info from Application Extensions, and assert StatusBar message are not shown on WebUI.",
	() => {
		loadPage("Main Project/Status Bar Messages?_aimms_only_persistence.write=true");

		// Assert Status Bar does exists
		getStatusBar().should.exist;

		// Remove Status Bar info from Application Extensions
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.clearOptions([
				{
					name: "Status Bar",
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Assert Status Bar does not exists
		getStatusBar().should.not.exist;

		//Reload the page, and assert Status bar does not exists
		pageRefresh();
		getStatusBar().should.not.exist;

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/page open test");

		// Assert Status Bar does not exists
		getStatusBar().should.not.exist;
	}
);
