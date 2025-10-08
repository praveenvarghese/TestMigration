/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of a Map widget when on&off focus, maximized and hover on nodes.",
	() => {
		loadPage("Main Project/MapV3 Test Page");

		// #region Asserting header buttons on a Map widget, having no Widget-Actions
		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("MapV3Test")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("MapV3Test")
			.getwidegtMenuButton()
			.click();

		findWidget("MapV3Test")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);

		// Maximize the Map widget
		findWidget("MapV3Test").goInFullScreenMode();

		// #region While widget is maximized

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("MapV3Test")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("MapV3Test")
			.getwidegtMenuButton()
			.click();

		findWidget("MapV3Test")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);

		// #endregion

		// Exit full screen mode
		findWidget("MapV3Test").exitFullScreenMode();

		// Hover on the Map widget area. And asserting the buttons available.
		findWidget("MapV3Test")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a node on the Map. And asserting the buttons available.
		findWidget("MapV3Test")
			.getPoint("Karnataka")
			.hover();

		findWidget("MapV3Test")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// #endregion

		// #region Asserting widget header buttons on a Map widget having Widget-Actions
		getPageMenu().navigateToPage("Main Project/MapV3 Test Page/MapV3");
		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("MapV3")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Maximize the Map widget
		findWidget("MapV3").goInFullScreenMode();

		// #region While widget is maximized

		// Hover the appname on page header
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is hovered, asserting the buttons available.
		findWidget("MapV3")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
		// #endregion

		// Exit full screen mode
		findWidget("MapV3").exitFullScreenMode();

		// Hover on the Map widget area. And asserting the buttons available.
		findWidget("MapV3")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a node on the Map. And asserting the buttons available.
		findWidget("MapV3")
			.getPoint("Karnataka")
			.hover();

		findWidget("MapV3")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
		// #endregion
	}
);
