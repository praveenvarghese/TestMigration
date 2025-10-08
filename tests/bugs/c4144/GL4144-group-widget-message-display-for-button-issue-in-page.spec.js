/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Check Group widget is not displayed when button is selected as widget type", () => {
	loadPage("Main Project/dialog button test");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/CustomLayout");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/StandardLayout");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/StandardLayout?ignore-grid-layout=true");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);
});
