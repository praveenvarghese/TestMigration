/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check for focus support behaviour on Bar chart, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla Del Hierro")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla Del Hierro");

		findWidget("Barchart").goInFullScreenMode();

		findWidget("Barchart").isFullScreen().should.be.true;

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de La Palma")
			.click();

		findWidget("Barchart").exitFullScreenMode();

		findWidget("Barchart").isFullScreen().should.be.false;

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de La Palma");
	}
);
