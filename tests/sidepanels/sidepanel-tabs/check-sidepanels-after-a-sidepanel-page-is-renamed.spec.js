/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Rename a sidepanel page that was configured, and see that sidepanel tab on a page continues to be available.",
	() => {
		loadPage("Main Project/S&OP Review/Last FY report");

		// Verify the sidepanel tabs visible on page load
		findWidget("last_fy_report")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql([
				"Sprint Reliability",
				"Marketing KPIs",
				"Team Energy Score",
				"WoW Score",
				"Demo Score",
			]);

		// Navigate to "S&OP Review" through navigation menu
		getPageMenu().navigateToPage("Main Project/S&OP Review");

		// Open PageManager, rename "Project/Marketing KPIs" and "Main Project/KPIs/Sprint Reliability" sidepanel pages and Close PageManager
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Marketing KPIs",
			})
			.clickOnRename()
			.enterName("M KPIs")
			.pressKeys([SPECIAL_KEYS.enter]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/KPIs/Sprint Reliability",
			})
			.clickOnRename()
			.enterName("Deliverables Reliability")
			.pressKeys([SPECIAL_KEYS.enter]);

		// Navigate to "S&OP Review/Last FY report" page
		getPageMenu().navigateToPage("Main Project/S&OP Review/Last FY report");

		// Renaming the sidepanel pages, has no effect on the sidepanel tabs visible.
		// Verify the sidepanel tabs on the page
		findWidget("last_fy_report")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql([
				"Sprint Reliability",
				"Marketing KPIs",
				"Team Energy Score",
				"WoW Score",
				"Demo Score",
			]);
	}
);
