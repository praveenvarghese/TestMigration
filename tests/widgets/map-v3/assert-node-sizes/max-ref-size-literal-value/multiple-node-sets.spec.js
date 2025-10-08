/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On a Map with Nodes of multiple Node-sets plotted, assert node's radius is based on their respective Node-Set-NodeSizes and Node-Set-MaxRefSize.",
	() => {
		loadPage("Main Project/Multiple Maps/2Maps?_aimms_only_persistence.write=true");

		// Reset Data
		findWidget("Reset Data_3").click();

		// Read all the nodes of Node-Set-0
		const nodesSet0 = findWidget("2Maps").getNodeSet(0);

		// Assert the number of nodes.
		nodesSet0.getNodesCount().should.equal(10);

		// With Max-Ref-Size set to 250 literal value. Assert the radius of the nodes of Node-Set-0 seen
		nodesSet0
			.getPoint("Chandoor, Telangana")
			.getRadius()
			.should.be.equal("18.97");

		nodesSet0
			.getPoint("Bhitarwar, Madhya Pradesh")
			.getRadius()
			.should.be.equal("18.97");

		nodesSet0
			.getPoint("Madhya Pradesh")
			.getRadius()
			.should.be.equal("18.97");

		nodesSet0
			.getPoint("Telangana")
			.getRadius()
			.should.be.equal("18.97");

		nodesSet0
			.getPoint("Chhattisgarh")
			.getRadius()
			.should.be.equal("23.24");

		nodesSet0
			.getPoint("Maharashtra")
			.getRadius()
			.should.be.equal("26.83");

		nodesSet0
			.getPoint("Tamil Nadu")
			.getRadius()
			.should.be.equal("26.83");

		nodesSet0
			.getPoint("Tripura")
			.getRadius()
			.should.be.equal("35.5");

		nodesSet0
			.getPoint("Karnataka")
			.getRadius()
			.should.be.equal("35.5");

		nodesSet0
			.getPoint("Haryana")
			.getRadius()
			.should.be.equal("36.99");

		// Read all the nodes of Node-Set-1
		const nodesSet1 = findWidget("2Maps").getNodeSet(1);

		// Assert the number of nodes.
		nodesSet1.getNodesCount().should.equal(12);

		// With Max-Ref-Size set to 25 literal value. Assert the radius of the nodes of Node-Set-1 seen
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
