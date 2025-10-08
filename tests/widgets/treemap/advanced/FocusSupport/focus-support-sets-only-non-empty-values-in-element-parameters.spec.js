/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Through focus support on Treemap, check that only non-empty values are set in element parameters.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("SetValues").click();

		findWidget("Treemap")
			.dragIndex("i1")
			.dropIn("totals");

		findWidget("Treemap").closeOptionDialog();

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("");

		findWidget("SetValues").click();

		findWidget("Treemap")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals")
			.dragIndex("i1")
			.dropIn("rectangles");

		findWidget("Treemap")
			.findRectangle("Isla de Tenerife")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Tenerife");
	}
);
