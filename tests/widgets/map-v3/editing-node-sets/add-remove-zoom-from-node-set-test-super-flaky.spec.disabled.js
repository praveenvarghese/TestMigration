/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Add and remove node size from node data set and validate nodes displayed", () => {
	loadPage("Main Project/StepsV3/map_with_node_size_v3");

	//Remove node size validate nodes size is et to default
	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("30");

	findWidget("Map with NodeSize_1")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			null,
			null,
			{
				value: "",
				type: "Clear",
			},
			null,
			null
		);

	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("3");

	openAppManager().navigateToPage("Main Project/StepsV3");
	openAppManager().navigateToPage("Main Project/StepsV3/map_with_node_size_v3");

	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("3");

	//Add node size and check nodes are according to the size specified
	findWidget("Map with NodeSize_1")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(
			0,
			null,
			null,
			null,
			{
				value: "NodeSize",
				type: "identifier",
			},
			null,
			null
		);

	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("30");

	openAppManager().navigateToPage("Main Project/StepsV3");
	openAppManager().navigateToPage("Main Project/StepsV3/map_with_node_size_v3");
	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("30");
});
