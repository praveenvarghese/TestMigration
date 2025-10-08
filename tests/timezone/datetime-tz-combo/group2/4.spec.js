/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For different TimeZone on WebUI, assert selected Date&Time as seen on DateTimePicker is same as shown on WebUI.",
	() => {
		loadPage("Main Project/Calendar Tests");

		// Reset data
		findWidget("Reset Data_1").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(0, 0)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("5-June, 2020 23:30");

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Select "Caracas" time zone entry.
		findTimezonePanel().selectApplicationTimezone(`Caracas`);

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(0, 0)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("5-June, 2020 14:00");

		// Select "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" time zone entry.
		findTimezonePanel().selectApplicationTimezone(
			`Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna`
		);

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(0, 0)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("5-June, 2020 20:00");
	}
);
