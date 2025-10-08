/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of table widget, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		// While widget is not hovered, asserting the buttons available.
		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("DailyPassengers").movePointerToWidget(70, 20);
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

		// Hover on a cell of the table widget. And asserting the buttons available.
		findWidget("DailyPassengers").movePointerToWidget(500, 200);
		findWidget("DailyPassengers")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("Plane Data").movePointerToWidget(10, 5);

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
	}
);
