/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Assert DateTimes shown on WebUI are displayed based on Venezuela TimeZone selected. Update Date&Time and assert they are set and displayed accordingly.",
	() => {
		loadPage("Main Project/Calendar Tests");

		// Reset data
		findWidget("Reset Data_1").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Select "(UTC-04:00) Caracas" time zone entry.
		findTimezonePanel().selectApplicationTimezone(`Caracas`);

		// Assert DateTime data shown on table are displayed wrt Venezuela TimeZone.
		let expected_values = [
			["June 5, 14:00", "", "", "", "", "", ""],
			["", "August 11, 08:00", "", "December 5, 08:00", "", "February 28, 19:15", ""],
			[
				"",
				"March 28, 20:00",
				"March 28, 21:00",
				"March 28, 21:00",
				"March 28, 22:00",
				"",
				"",
			],
			[
				"",
				"October 24, 19:00",
				"October 24, 20:00",
				"October 24, 21:00",
				"October 24, 23:00",
				"",
				"",
			],
			["June 4, 14:30", "", "", "", "", "", ""],
		];
		findWidget("2020 Important Dates")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Set Date&Time to 2 of the cells. One within and outside DST
		findWidget("2020 Important Dates")
			.getCell(1, 0)
			.setValue("2020-10-26 10:30");
		findWidget("2020 Important Dates")
			.getCell(1, 1)
			.setValue("2020-08-10 20:30");

		// Assert DateTime data shown on table are displayed wrt Venezuela TimeZone.
		expected_values = [
			["June 5, 14:00", "", "", "", "", "", ""],
			[
				"October 26, 10:30",
				"August 10, 20:30",
				"",
				"December 5, 08:00",
				"",
				"February 28, 19:15",
				"",
			],
			[
				"",
				"March 28, 20:00",
				"March 28, 21:00",
				"March 28, 21:00",
				"March 28, 22:00",
				"",
				"",
			],
			[
				"",
				"October 24, 19:00",
				"October 24, 20:00",
				"October 24, 21:00",
				"October 24, 23:00",
				"",
				"",
			],
			["June 4, 14:30", "", "", "", "", "", ""],
		];
		findWidget("2020 Important Dates")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		//Reload the page
		pageRefresh();

		// Assert DateTime data shown on table are displayed wrt Indian TimeZone.
		findWidget("2020 Important Dates")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);
	}
);
