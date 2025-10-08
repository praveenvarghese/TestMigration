/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Unset 'Time Zone Setting' Application-extension option, and assert Time Zone panel is no longer available.",
	() => {
		loadPage("Main Project/TimeZone Tests");

		// Reset data
		findWidget("Reset Data").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Assert Timezone panel is now visible on the page
		findTimezonePanel().should.exist;

		// Clear off 'Time Zone Setting' Application-extension option.
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.clearOptions([
				{
					name: "Time Zone Setting",
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Assert Timezone button is now not available on the page footer section
		getFooter().getTimezoneButton().should.not.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;
	}
);
