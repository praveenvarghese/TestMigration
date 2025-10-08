/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check for focus support behaviour on Pie chart, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla Del Hierro")
			.click();

		findWidget("Piechart").goInFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.true;

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de La Palma")
			.click();

		findWidget("Piechart").exitFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.false;

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de La Palma");

		findWidget("Piechart").goInFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.true;

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.click()
			.click();

		findWidget("Piechart").exitFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.false;

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Gran Canaria");
	}
);
