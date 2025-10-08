/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Assert DateTimes shown on WebUI are displayed based on IST TimeZone selected. Update Date&Time and assert they are set and displayed accordingly.",
	() => {
		loadPage("Main Project/Calendar Tests");

		// Reset data
		findWidget("Reset Data_1").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Assert DateTime data shown on table are displayed wrt Indian TimeZone.
		let expected_values = [
			["June 5, 23:30", "", "", "", "", "", ""],
			["", "August 11, 17:30", "", "December 5, 17:30", "", "February 29, 04:45", ""],
			[
				"",
				"March 29, 05:30",
				"March 29, 06:30",
				"March 29, 06:30",
				"March 29, 07:30",
				"",
				"",
			],
			[
				"",
				"October 25, 04:30",
				"October 25, 05:30",
				"October 25, 06:30",
				"October 25, 08:30",
				"",
				"",
			],
			["June 5, 00:00", "", "", "", "", "", ""],
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

		// Assert DateTime data shown on table are displayed wrt Indian TimeZone.
		expected_values = [
			["June 5, 23:30", "", "", "", "", "", ""],
			[
				"October 26, 10:30",
				"August 10, 20:30",
				"",
				"December 5, 17:30",
				"",
				"February 29, 04:45",
				"",
			],
			[
				"",
				"March 29, 05:30",
				"March 29, 06:30",
				"March 29, 06:30",
				"March 29, 07:30",
				"",
				"",
			],
			[
				"",
				"October 25, 04:30",
				"October 25, 05:30",
				"October 25, 06:30",
				"October 25, 08:30",
				"",
				"",
			],
			["June 5, 00:00", "", "", "", "", "", ""],
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
