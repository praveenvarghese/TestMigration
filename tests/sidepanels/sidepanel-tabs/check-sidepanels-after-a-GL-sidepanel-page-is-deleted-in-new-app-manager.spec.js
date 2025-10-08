/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

//Bug #3237

scenario("Delete a sidepanel page that was configured, and see the updated count of tabs.", () => {
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

	openAppManager().unfoldPageNodes(["Main Project/KPIs"]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/KPIs/Impact Score",
		})
		.clickOnDelete()
		.actionYes()
		.click();

	findWidget("home")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql([
			"Sprint Reliability",
			"Team Energy Score",
			"WoW Score",
			"Demo Score",
			"CSAT",
			"Improvements worked",
		]);
});
