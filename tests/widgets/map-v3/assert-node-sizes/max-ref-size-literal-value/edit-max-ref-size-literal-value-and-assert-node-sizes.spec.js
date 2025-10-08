/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On a Map with Nodes of multiple Node-sets plotted, changing the Max-Ref-Size literal value. Assert node's radius is based on their respective Node-Set-NodeSizes and Node-Set-MaxRefSize.",
	() => {
		loadPage("Main Project/Multiple Maps/2Maps?_aimms_only_persistence.write=true");

		// Reset Data
		findWidget("Reset Data_3").click();

		//Edit Max-Ref-Size info of Node-Set-0
		findWidget("2Maps")
			.nodeSetsMapLeafletOptionEditor()
			.editNodeSet(
				0,
				null,
				null,
				null,
				null,
				{
					value: "200",
					type: "literal",
				},
				null
			)
			.deleteNodeInformation(1, "Maximum Reference Size");

		// Close option Editor
		findWidget("2Maps").closeOptionDialog();

		// Read all the nodes of Node-Set-0
		let nodesSet0 = findWidget("2Maps").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet0.getNodesCount().should.equal(10);

		// With Max-Ref-Size set to 200 literal value. Assert the radius of the nodes of Node-Set-0 seen
		nodesSet0
			.getPoint("Chandoor, Telangana")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Bhitarwar, Madhya Pradesh")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Madhya Pradesh")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Telangana")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Chhattisgarh")
			.getRadius()
			.should.be.equal("25.98");

		nodesSet0
			.getPoint("Maharashtra")
			.getRadius()
			.should.be.equal("30");

		nodesSet0
			.getPoint("Tamil Nadu")
			.getRadius()
			.should.be.equal("30");

		nodesSet0
			.getPoint("Tripura")
			.getRadius()
			.should.be.equal("39.69");

		nodesSet0
			.getPoint("Karnataka")
			.getRadius()
			.should.be.equal("39.69");

		nodesSet0
			.getPoint("Haryana")
			.getRadius()
			.should.be.equal("41.35");

		// Read all the nodes of Node-Set-1
		let nodesSet1 = findWidget("2Maps").getNodeSet(1);

		// Assert the number of nodes.
		nodesSet1.getNodesCount().should.equal(12);

		// With Max-Ref-Size identifier for Node-Set-1 removed. Assert the radius of the nodes seen
		nodesSet1
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("8.49");

		nodesSet1
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("9.49");

		nodesSet1
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet1
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet1
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("23.24");

		nodesSet1
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("30");

		// Refresh the page and assert the node sizes
		pageRefresh();

		// Read all the nodes of Node-Set-0
		nodesSet0 = findWidget("2Maps").getNodeSet(0);
		// Assert the number of nodes.
		nodesSet0.getNodesCount().should.equal(10);

		// Read all the nodes of Node-Set-1
		nodesSet1 = findWidget("2Maps").getNodeSet(1);
		// Assert the number of nodes.
		nodesSet1.getNodesCount().should.equal(12);

		// With Max-Ref-Size set to 200 literal value. Assert the radius of the nodes of Node-Set-0 seen
		nodesSet0
			.getPoint("Chandoor, Telangana")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Bhitarwar, Madhya Pradesh")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Madhya Pradesh")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Telangana")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet0
			.getPoint("Chhattisgarh")
			.getRadius()
			.should.be.equal("25.98");

		nodesSet0
			.getPoint("Maharashtra")
			.getRadius()
			.should.be.equal("30");

		nodesSet0
			.getPoint("Tamil Nadu")
			.getRadius()
			.should.be.equal("30");

		nodesSet0
			.getPoint("Tripura")
			.getRadius()
			.should.be.equal("39.69");

		nodesSet0
			.getPoint("Karnataka")
			.getRadius()
			.should.be.equal("39.69");

		nodesSet0
			.getPoint("Haryana")
			.getRadius()
			.should.be.equal("41.35");

		// With Max-Ref-Size identifier for Node-Set-1 removed. Assert the radius of the nodes seen
		nodesSet1
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("8.49");

		nodesSet1
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("9.49");

		nodesSet1
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet1
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("10.61");

		nodesSet1
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("23.24");

		nodesSet1
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("30");
	}
);
