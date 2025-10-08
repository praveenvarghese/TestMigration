/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Page section buttons visibility tests", () => {
	loadPage("Main Project/home");

	getPageHeader()
		.getButtons()
		.getPageManager()
		.isDisplayedInViewport().should.be.true;

	getPageHeader()
		.getButtons()
		.getPageSettings()
		.isDisplayedInViewport().should.be.true;

	getPageHeader()
		.getButtons()
		.getFeatureManager()
		.isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.getWidgetManager()
		.isDisplayedInViewport().should.be.true;

	getPageHeader()
		.getButtons()
		.getDataManager()
		.isDisplayedInViewport().should.be.true;

	getPageHeader()
		.getButtons()
		.getToggleHiddenWidgets()
		.isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.getWidgetControl()
		.isDisplayedInViewport().should.be.false;

	getPageHeader()
		.getButtons()
		.getApplicationSettings()
		.isDisplayedInViewport().should.be.true;
});
