/*!
 * @AIMMS_FILE=models/Bugs/C4164-Scroll-issue-sidepanel/special_chars.aimms
 */

scenario("GL4164 - For classic page sidepanel scroll is not visible", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filters");

	findWidget("sp_new_1").hasWorkingStandardVerticalBrowserScrollBar().should.be.true;
});
