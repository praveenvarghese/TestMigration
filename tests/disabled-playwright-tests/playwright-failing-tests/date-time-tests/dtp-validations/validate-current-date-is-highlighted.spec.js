/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test validating current date gets highlighted for the calender", () => {
	loadPage("Main Project/Calendar Tests/DTP Error Handling Tests1");

	//Load calendar with present date
	findWidget("Loads Cal Data - Today within Calendar range").click();

	// Set highlighted date to a cell
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.setHighlightedTodayDate();

	// Assert (2,0) cell has current date time
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.getValue()
		.should.contain(getTodaysDate());

	//Load calendar with Past date
	findWidget("Loads Cal Data- Past Calendar range").click();

	// Set highlighted date to a cell
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.setHighlightedDateTime();

	// Assert (2,0) cell has current date time
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.getValue()
		.should.contain("2018-1-1 0:0");

	//Load calendar with Future date
	findWidget("Loads Cal Data- Future Calendar range").click();

	// Set highlighted date to a cell
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.setHighlightedDateTime();

	// Assert (2,0) cell has current date time
	findWidget("DTPEH DateTime")
		.getCell(2, 0)
		.getValue()
		.should.contain("2050-1-1 0:0");
});
