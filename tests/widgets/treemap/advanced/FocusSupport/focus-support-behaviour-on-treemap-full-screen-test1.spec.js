/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check for focus support behaviour on Treemap, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla Del Hierro")
			.click();

		findWidget("Treemap").goInFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.true;

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de La Palma")
			.click();

		findWidget("Treemap").exitFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.false;

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de La Palma");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla Del Hierro")
			.click();

		findWidget("Treemap").goInFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.true;

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
			.click()
			.click();

		findWidget("Treemap").exitFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.false;

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
