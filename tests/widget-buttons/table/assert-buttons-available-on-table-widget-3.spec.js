/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"On table with WidgetActions and Filters applied, asserting buttons available on header section, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Sorting/Sorted Table");

		// While widget is not hovered, asserting the buttons available.
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover the title of the widget. And asserting the buttons available.
		findWidget("Sorted_Table_1").movePointerToWidget(70, 20);
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("Sorted_Table_2").movePointerToWidget(10, 5);

		// While Table widget is not hovered, asserting the buttons available.
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a cell of the table widget. And asserting the buttons available.
		findWidget("Sorted_Table_1").movePointerToWidget(170, 200);
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("Sorted_Table_2").movePointerToWidget(10, 5);

		// Hover over the whitespace of the table widget. And asserting the buttons available.
		findWidget("Sorted_Table_1").movePointerToWidget(350, 350);
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from table widget. Hover another widget on the page.
		findWidget("Sorted_Table_2").movePointerToWidget(10, 5);

		// Click on a cell of the table widget. And asserting the buttons available.
		findWidget("Sorted_Table_1")
			.getCell(0, 5)
			.click();
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
	}
);
