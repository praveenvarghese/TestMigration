/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Assert Now-Line on GanttChart is based on the TimeZone selected.", () => {
	loadPage("Main Project/TimeZone Tests");

	// Reset data
	findWidget("Reset Data").click();
	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	// Unfold the Secondary page actions
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// Click on page action that toggles Now-Line visibility
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	// Assert Now line is not visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.not.exist;

	//Click on Timezone button in footer
	getFooter()
		.getTimezoneButton()
		.click();

	// Select "Beijing, Chongqing, Hong Kong, Urumqi" time zone entry.
	findTimezonePanel().selectApplicationTimezone(`Beijing, Chongqing, Hong Kong, Urumqi`);

	// Assert Now line is not visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.not.exist;

	// Click on page action that toggles Now-Line visibility
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	// Assert Now line is now visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.exist;

	// Assert the timeline of the Now line shown on the GanttChart
	// Assert it is in accordance to the TimeZone selected
	findWidget("GC_TZ")
		.getNowLineInfo()
		.getCurrentTime()
		.should.match(getCurrentTimeBasedOnTimezoneOffset(+8));

	//Reload the page
	pageRefresh();

	// Assert Now line is now visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.exist;

	// Assert the timeline of the Now line shown on the GanttChart
	// Assert it is in accordance to the TimeZone selected
	findWidget("GC_TZ")
		.getNowLineInfo()
		.getCurrentTime()
		.should.match(getCurrentTimeBasedOnTimezoneOffset(+8));

	// Unfold the Secondary page actions
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// Click on page action that toggles Now-Line visibility
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	// Assert Now line is now not visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.not.exist;

	//Click on Timezone button in footer
	getFooter()
		.getTimezoneButton()
		.click();

	// Select "Caracas" time zone entry.
	findTimezonePanel().selectApplicationTimezone(`Caracas`);

	//Reload the page
	pageRefresh();

	// Assert Now line is now visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.not.exist;

	// Unfold the Secondary page actions
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// Click on page action that toggles Now-Line visibility
	findWidget("timezone_tests")
		.getSecondaryPageActions()
		.getPageActionV2Details(1)
		.click();

	// Assert Now line is now visible on the Gantt Chart
	findWidget("GC_TZ").getNowLine().should.exist;

	// Assert the timeline of the Now line shown on the GanttChart
	// Assert it is in accordance to the TimeZone selected
	findWidget("GC_TZ")
		.getNowLineInfo()
		.getCurrentTime()
		.should.match(getCurrentTimeBasedOnTimezoneOffset(-4));
});
