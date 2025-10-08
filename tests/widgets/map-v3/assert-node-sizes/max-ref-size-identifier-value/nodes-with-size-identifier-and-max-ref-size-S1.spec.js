/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=medium
 */

scenario(
	"On a Map with Nodes, its Node-Size and Max-Ref-Size of 70, assert the node radius.",
	() => {
		loadPage("Main Project/StepsV3/Maps with Tooltip annotations");

		// Reset Data
		findWidget("Reset Data_2").click();

		// Read all the nodes
		let nodesSet = findWidget("Airports").getNodeSet(0);

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

		// Update Max-Ref-Size identifier value
		findWidget("Cities - Node Sizing - Max Ref Size_1").setValue("70");

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(12);

		// With Max-Ref-Size identifier value set to 70. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("7.17");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("8.02");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("19.64");

		nodesSet
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("25.35");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;

		// Refresh the page and assert the node sizes
		pageRefresh();

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(12);

		// With page reloaded and Max-Ref-Size identifier value set to 70. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("7.17");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("8.02");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("19.64");

		nodesSet
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("25.35");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;

		// Clear size of Amersfoort node
		findWidget("Clear Size of Amersfoort Node_1").click();

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(11);

		// With Amserfoort node having max node size being cleared off. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("7.17");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("8.02");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("8.96");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("12.68");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("17.93");

		nodesSet
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("19.64");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
	}
);
