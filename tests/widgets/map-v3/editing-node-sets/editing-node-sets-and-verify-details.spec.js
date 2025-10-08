/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying actions of editing node set to Map V2 Widget, and verifying that respective nodes are shown on Map.",
	() => {
		loadPage("Main Project/StepsV3/Single node set");

		//Verify there are 25 nodes loaded on the map.
		findWidget("singleNode")
			.getNodesCount()
			.should.equal(25);

		//Edit the node sets information
		findWidget("singleNode")
			.nodeSetsMapLeafletOptionEditor()
			.editNodeSet(
				0,
				{
					value: "a",
					type: "identifier",
				},
				{
					value: "AirportYCoordinate",
					type: "identifier",
				},
				{
					value: "AirportXCoordinate",
					type: "identifier",
				}
			);

		//Verify 5 nodes from the above node-set are loaded
		findWidget("singleNode")
			.getNodesCount()
			.should.equal(5);
	}
);
