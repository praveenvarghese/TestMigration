/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"On a table widget, with dropdown data, tests asserting reading, updating and deleting values from the cell.",
	() => {
		loadPage("Main Project/Shipping Schedules?_aimms_only_table_itemactions=true");

		// Set Yesterday's date to (0,0) cell
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.setValue(getYesterdaysDate() + " 9:10");

		// Assert (0,0) cell has Yesterday's date.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getValue()
			.should.contain(getYesterdaysDate() + " 9:10");

		// Set Tomorrow's date to (1,0) cell
		findWidget("Shipping Departure DateTime")
			.getCell(1, 0)
			.setValue(getTomorrowsDate() + " 9:10");

		// Assert (1,0) cell has Tomorrow's date.
		findWidget("Shipping Departure DateTime")
			.getCell(1, 0)
			.getValue()
			.should.contain(getTomorrowsDate() + " 9:10");

		// For (2,0) cell select "Today" entry on calendar
		findWidget("Shipping Departure DateTime")
			.getCell(2, 0)
			.setValue(getTodaysDate());

		// Assert (2,0) cell has Today's date.
		findWidget("Shipping Departure DateTime")
			.getCell(2, 0)
			.getValue()
			.should.contain(getTodaysDate() + " 9:10");

		// For (4,0) cell select "Clear" entry on calendar
		findWidget("Shipping Departure DateTime")
			.getCell(4, 0)
			.clearValue();

		// Assert (4,0) cell has no date entry.
		findWidget("Shipping Departure DateTime")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("");

		// Rerefesh the page and assert the above set Date&Times are retained.
		pageRefresh();

		// Assert the earlier made date changes are retained

		// Assert (0,0) cell has Yesterday's date.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getValue()
			.should.contain(getYesterdaysDate() + " 9:10");

		// Assert (1,0) cell has Tomorrow's date.
		findWidget("Shipping Departure DateTime")
			.getCell(1, 0)
			.getValue()
			.should.contain(getTomorrowsDate() + " 9:10");

		// Assert (2,0) cell has Today's date.
		findWidget("Shipping Departure DateTime")
			.getCell(2, 0)
			.getValue()
			.should.contain(getTodaysDate() + " 9:10");

		// Assert (4,0) cell has no date entry.
		findWidget("Shipping Departure DateTime")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("");
	}
);
