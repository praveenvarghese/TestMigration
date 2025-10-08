/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify Sidepanel page is of 2 columns size", () => {
	loadPage("Main Project/KPIs/CSAT?_aimms_only_sidepanel=true");

	// Verify the page layout is of 2-columns
	findWidget("csat_1").hasPageColumns(2).should.be.true;

	// Navigate to "S&OP Review/Last Quarter report" page
	openAppManager().navigateToPage("Main Project/KPIs/Sprint Reliability");

	// Verify the page layout is of 2-columns
	findWidget("sprint_reliability").hasPageColumns(2).should.be.true;
});
