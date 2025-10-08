/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of a maximized table widget and later minimized, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/home");

		// Hover the title of the widget. And click on Maximize-Button
		findWidget("DailyPassengers").movePointerToWidget(70, 20);
		findWidget("DailyPassengers").goInFullScreenMode();

		// Move cursor away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// While widget is not hovered, asserting the buttons available.
		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move cursor away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move cursor away from table widget.
		getPageHeader()
			.getAppName()
			.moveTo();

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("DailyPassengers")
			.getCell(1, 3)
			.click();

		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("DailyPassengers")
			.getwidegtMenuButton()
			.click();

		findWidget("DailyPassengers")
			.getWidgetMenuDetails()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
				WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
			]);

		// Click on Minimize-Button
		findWidget("DailyPassengers").exitFullScreenMode();

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("Plane Data").movePointerToWidget(10, 5);

		// While Table widget is not hovered, asserting the buttons available.
		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("DailyPassengers")
			.getCell(1, 3)
			.click();

		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
	}
);
