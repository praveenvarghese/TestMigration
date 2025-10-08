/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Treemap chart.", () => {
	loadPage("Main Project/Charts");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Gran Canaria");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Fuerteventura");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
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
