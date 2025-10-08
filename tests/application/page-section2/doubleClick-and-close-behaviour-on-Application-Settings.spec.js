/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario(
	"Behaviour of Application Settings through double click and close on Option Editor",
	() => {
		loadPage("Main Project/Step1");

		// On page load, Verify Application Settings Option Editor is available
		findWidget("application").getOptionDialog().should.not.exist;

		// Verify Application Settings Button is not active
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.isActive().should.be.false;

		// Through click on "Application Settings" top level button, option editor opens
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		// Verify Application Settings Button is active
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.isActive().should.be.true;

		// Verify Application Settings Option editor is available
		findWidget("application").getOptionDialog().should.exist;

		// Click again on "Application Settings" top level button
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		// Verify Application Option Editor is not available
		findWidget("application").getOptionDialog().should.not.exist;

		// Verify Application Settings Button is not active
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.isActive().should.be.false;

		// Through click on "Application Settings" top level button, option editor opens
		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		// Verify Application Settings Option editor is available
		findWidget("application").getOptionDialog().should.exist;

		// Close Application Settings Option editor through click on "x" close button
		findWidget("application").closeOptionDialog();

		// Verify Application Settings Option Editor is not available
		findWidget("application").getOptionDialog().should.not.exist;
	}
);
