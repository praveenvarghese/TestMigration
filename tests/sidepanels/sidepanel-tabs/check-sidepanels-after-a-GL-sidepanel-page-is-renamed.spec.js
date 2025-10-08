/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Rename a sidepanel page that was configured, and see that sidepanel tab on a page continues to be available and has no effect on the tabs.",
	() => {
		loadPage("Main Project/home");

		// Verify the sidepanel tabs visible on page load
		findWidget("home")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql([
				"Sprint Reliability",
				"Impact Score",
				"Team Energy Score",
				"WoW Score",
				"Demo Score",
				"CSAT",
				"Improvements worked",
			]);

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/KPIs/Impact Score",
			})
			.clickOnRename()
			.enterName("Score")
			.pressKeys([SPECIAL_KEYS.enter]);

		getPageMenu().navigateToPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql([
				"Sprint Reliability",
				"Impact Score",
				"Team Energy Score",
				"WoW Score",
				"Demo Score",
				"CSAT",
				"Improvements worked",
			]);
	}
);
