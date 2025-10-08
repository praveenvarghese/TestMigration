/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Delete a sidepanel page that was configured, and see the updates count of tabs.", () => {
	loadPage("Main Project/S&OP Review/Last Quarter report");

	// Verify the sidepanel tabs visible on page load
	findWidget("last_quarter_report")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([
			"Way of Working",
			"CSAT",
			"Improvements worked",
			"Marketing KPIs",
			"Marketing Regions Covered",
			"Sales KPIs",
			"New sales leads",
			"Sprint Reliability",
			"Impact Score",
			"Team Energy Score",
		]);

	// Navigate to "S&OP Review" through navigation menu
	getPageMenu().navigateToPage("Main Project/S&OP Review");

	// Open PageManager, delete "Main Project/Marketing KPIs/Regions Covered" and "Main Project/Sales KPIs" sidepanel pages and Close PageManager
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Marketing KPIs/Regions Covered",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/Sales KPIs",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	// Navigate to "S&OP Review/Last Quarter report" page
	getPageMenu().navigateToPage("Main Project/S&OP Review/Last Quarter report");

	// Verify there are only 2 sidepanel tabs visible now
	findWidget("last_quarter_report")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([
			"Way of Working",
			"CSAT",
			"Improvements worked",
			"Marketing KPIs",
			"Sprint Reliability",
			"Impact Score",
			"Team Energy Score",
			"WoW Score",
		]);
});
