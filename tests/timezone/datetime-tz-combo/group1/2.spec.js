/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Assert DateTimes shown on WebUI are displayed based on Amsterdam TimeZone selected. Update Date&Time and assert they are set and displayed accordingly.",
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

		// Select "(UTC+02:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" time zone entry.
		findTimezonePanel().selectApplicationTimezone(
			`Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna`
		);

		// Assert DateTime data shown on table are displayed wrt Amsterdam TimeZone.
		let expected_values = [
			["June 5, 20:00 DST", "", "", "", "", "", ""],
			["", "August 11, 14:00 DST", "", "December 5, 13:00", "", "February 29, 00:15", ""],
			[
				"",
				"March 29, 01:00",
				"March 29, 03:00 DST",
				"March 29, 03:00 DST",
				"March 29, 04:00 DST",
				"",
				"",
			],
			[
				"",
				"October 25, 01:00 DST",
				"October 25, 02:00 DST",
				"October 25, 02:00",
				"October 25, 04:00",
				"",
				"",
			],
			["June 4, 20:30 DST", "", "", "", "", "", ""],
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

		// Assert DateTime data shown on table are displayed wrt Amsterdam TimeZone.
		expected_values = [
			["June 5, 20:00 DST", "", "", "", "", "", ""],
			[
				"October 26, 10:30",
				"August 10, 20:30 DST",
				"",
				"December 5, 13:00",
				"",
				"February 29, 00:15",
				"",
			],
			[
				"",
				"March 29, 01:00",
				"March 29, 03:00 DST",
				"March 29, 03:00 DST",
				"March 29, 04:00 DST",
				"",
				"",
			],
			[
				"",
				"October 25, 01:00 DST",
				"October 25, 02:00 DST",
				"October 25, 02:00",
				"October 25, 04:00",
				"",
				"",
			],
			["June 4, 20:30 DST", "", "", "", "", "", ""],
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
