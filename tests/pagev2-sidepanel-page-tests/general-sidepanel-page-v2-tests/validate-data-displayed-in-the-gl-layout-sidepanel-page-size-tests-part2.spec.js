/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("Assert details of widget in the GL dialog page", () => {
	loadPage("Main Project/OpenDIalogPage");

	findWidget("opendialogpage_1")
		.getSidepanels()
		.openSidepanelTab("All Widgets Part2");

	findWidget("TotalCostPerPlane_1")
		.getNumberOfBars()
		.should.be.equal(3);

	findWidget("TotalCostPerIsland_1")
		.getWedgesCount()
		.should.be.equal(7);
});
