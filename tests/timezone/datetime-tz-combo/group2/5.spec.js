/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For different TimeZone on WebUI, And for an updated datetime cell. Assert selected Date&Time as seen on DateTimePicker is same as shown on WebUI.",
	() => {
		loadPage("Main Project/Calendar Tests");

		// Reset data
		findWidget("Reset Data_1").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Update DateTime on cell(1,1)
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.setValue("2020-08-10 20:30");

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("10-August, 2020 20:30");

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Select "Caracas" time zone entry.
		findTimezonePanel().selectApplicationTimezone(`Caracas`);

		// Update DateTime on cell(1,1)
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.setValue("2020-08-17 15:00");

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("17-August, 2020 15:00");

		// Select "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" time zone entry.
		findTimezonePanel().selectApplicationTimezone(
			`Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna`
		);

		// Update DateTime on cell(1,1)
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.setValue("2020-08-28 17:00");

		// Assert the Date&Time selected on DateTimePicker
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.getDateTimeSelectedOnPicker()
			.should.be.equal("28-August, 2020 17:00");
	}
);
