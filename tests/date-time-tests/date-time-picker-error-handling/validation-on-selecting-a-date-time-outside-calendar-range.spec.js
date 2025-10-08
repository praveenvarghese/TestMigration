/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Test validating error handling on selecting a Date&Time in element-parameter outside the calendar range.",
	() => {
		loadPage("Main Project/Calendar Tests/DTP Error Handling Tests1");

		// Load calendar with present date
		findWidget("Loads Calendar with static data").click();

		// Assert (2,0) cell has no Date&Time value
		findWidget("DTPEH DateTime")
			.getCell(2, 0)
			.getValue()
			.should.contain("");

		// Set a Date&Time outside the calendar range
		findWidget("DTPEH DateTime")
			.getCell(2, 0)
			.setValue("2019-6-5 05");

		// Assert an error message is reported for the above interaction.
		getLogMessage().openList();

		getLogMessage()
			.getCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Unable to map '2019-06-05 05' to an element within the range of calendar 'DTPEH_Cal'"
			);

		getLogMessage().closeList();

		// Assert (2,0) cell has no Date&Time value, remains unchanged.
		findWidget("DTPEH DateTime")
			.getCell(2, 0)
			.getValue()
			.should.contain("");

		// Assert Date&Time set in (3,0) cell
		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.getValue()
			.should.contain("2019-6-5 8:0");

		// Set a Date&Time outside the calendar range
		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.setValue("2019-6-6 20");

		// Assert an error message is reported for the above interaction.
		getLogMessage().openList();
		getLogMessage()
			.getCount()
			.should.be.equal(2);

		// Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Unable to map '2019-06-06 20' to an element within the range of calendar 'DTPEH_Cal'"
			);

		// Assert Date&Time set in (3,0) cell remains unchanged.
		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.getValue()
			.should.contain("2019-6-5 8:0");
	}
);
