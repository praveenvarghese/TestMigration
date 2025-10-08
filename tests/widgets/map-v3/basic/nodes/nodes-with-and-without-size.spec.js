/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Nodes are loaded only when both Longitude and Latitude are provided.", () => {
	loadPage("Main Project/StepsV3/map_with_node_size_v3");

	findWidget("Map with NodeSize_1")
		.getNodesCount()
		.should.equal(12);

	findWidget("Map with NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("30");

	findWidget("Map with NodeSize_1")
		.getPoint("Zwolle")
		.getRadius()
		.should.be.equal("21.21");

	findWidget("Map Without NodeSize_1")
		.getNodesCount()
		.should.equal(25);

	findWidget("Map Without NodeSize_1")
		.getPoint("Amersfoort")
		.getRadius()
		.should.be.equal("3");

	findWidget("Map Without NodeSize_1")
		.getPoint("Zwolle")
		.getRadius()
		.should.be.equal("3");

	findWidget("Map Without NodeSize_1")
		.getPoint("Deventer")
		.getRadius()
		.should.be.equal("3");
});
