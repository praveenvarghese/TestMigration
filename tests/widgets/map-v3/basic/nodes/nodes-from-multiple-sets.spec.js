/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying nodes from multiple (2) node sets are loaded on the map and nodes count when one of the nodeset is deleted.",
	() => {
		loadPage("Main Project/StepsV3/Two node layers");

		findWidget("twoNodeSetMap")
			.getNodesCount()
			.should.equal(30);

		findWidget("twoNodeSetMap")
			.nodeSetsMapLeafletOptionEditor()
			.deleteNodeSet(1);

		findWidget("twoNodeSetMap")
			.getNodesCount()
			.should.equal(25);
	}
);
