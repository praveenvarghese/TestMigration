/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On a Map with Nodes and its Node-Sizes information applied, assert the node radius.",
	() => {
		loadPage("Main Project/StepsV3/map_with_node_size_v3");

		// Read all the nodes
		let nodesSet = findWidget("Map with NodeSize_1").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(12);

		// With Max-Ref-Size identifier value set to default 0. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("8.49");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("9.49");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("15");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("15");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("23.24");

		nodesSet
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("30");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;

		// Clear size of Amersfoort node
		findWidget("Clear Size of Amersfoort Node").click();

		// Read all the nodes
		nodesSet = findWidget("Map with NodeSize_1").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(11);

		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("10.95");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("12.25");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("13.69");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("13.69");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("19.36");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("19.36");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("27.39");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("27.39");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("27.39");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("27.39");

		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("30");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
	}
);
