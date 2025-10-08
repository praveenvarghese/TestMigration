/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Behaviour of Page Settings through double click and close on Option Editor", () => {
	loadPage("Main Project/Step1");

	// On page load, Verify Page Settings Option Editor is available
	findWidget("page1").getOptionDialog().should.not.exist;

	// Verify Page Settings Button is not active
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.isActive().should.be.false;

	// Through click on "Page Settings" top level button, option editor opens
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.click();

	// Verify Page Settings Option editor is available
	findWidget("page1").getOptionDialog().should.exist;

	// Verify Page Settings Button is active
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.isActive().should.be.true;

	// Click again on "Page Settings" top level button
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.click();

	// Verify Page Settings Option Editor is not available
	findWidget("page1").getOptionDialog().should.not.exist;

	// Verify Page Settings Button is not active
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.isActive().should.be.false;

	// Through click on "Page Settings" top level button, option editor opens
	getPageHeader()
		.getButtons()
		.getPageSettings()
		.click();

	// Verify Page Settings Option editor is available
	findWidget("page1").getOptionDialog().should.exist;

	// Close Page Settings Option editor through click on "x" close button
	findWidget("page1").closeOptionDialog();

	// Verify Page Settings Option Editor is not available
	findWidget("page1").getOptionDialog().should.not.exist;
});
