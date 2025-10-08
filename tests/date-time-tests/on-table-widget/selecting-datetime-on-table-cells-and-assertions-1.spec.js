/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table widget, with Indexed-Element-Parameter data, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Shipping Schedules?_aimms_only_table_itemactions=true");

		// Set Yesterday's date to (0,0) cell
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.setValue(getYesterdaysDate());

		// Assert (0,0) cell has Yesterday's date.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getValue()
			.should.contain(getYesterdaysDate() + " 9:10");

		// Set Tomorrow's date to (1,0) cell
		findWidget("Shipping Departure DateTime")
			.getCell(1, 0)
			.setValue(getTomorrowsDate());

		// Assert (1,0) cell has Tomorrow's date.
		findWidget("Shipping Departure DateTime")
			.getCell(1, 0)
			.getValue()
			.should.contain(getTomorrowsDate() + " 9:10");

		// For (2,0) cell select "Today" entry on calendar
		findWidget("Shipping Departure DateTime")
			.getCell(2, 0)
			.setValue("TODAY");

		// Assert (2,0) cell has Today's date.
		findWidget("Shipping Departure DateTime")
			.getCell(2, 0)
			.getValue()
			.should.contain(getTodaysDate() + " 9:10");

		// For (4,0) cell select "Clear" entry on calendar
		findWidget("Shipping Departure DateTime")
			.getCell(4, 0)
			.setValue("CLEAR");

		// Assert (4,0) cell has no date entry.
		findWidget("Shipping Departure DateTime")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("");

		// Navigate to another page and back to current page
		// This is to assert the above set datetimes are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Shipping Schedules");

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
