/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=long
 */

scenario(
	"On a Map with Node-Sizes less than 30 and with or without Max-Ref-Size, assert the node radius.",
	() => {
		loadPage("Main Project/StepsV3/Maps with Tooltip annotations");

		// Reset Data
		findWidget("Reset Data_2").click();

		// Clear size of Amersfoort and Breda nodes, this so that all nodes have a size value less than 30.
		findWidget("Clear Size of Amersfoort Node_1").click();
		findWidget("Clear Size of Breda Node").click();

		// Update Max-Ref-Size identifier value
		findWidget("Cities - Node Sizing - Max Ref Size_1").setValue("0");

		// Read all the nodes
		let nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(10);

		// With Max-Ref-Size identifier value set to 0 and max node size is less than 30. Assert the radius of the nodes seen
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

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
		nodesSet.getPoint("Breda").should.not.exist;

		// Refresh the page and assert the node sizes
		pageRefresh();

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(10);

		// With Max-Ref-Size identifier value set to 0 and max node size is less than 30. Post page reload, assert the radius of the nodes seen
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

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
		nodesSet.getPoint("Breda").should.not.exist;

		// Update Max-Ref-Size identifier value
		findWidget("Cities - Node Sizing - Max Ref Size_1").setValue("20");

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(10);

		// With Max-Ref-Size identifier value set to 20 and max node size is less than 30. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("13.42");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("15");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("16.77");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("16.77");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("23.72");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("23.72");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("33.54");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("33.54");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("33.54");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("33.54");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
		nodesSet.getPoint("Breda").should.not.exist;

		// Update Max-Ref-Size identifier value
		findWidget("Cities - Node Sizing - Max Ref Size_1").setValue("40");

		// Read all the nodes
		nodesSet = findWidget("Airports").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet.getNodesCount().should.equal(10);

		// With Max-Ref-Size identifier value set to 40 and max node size is less than 30. Assert the radius of the nodes seen
		nodesSet
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("9.49");

		nodesSet
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("11.86");

		nodesSet
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("11.86");

		nodesSet
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("16.77");

		nodesSet
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("16.77");

		nodesSet
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("23.72");

		nodesSet
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("23.72");

		nodesSet
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("23.72");

		nodesSet
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("23.72");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet.getPoint("Utrecht").should.not.exist;
		nodesSet.getPoint("Haarlem").should.not.exist;
		nodesSet.getPoint("Amersfoort").should.not.exist;
		nodesSet.getPoint("Breda").should.not.exist;
	}
);
