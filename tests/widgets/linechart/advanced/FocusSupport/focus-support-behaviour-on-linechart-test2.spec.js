/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Line chart.", () => {
	loadPage("Main Project/Charts");

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("");

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Lanzarote");

	findWidget("Linechart")
		.findPoint("Isla de Fuerteventura,TotalCostPerIsland")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Fuerteventura");

	findWidget("Linechart")
		.findPoint("Isla de Fuerteventura,TotalCostPerIsland")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Fuerteventura");
});
