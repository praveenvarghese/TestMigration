/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario("Check for focus support when nodes are deleted and added", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	//Validate for focus support and count of nodes when existing nodes are deleted
	findWidget("selectedCity")
		.getValue()
		.should.be.equal("");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("");

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(30);

	findWidget("twoNodeSetMap")
		.getPoint("Amsterdam")
		.click();

	findWidget("twoNodeSetMap")
		.getPoint("Lelystad")
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Lelystad");

	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.deleteNodeSet(1);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(25);

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Lelystad");

	//Validate for focus support and count of nodes when existing nodes are added
	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.addNodeSet(
			{
				value: "a",
				type: "identifier",
				storeFocus: [
					{
						index: "a",
						value: "SelectedAirport",
					},
				],
			},
			{
				value: "AirportYCoordinate",
				type: "identifier",
			},
			{
				value: "AirportXCoordinate",
				type: "identifier",
			}
		);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(30);

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Lelystad");
});
