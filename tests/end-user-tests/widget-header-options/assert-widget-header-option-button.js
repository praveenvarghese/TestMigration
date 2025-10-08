/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate widget header options for end user mode", () => {
	loadPage("Main Project/home/Application Settings");

	findWidget("Application Settings_1").setValue(false);

	getPageMenu().navigateToPage("Main Project/Item Actions/Table Data");

	findWidget("IND Cities Coordinates")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("IND Cities Coordinates")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("IND Cities Coordinates")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	findWidget("IND Cities Coordinates")
		.getWidgetMenu()
		.hover();

	findWidget("IND Cities Coordinates")
		.getWidgetMenu()
		.getCSSStyleProperty("background-color")
		.should.be.eql(colors.colorPrimitiveGrey80.rgb);

	findWidget("IND Cities Coordinates")
		.getWidgetMenu()
		.click();

	findWidget("IND Cities Coordinates")
		.getWidgetMenu()
		.getCSSStyleProperty("background-color")
		.should.be.eql(colors.colorPrimitiveAccentBlue100.rgb);

	findWidget("IND Cities Coordinates")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("IND Cities Coordinates")
		.getWidgetMenuItem(0)
		.hover();

	findWidget("IND Cities Coordinates")
		.getWidgetMenuItem(0)
		.getCSSStyleProperty("background-color")
		.should.be.eql(colors.colorPrimitiveAccentBlue100.rgb);

	findWidget("IND Cities Coordinates")
		.getWidgetMenuItem(0)
		.click();

	findWidget("IND Cities Coordinates")
		.getWidgetMenu()
		.getCSSStyleProperty("background-color")
		.should.not.be.eql(colors.colorPrimitiveAccentBlue100.rgb);

	findWidget("IND Cities Coordinates")
		.isWidgetMenuOptionDisplayed(6)
		.should.be.eql(false);
});
