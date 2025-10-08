/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Through focus support on Pie chart, check that only non-empty values are set in element parameters.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("SetValues").click();

		findWidget("Piechart")
			.dragIndex("i1")
			.dropIn("totals");

		findWidget("Piechart").closeOptionDialog();

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Fuerteventura");

		findWidget("SetValues").click();

		findWidget("Piechart")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals")
			.dragIndex("i1")
			.dropIn("wedges");

		findWidget("Piechart")
			.findWedge("Isla de Tenerife")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("CitySelected");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Tenerife");
	}
);
