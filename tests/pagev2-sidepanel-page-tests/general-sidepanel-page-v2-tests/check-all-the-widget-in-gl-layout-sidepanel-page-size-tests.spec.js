/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("Add a widget in classic layout Sidepanel page", () => {
	loadPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("All Widgets Part1");

	findWidget("allwidgetsinsidepanelpart1_1")
		.getVisibleWidgets()
		.should.eql([
			"Clear Schedule_1",
			"Results_1",
			"PlaneImage_1",
			"AircraftData_1",
			"sliderWidget",
			"The Gantt Chart_1",
		]);

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("All Widgets Part2");

	findWidget("allwidgetsinsidepanelpart2_1")
		.getVisibleWidgets()
		.should.eql([
			"TotalCostPerPlane_1",
			"TotalCostPerIsland_1",
			"TotalCostPerIslandLineChart_1",
			"Widget Selector_1",
			"TotalCostPerIslandTreeMap_1",
			"ExplanotaryText_1",
			"TheIslandLegend_1",
			"Lab1_1",
		]);

	openAppManager().navigateToPage("Main Project/allWidgetsInSidepanelPart1");

	findWidget("allwidgetsinsidepanelpart1_1")
		.getVisibleWidgets()
		.should.eql([
			"Clear Schedule_1",
			"Results_1",
			"PlaneImage_1",
			"AircraftData_1",
			"sliderWidget",
			"The Gantt Chart_1",
		]);

	openAppManager().navigateToPage("Main Project/allWidgetsInSidepanelPart2");

	findWidget("allwidgetsinsidepanelpart2_1")
		.getVisibleWidgets()
		.should.eql([
			"TotalCostPerPlane_1",
			"TotalCostPerIsland_1",
			"TotalCostPerIslandLineChart_1",
			"Widget Selector_1",
			"TotalCostPerIslandTreeMap_1",
			"ExplanotaryText_1",
			"TheIslandLegend_1",
			"Lab1_1",
		]);
});
