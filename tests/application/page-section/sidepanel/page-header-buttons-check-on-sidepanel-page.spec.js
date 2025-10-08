/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify top page header buttons on Global filters page", () => {
	loadPage("Main Project/KPIs/CSAT?_aimms_only_sidepanel=true");

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
