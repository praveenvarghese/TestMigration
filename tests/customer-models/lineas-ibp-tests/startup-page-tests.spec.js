/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Lineas_IBP_Model_2021-04-16/Lineas IBP.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate functionality of Start up page Test", () => {
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

	findWidget("TB_UpcomingCycles")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["April", "2021-04-01", "2021-04-30", "0.00"],
			["May", "2021-05-01", "2021-05-31", "0.00"],
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

	findWidget("BU_HandShakeSummary").click();

	findWidget("new_grid_page_1")
		.getVisibleWidgets()
		.should.eql(["BL_LocsOverviewPerWeek", "LG_LocsOverviewLegend", "TB_LocsSupply_3"]);
});
