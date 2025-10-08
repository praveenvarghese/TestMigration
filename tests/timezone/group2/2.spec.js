/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Assert application timezone updated is retained after page navigation.", () => {
	loadPage("Main Project/TimeZone Tests");

	//Click on Timezone button in footer
	getFooter()
		.getTimezoneButton()
		.click();

	// Select "(UTC-04:00) Caracas" time zone entry.
	findTimezonePanel().selectApplicationTimezone(`04:00) Caracas`);

	//Click on Timezone button in footer, and close TimeZone panel
	getFooter()
		.getTimezoneButton()
		.click();

	// Navigate to another page
	getPageMenu().navigateToPage("Main Project/Calendar Tests");

	//Click on Timezone button in footer
	getFooter()
		.getTimezoneButton()
		.click();

	// Assert "(UTC-04:00) Caracas" is the selected application time zone.
	findTimezonePanel()
		.getSelectedApplicationTimeZone()
		.should.be.equal("(UTC-04:00) Caracas");

	// Assert Application time entry shown is that of "(UTC-04:00) Caracas" time zone.
	findTimezonePanel()
		.getCurrentApplicationTime24HourFormat()
		.should.match(getCurrentTimeBasedOnTimezoneOffset(-4));
});
