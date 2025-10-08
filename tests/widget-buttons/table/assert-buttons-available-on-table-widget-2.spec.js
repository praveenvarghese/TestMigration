/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of table widget, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Item Actions/Table Data");

		// While widget is not hovered, asserting the buttons available.
		findWidget("IND Cities Coordinates")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("IND Cities Coordinates").movePointerToWidget(70, 20);
		findWidget("IND Cities Coordinates")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("IND DCs Capacity").movePointerToWidget(10, 5);

		// While Table widget is not hovered, asserting the buttons available.
		findWidget("IND Cities Coordinates")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a cell of the table widget. And asserting the buttons available.
		findWidget("IND Cities Coordinates").movePointerToWidget(150, 300);
		findWidget("IND Cities Coordinates")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("IND DCs Capacity").movePointerToWidget(10, 5);

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("IND Cities Coordinates")
			.getCell(5, 1)
			.click();
		findWidget("IND Cities Coordinates")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
	}
);
