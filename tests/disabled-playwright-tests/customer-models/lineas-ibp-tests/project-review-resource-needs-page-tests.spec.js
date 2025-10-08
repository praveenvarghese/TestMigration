/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Lineas_IBP_Model_2021-04-16/Lineas IBP.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate functionality of Resource Needs page Test", () => {
	loadPage("Main Project/Startup/Start-up");

	findWidget("start-up_1")
		.getVisibleWidgets()
		.should.eql([
			"SC_DaysTillDeadline",
			"BU_ReloadData",
			"BU_HandShakeSummary",
			"BU_CompleteHandshake",
			"BU_StartNewCycle",
			"SC_CurrentCycleInformation",
			"TB_UpcomingCycles",
		]);

	findWidget("BU_HandShakeSummary").click();

	findWidget("new_grid_page_1")
		.getVisibleWidgets()
		.should.eql(["BL_LocsOverviewPerWeek", "LG_LocsOverviewLegend", "TB_LocsSupply_3"]);

	getPageMenu().navigateToPage("Main Project/Project Review/Resource Needs");

	findWidget("new_page")
		.getVisibleWidgets()
		.should.eql([
			"BC_ProjectLocNeedPerWeek",
			"TB_PojectLocNeedPerWeek",
			"T_FilteredProjectsHighLevel",
			"T_DelectedProjectDetailedLevel",
		]);

	getStatusBar()
		.getStatusBarMessages()
		.should.beEqualTo([
			{ HeaderText: "Model settings", Icon: "aimms-cogs", MessageText: " ", State: "active" },
			{
				HeaderText: "Months to show",
				Icon: "aimms-calendar",
				MessageText: " ",
				State: "active",
			},
			{
				HeaderText: "Current Scenario",
				Icon: "aimms-briefcase",
				MessageText: "Live Plan",
				State: "active",
			},
			{
				HeaderText: "Create Scenario",
				Icon: "aimms-file-plus",
				MessageText: " ",
				State: "active",
			},
			{ HeaderText: "Delete Scenario", Icon: "aimms-bin", MessageText: " ", State: "active" },
			{
				HeaderText: "Save current scenario to database",
				Icon: "aimms-database",
				MessageText: " ",
				State: "active",
			},
			{
				HeaderText: "Filters active",
				Icon: "aimms-filter",
				MessageText: "No",
				State: "active",
			},
			{ HeaderText: "Reset filters", Icon: "aimms-reset", MessageText: " ", State: "active" },
		]);

	findWidget("BC_ProjectLocNeedPerWeek")
		.getNumberOfBars()
		.should.be.equal(53);

	findWidget("new_page")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Resource", "Project", "Market", "Corridor", "PA", "Client"]);

	findWidget("new_page")
		.getSidepanels()
		.openSidepanelTab("Resource");

	findWidget("MS_FilterZone").selectNone();

	findWidget("new_page")
		.getSidepanels()
		.closeSidepanelTab();

	findWidget("new_page")
		.getVisibleWidgets()
		.should.eql([
			"BC_ProjectLocNeedPerWeek",
			"TB_PojectLocNeedPerWeek",
			"T_FilteredProjectsHighLevel",
			"T_DelectedProjectDetailedLevel",
		]);

	findWidget("BC_ProjectLocNeedPerWeek").getEmptyWidgetMessage().should.exist;

	findWidget("new_page")
		.getSidepanels()
		.openSidepanelTab("Resource");

	findWidget("MS_FilterZone").selectAll();

	findWidget("new_page")
		.getSidepanels()
		.closeSidepanelTab();

	findWidget("BC_ProjectLocNeedPerWeek")
		.getNumberOfBars()
		.should.be.equal(53);
});
