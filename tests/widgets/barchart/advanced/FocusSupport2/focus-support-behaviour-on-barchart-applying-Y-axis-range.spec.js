/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Bar chart, while applying Y-Axis range.", () => {
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

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "30000",
				valueType: "LITERAL",
			},
			{
				name: "Y-Axis Maximum Bound",
				value: "100000",
				valueType: "LITERAL",
			},
			{
				name: "Step",
				value: "10000",
				valueType: "LITERAL",
			},
		]);

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla Del Hierro");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Gran Canaria");

	findWidget("Barchart")
		.openBarchartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "20000",
				valueType: "LITERAL",
			},
			{
				name: "Y-Axis Maximum Bound",
				value: "60000",
				valueType: "LITERAL",
			},
		])
		.clearOptions([
			{
				name: "Step",
			},
		]);

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Gran Canaria");
});
