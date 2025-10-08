/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"On table with refresh data, WidgetActions and Filters applied, asserting buttons available on header section, when on&off focus, on cell edit.",
	() => {
		loadPage("Main Project/Sorting/Sorted Table");

		// Edit data on a cell of the table widget, such that the refresh-data button in widget header section is shown.
		findWidget("Sorted_Table_1")
			.getCell(0, 0)
			.setValue("150");

		// Assert the buttons available on widget header section.
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_REFRESH_VIEW,
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
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_REFRESH_VIEW,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Click on another cell of same table widget. And assert the buttons available.
		findWidget("Sorted_Table_1")
			.getCell(0, 1)
			.click();
		findWidget("Sorted_Table_1")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_REFRESH_VIEW,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Click on a cell of another table widget.
		findWidget("Sorted_Table_2")
			.getCell(0, 1)
			.click();

		// Click back on a cell of main table widget.
		findWidget("Sorted_Table_1")
			.getCell(0, 1)
			.click();
		// Assert the buttons available on main table widget header section.
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
