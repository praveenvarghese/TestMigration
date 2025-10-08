/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Through focus support on Bar chart, check that only non-empty values are set in element parameters.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("SetValues").click();

		findWidget("Barchart")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals");

		findWidget("Barchart").closeOptionDialog();

		findWidget("Barchart")
			.findBar("Isla de Gran Canaria")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Gran Canaria");

		findWidget("SetValues").click();

		findWidget("Barchart")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("x-axis")
			.dragIndex("i1")
			.dropIn("totals");

		findWidget("Barchart")
			.findBar("TotalCostPerIsland")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("");
	}
);
