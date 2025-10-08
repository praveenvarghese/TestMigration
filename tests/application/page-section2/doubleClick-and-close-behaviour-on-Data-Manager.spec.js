/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Double click and close behaviour on Data Manager", () => {
	loadPage("Main Project/Step1");

	// On page load, Verify Sidebar of Data Manager is available
	getSidebar().getDataManager().should.not.exist;

	// Verify Data Manager Button is not active
	getPageHeader()
		.getButtons()
		.getDataManager()
		.isActive().should.be.false;

	// Through click on "Data Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getDataManager()
		.click();

	// Verify Data Manager sidebar is available
	getSidebar().getDataManager().should.exist;

	// Verify Data Manager Button is active
	getPageHeader()
		.getButtons()
		.getDataManager()
		.isActive().should.be.true;

	// Click again on "Data Manager" top level button
	getPageHeader()
		.getButtons()
		.getDataManager()
		.click();

	// Verify Data Manager sidebar is not available
	getSidebar().getDataManager().should.not.exist;

	// Verify Data Manager Button is not active
	getPageHeader()
		.getButtons()
		.getDataManager()
		.isActive().should.be.false;

	// Through click on "Data Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getDataManager()
		.click();

	// Verify Data Manager sidebar is available
	getSidebar().getDataManager().should.exist;

	// Close Data Manager sidebar through click on "x" close button
	getSidebar().close();

	// Verify Data Manager sidebar is not available
	getSidebar().getDataManager().should.not.exist;
});
