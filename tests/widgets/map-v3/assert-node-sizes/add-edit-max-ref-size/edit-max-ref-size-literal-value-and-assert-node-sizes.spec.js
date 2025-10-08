/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Updating Max-Ref-Size information of the 2 node-sets from literal to identifiers. Assert node's radius is updated based on their updated Node-Set-NodeSizes and Node-Set-MaxRefSize.",
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
					value: "IND_DC_NodeSizing_MaxRefSize",
					type: "identifier",
				},
				null
			)
			.editNodeSet(
				1,
				null,
				null,
				null,
				null,
				{
					value: "Cities_NodeSizing_MaxRefSize",
					type: "identifier",
				},
				null
			);

		// Close option Editor
		findWidget("2Maps").closeOptionDialog();

		// Read all the nodes
		let nodesSet0 = findWidget("2Maps").getNodeSet(0);
		// Assert the number of nodes.
		nodesSet0.getNodesCount().should.equal(10);

		// Read all the nodes
		let nodesSet1 = findWidget("2Maps").getNodeSet(1);
		// Assert the number of nodes.
		nodesSet1.getNodesCount().should.equal(12);

		// With Max-Ref-Size set to an identifier with value 200. Assert the radius of the nodes of Node-Set-0 seen
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

		// With Max-Ref-Size set to an identifier with value 25. Assert the radius of the nodes of Node-Set-1 seen
		nodesSet1
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("12");

		nodesSet1
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("13.42");

		nodesSet1
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("32.86");

		nodesSet1
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("42.43");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet1.getPoint("Utrecht").should.not.exist;
		nodesSet1.getPoint("Haarlem").should.not.exist;

		// Refresh the page and assert the node sizes
		pageRefresh();

		// Read all the nodes
		nodesSet0 = findWidget("2Maps").getNodeSet(0);
		// Assert the number of nodes.
		nodesSet0.getNodesCount().should.equal(10);

		// Read all the nodes
		nodesSet1 = findWidget("2Maps").getNodeSet(1);
		// Assert the number of nodes.
		nodesSet1.getNodesCount().should.equal(12);

		// With Max-Ref-Size set to an identifier with value 200. Assert the radius of the nodes of Node-Set-0 seen
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

		// With Max-Ref-Size set to an identifier with value 25. Assert the radius of the nodes of Node-Set-1 seen
		nodesSet1
			.getPoint("Amsterdam")
			.getRadius()
			.should.be.equal("12");

		nodesSet1
			.getPoint("Maastricht")
			.getRadius()
			.should.be.equal("13.42");

		nodesSet1
			.getPoint("Assen")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Rotterdam")
			.getRadius()
			.should.be.equal("15");

		nodesSet1
			.getPoint("Arnhem")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Groningen")
			.getRadius()
			.should.be.equal("21.21");

		nodesSet1
			.getPoint("Dordrecht")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Zwolle")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Apeldoorn")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Eindhoven")
			.getRadius()
			.should.be.equal("30");

		nodesSet1
			.getPoint("Breda")
			.getRadius()
			.should.be.equal("32.86");

		nodesSet1
			.getPoint("Amersfoort")
			.getRadius()
			.should.be.equal("42.43");

		// Assert nodes with Node-Size's 0 are not shown
		nodesSet1.getPoint("Utrecht").should.not.exist;
		nodesSet1.getPoint("Haarlem").should.not.exist;
	}
);
