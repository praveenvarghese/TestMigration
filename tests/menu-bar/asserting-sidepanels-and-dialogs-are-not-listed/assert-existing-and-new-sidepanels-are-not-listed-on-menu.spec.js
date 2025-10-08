/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify creation of Side Panel page through Page manager", () => {
	loadPage("Main Project/home?aimms_only_persistence.write=true");

	//Verify "Main Project/KPIs" and "Main Project/KPIs/Impact Score" sidepanel pages are not seen in Page Menu.
	getPageMenu().hasNotPages(["Main Project/KPIs", "Main Project/KPIs/Impact Score"]).should.be
		.true;

	getPageMenu().closeMenu();

	// Add "Main Project/KPIs/CSAT/2019 Q1 Score" sidepanel page.
	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/KPIs/CSAT",
		})
		.clickOnAddSidepanelPage()
		.enterName("2019 Q1 Score");

	// Navigate to above sidepanel page
	getAppManager().navigateToPage("Main Project/KPIs/CSAT/2019 Q1 Score");

	// Add "Main Project/KPIs/CSAT/2019 Q1 Score/Q1.1 Coverage" sidepanel page.
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/KPIs/CSAT/2019 Q1 Score",
		})
		.clickOnAddSidepanelPage()
		.enterName("Q1.1 Coverage");

	//Verify the above created "Main Project/Side Panels", "Main Project/Side Panels/E2E Coverage" and "Main Project/KPIs/CSAT/2019 Q1 Score" sidepanel pages are not seen in Page Menu.
	getPageMenu().hasNotPages([
		"Main Project/KPIs/CSAT/2019 Q1 Score",
		"Main Project/KPIs/CSAT/2019 Q1 Score/Q1.1 Coverage",
	]).should.be.true;
});
