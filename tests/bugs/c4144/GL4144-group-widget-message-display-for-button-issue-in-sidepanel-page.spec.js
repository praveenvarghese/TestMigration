/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Check Group widget is not displayed when button is selected as widget type", () => {
	loadPage("Main Project/KPIs/EmptyGLSidepanelClassicPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/KPIs/EmptyGLSidepanelCustomPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/KPIs/EmptyGLSidepanelStandardPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/KPIs/EmptyGLSidepanelStandardPage?ignore-grid-layout=true");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);
});
