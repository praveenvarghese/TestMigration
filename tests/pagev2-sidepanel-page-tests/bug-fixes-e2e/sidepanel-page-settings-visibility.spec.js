/*!
 * @AIMMS_FILE=models/PageV2/SidePanelv2/SidePanelv2.aimms
 */

scenario("Page settings visibility for side panel v2", () => {
	loadPage("Main Project/Sprint Reliability");

	getPageHeader()
		.getButtons()
		.getPageManager()
		.isDisplayedInViewport().should.be.true;

	getPageHeader()
		.getButtons()
		.getPageSettings()
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
