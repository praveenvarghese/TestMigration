/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Check for focus support behaviour on Line chart in full screen.", () => {
	loadPage("Main Project/Charts");

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("");

	findWidget("Linechart").goInFullScreenMode();

	findWidget("Linechart").isFullScreen().should.be.true;

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.click();

	findWidget("Linechart").exitFullScreenMode();

	findWidget("Linechart").isFullScreen().should.be.false;

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Lanzarote");
});
