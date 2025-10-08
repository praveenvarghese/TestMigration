/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table focus support tests", () => {
	loadPage("Main Project/table/focus-support");

	findWidget("SelectedMonthScalar")
		.getValue("SelectedMonth")
		.should.be.equal("January");

	findWidget("FocusSupportTable")
		.getCell(0, 0)
		.isFocused()
		.should.be.equal(true);

	findWidget("FocusSupportTable")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("SelectedMonthScalar")
		.getValue("SelectedMonth")
		.should.be.equal("February");

	findWidget("FocusSupportTable")
		.getCell(11, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("SelectedMonthScalar")
		.getValue("SelectedMonth")
		.should.be.equal("December");

	findWidget("FocusSupportTable")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("SelectedMonthScalar")
		.getValue("SelectedMonth")
		.should.be.equal("February");

	findWidget("SelectedMonthScalar").movePointerToWidget();

	findWidget("FocusSupportTable")
		.hasNavigationControls()
		.should.be.equal(true);

	// Note that pressKeys is fragile and sometimes it misses keystrokes
	// Hence we do one keystroke at a time
	findWidget("FocusSupportTable").pressKeys(SPECIAL_KEYS.arrow_down);
	findWidget("FocusSupportTable").pressKeys(SPECIAL_KEYS.arrow_down);
	findWidget("FocusSupportTable").pressKeys(SPECIAL_KEYS.arrow_down);

	findWidget("FocusSupportTable")
		.getCell(4, 0)
		.isFocused()
		.should.be.equal(true);

	findWidget("SelectedMonthScalar")
		.getValue("SelectedMonth")
		.should.be.equal("May");

	findWidget("SelectedMonthScalar").click();

	findWidget("FocusSupportTable")
		.hasNavigationControls()
		.should.be.equal(false);
});
