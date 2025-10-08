/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Deletion of different node data set values tests", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	// delete Only Latitude from the node data set and check nodes are not drawn.
	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(30);

	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			{
				value: "",
				type: "Clear",
			},
			null,
			null,
			null,
			null
		);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(5);

	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			{
				value: "YCoordinate",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(30);

	// delete Only Longitude from the node data set and check nodes are not drawn
	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			null,
			{
				value: "",
				type: "Clear",
			},
			null,
			null,
			null
		);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(5);

	findWidget("twoNodeSetMap")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			null,
			{
				value: "XCoordinate",
				type: "identifier",
			},
			null,
			null,
			null
		);

	findWidget("twoNodeSetMap")
		.getNodesCount()
		.should.equal(30);
});
