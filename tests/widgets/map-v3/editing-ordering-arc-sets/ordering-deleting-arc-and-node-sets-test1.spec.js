/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Ordering and deleting node and arc sets, and verifying respective nodes and arcs are loaded ",
	() => {
		loadPage("Main Project/StepsV3/6 - Two node layers, three arc layers");

		//Reorder node sets
		findWidget("step6_1")
			.nodeSetsMapLeafletOptionEditor()
			.moveDownANodeSet(0);

		//Reorder arc sets
		findWidget("step6_1")
			.arcSetsOptionEditor()
			.moveDownAnArcSet(0)
			.moveUpAnArcSet(2);

		// Post node and arc sets are reordered, verify count of nodes and arcs
		findWidget("step6_1")
			.getNodesCount()
			.should.equal(30);
		findWidget("step6_1")
			.getArcsCount()
			.should.equal(55);

		//Delete an arc set
		findWidget("step6_1")
			.arcSetsOptionEditor()
			.deleteAnArcSet(2);

		// Post an arc set is removed, verify count of nodes and arcs
		findWidget("step6_1")
			.getNodesCount()
			.should.equal(30);
		findWidget("step6_1")
			.getArcsCount()
			.should.equal(38);

		//Delete a node set
		findWidget("step6_1")
			.nodeSetsMapLeafletOptionEditor()
			.deleteNodeSet(0);

		// Post a node set is removed, verify count of nodes and arcs
		findWidget("step6_1")
			.getNodesCount()
			.should.equal(5);
		findWidget("step6_1")
			.getArcsCount()
			.should.equal(20);

		//Delete a node set
		findWidget("step6_1")
			.nodeSetsMapLeafletOptionEditor()
			.deleteNodeSet(1);

		// Post a node set is removed, verify count of nodes and arcs
		findWidget("step6_1")
			.getNodesCount()
			.should.equal(0);
		findWidget("step6_1")
			.getArcsCount()
			.should.equal(0);
	}
);
