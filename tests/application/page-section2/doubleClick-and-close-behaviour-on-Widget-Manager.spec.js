/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Double click and close behaviour on Widget Manager", () => {
	loadPage("Main Project/Step1");

	// On page load, Verify Sidebar of Widget Manager is available
	getSidebar().getWidgetManager().should.not.exist;

	// Verify Widget Manager Button is not active
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.isActive().should.be.false;

	// Through click on "Widget Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.click();

	// Verify Widget Manager sidebar is available
	getSidebar().getWidgetManager().should.exist;

	// Verify Widget Manager Button is active
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.isActive().should.be.true;

	// Click again on "Widget Manager" top level button
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.click();

	// Verify Widget Manager sidebar is not available
	getSidebar().getWidgetManager().should.not.exist;

	// Verify Widget Manager Button is not active
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.isActive().should.be.false;

	// Through click on "Widget Manager" top level button, sidebar opens
	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.click();

	// Verify Widget Manager sidebar is available
	getSidebar().getWidgetManager().should.exist;

	// Close Widget Manager sidebar through click on "x" close button
	getSidebar().close();

	// Verify Widget Manager sidebar is not available
	getSidebar().getWidgetManager().should.not.exist;
});
