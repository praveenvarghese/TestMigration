/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for focus support behaviour on Line chart, while applying Y-Axis range.", () => {
	loadPage("Main Project/Charts");

	findWidget("Linechart")
		.findPoint("Isla de La Gomera,TotalCostPerIsland")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de La Gomera");

	findWidget("Linechart")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "50000",
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
		.should.be.equal("Isla de La Gomera");

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.click();

	findWidget("data")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("TotalCostPerIsland");

	findWidget("data")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Isla de Tenerife");

	findWidget("Linechart")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Y-Axis Minimum Bound",
				value: "20000",
				valueType: "LITERAL",
			},
		])
		.clearOptions([
			{
				name: "Y-Axis Maximum Bound",
			},
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
		.should.be.equal("Isla de Tenerife");
});
