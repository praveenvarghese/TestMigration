/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Validate the application time and timezone shown on timezone panel. Change the application timezone, and assert the application time.",
	() => {
		loadPage("Main Project/TimeZone Tests");

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Assert Application time entry shown is that of selected "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi" time zone.
		findTimezonePanel()
			.getCurrentApplicationTime24HourFormat()
			.should.match(getCurrentTimeBasedOnTimezoneOffset(+5.5));

		// Assert "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi" is the selected application time zone.
		findTimezonePanel()
			.getSelectedApplicationTimeZone()
			.should.be.equal("(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi");

		// Select "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi" time zone entry.
		findTimezonePanel().selectApplicationTimezone(
			`08:00) Beijing, Chongqing, Hong Kong, Urumqi`
		);

		// Assert Application time entry shown is that of "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi" time zone.
		findTimezonePanel()
			.getCurrentApplicationTime24HourFormat()
			.should.match(getCurrentTimeBasedOnTimezoneOffset(+8));

		// Assert "China Standard Time" is the selected application time zone.
		findTimezonePanel()
			.getSelectedApplicationTimeZone()
			.should.be.equal(`(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi`);

		// Select "(UTC-04:00) Caracas" time zone entry.
		findTimezonePanel().selectApplicationTimezone(`04:00) Caracas`);

		// Assert Application time entry shown is that of "(UTC-04:00) Caracas" time zone.
		findTimezonePanel()
			.getCurrentApplicationTime24HourFormat()
			.should.match(getCurrentTimeBasedOnTimezoneOffset(-4));

		// Assert "(UTC-04:00) Caracas" is the selected application time zone.
		findTimezonePanel()
			.getSelectedApplicationTimeZone()
			.should.be.equal("(UTC-04:00) Caracas");
	}
);
