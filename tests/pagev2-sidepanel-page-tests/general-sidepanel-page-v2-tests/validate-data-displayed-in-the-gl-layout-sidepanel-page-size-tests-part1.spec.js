/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("Assert details of widget in the GL dialog page", () => {
	loadPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("All Widgets Part1");

	findWidget("Clear Schedule_1")
		.getTitle()
		.should.be.equal("Clear Schedule");

	findWidget("Results_1")
		.getValue("TotalCost")
		.should.be.equal("0.00");

	findWidget("AircraftData_1")
		.getBubblesCount()
		.should.be.equal(3);

	findWidget("sliderWidget")
		.getValue()
		.should.be.equal("100");

	findWidget("The Gantt Chart_1")
		.findResource(["Klaas Vaak"])
		.findJob("Spare Time")
		.click();

	openAppManager().navigateToPage("Main Project/Gantt Page");

	findWidget("The Selected Job")
		.getValue()
		.should.be.equal("Spare Time");
});
