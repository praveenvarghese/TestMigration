/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Asserting widget actions are accessible on list item widget.", () => {
	loadPage("Main Project/Planes Info/Tasks");

	getPageHeader()
		.getAppName()
		.moveTo();

	findWidget("Plane Info Tasks")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("Plane Info Tasks").movePointerToWidget(10, 10);

	findWidget("Plane Info Tasks")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	// Navigate to a page containing list widget without WidgetActions content
	getPageMenu().navigateToPage("Main Project/Planes Info");

	getPageHeader()
		.getAppName()
		.moveTo();

	findWidget("Planes Insurance Info")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("Planes Insurance Info").movePointerToWidget(10, 10);

	findWidget("Planes Insurance Info")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);
});
