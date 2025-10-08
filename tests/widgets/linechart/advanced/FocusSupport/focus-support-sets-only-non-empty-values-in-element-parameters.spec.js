/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Through focus support on Line chart, check that only non-empty values are set in element parameters.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("SetValues").click();

		findWidget("Linechart")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals");

		findWidget("Linechart").closeOptionDialog();

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote")
			.click();

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de Lanzarote");
	}
);
