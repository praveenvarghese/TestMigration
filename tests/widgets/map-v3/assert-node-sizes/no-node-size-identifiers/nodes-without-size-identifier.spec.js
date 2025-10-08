/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On a Map with Nodes data, and no Node-sizes. Assert all nodes are drawn with a default node size of 3.",
	() => {
		loadPage("Main Project/StepsV3/map_with_node_size_v3");

		// Read all the nodes
		let nodesSet = findWidget("Map Without NodeSize_1").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(25);

		// Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Bosch")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Haag")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Helder")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Deventer")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Emmen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Enschede")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Haarlem")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Leeuwarden")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Nijmegen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Tilburg")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Utrecht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Venlo")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Vlissingen")
			.getRadius()
			.should.be.equal("3");

		// Clear size of Amersfoort node
		findWidget("Clear Size of Amersfoort Node").click();

		// Read all the nodes
		nodesSet = findWidget("Map Without NodeSize_1").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(25);

		// Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Bosch")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Haag")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Den Helder")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Deventer")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Emmen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Enschede")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Haarlem")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Leeuwarden")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Nijmegen")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Tilburg")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Utrecht")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Venlo")
			.getRadius()
			.should.be.equal("3");
		nodesSet
			.getPoint("Vlissingen")
			.getRadius()
			.should.be.equal("3");
	}
);
