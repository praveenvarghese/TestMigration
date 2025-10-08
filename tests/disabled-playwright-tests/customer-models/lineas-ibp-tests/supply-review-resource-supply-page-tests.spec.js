/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Lineas_IBP_Model_2021-04-16/Lineas IBP.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate functionality of Resource supply page Test", () => {
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

	getPageMenu().navigateToPage("Main Project/Supply Review/Resource Supply");

	findWidget("resou_1")
		.getVisibleWidgets()
		.should.eql(["LC_LocSupply", "LG_LocsSupplyLegend", "TB_LocSupply"]);

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

	findWidget("LC_LocSupply")
		.findPoints()
		.should.have.numberOfItems(72);

	findWidget("LG_LocsSupplyLegend")
		.getLegendEntries()
		.should.eql(["Total", "Gross", "Net actuals", "Net forecast", "Budget"]);

	findWidget("resou_1")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql("Resource");

	findWidget("resou_1")
		.getSidepanels()
		.openSidepanelTab("Resource");

	findWidget("MS_SupplyLocomotiveTypeSelection").selectNone();

	findWidget("resou_1")
		.getSidepanels()
		.closeSidepanelTab();

	findWidget("resou_1")
		.getVisibleWidgets()
		.should.eql(["LC_LocSupply", "LG_LocsSupplyLegend", "TB_LocSupply"]);

	findWidget("LC_LocSupply").getEmptyWidgetMessage().should.not.exist;

	findWidget("TB_LocSupply").getEmptyWidgetMessage().should.exist;

	findWidget("resou_1")
		.getSidepanels()
		.openSidepanelTab("Resource");

	findWidget("MS_SupplyLocomotiveTypeSelection").selectAll();

	findWidget("resou_1")
		.getSidepanels()
		.closeSidepanelTab();

	findWidget("LC_LocSupply")
		.findPoints()
		.should.have.numberOfItems(72);
});
