/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Double click and close behaviour on Page Manager", () => {
	loadPage("Main Project/Step1");

	// On page load, Verify Sidebar of Page Manager is available
	getSidebar().getPageManager().should.not.exist;

	// Verify Page Manager Button is not active
	getPageHeader()
		.getButtons()
		.getPageManager()
		.isActive().should.be.false;

	// Through click on "Page Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getPageManager()
		.click();

	// Verify Page Manager sidebar is available
	getSidebar().getPageManager().should.exist;

	// Verify Page Manager Button is not active
	getPageHeader()
		.getButtons()
		.getPageManager()
		.isActive().should.be.true;

	// Click again on "Page Manager" top level button
	getPageHeader()
		.getButtons()
		.getPageManager()
		.click();

	// Verify Page Manager sidebar is not available
	getSidebar().getPageManager().should.not.exist;

	// Verify Page Manager Button is not active
	getPageHeader()
		.getButtons()
		.getPageManager()
		.isActive().should.be.false;

	// Through click on "Page Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getPageManager()
		.click();

	// Verify Page Manager sidebar is available
	getSidebar().getPageManager().should.exist;

	// Close Page Manager sidebar through click on "x" close button
	getSidebar().close();

	// Verify Page Manager sidebar is not available
	getSidebar().getPageManager().should.not.exist;
});
