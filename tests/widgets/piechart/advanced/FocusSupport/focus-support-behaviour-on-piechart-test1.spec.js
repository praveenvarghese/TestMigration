/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Pie chart.", () => {
	loadPage("Main Project/Charts");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Gran Canaria");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Fuerteventura");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
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
