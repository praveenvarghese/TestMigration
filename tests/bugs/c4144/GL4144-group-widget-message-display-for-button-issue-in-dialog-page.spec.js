/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Check Group widget is not displayed when button is selected as widget type", () => {
	loadPage("Main Project/classicDIalogPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/customDialogPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/standardDialogPage");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);

	getWidgetManager().closeAddWidgetWizard();

	loadPage("Main Project/classicDIalogPage?ignore-grid-layout=true");

	openWidgetManager()
		.clickAddWidgetButton()
		.selectType("Button")
		.isGroupWidgetMessageDispalyed()
		.should.be.equal(false);
});
