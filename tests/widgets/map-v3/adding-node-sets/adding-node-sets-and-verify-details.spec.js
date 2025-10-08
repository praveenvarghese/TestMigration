/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying actions of adding multiple node sets to Map V2 Widget, and verifying the nodes shown on Map.",
	() => {
		loadPage("Main Project/MapV3 Page");

		// Verify there are no nodes loaded on the map.
		let map = findWidget("mapv3");
		map.getNodesCount().should.equal(0);

		//Add 1 Node sets information
		map.nodeSetsMapLeafletOptionEditor().addNodeSet(
			{
				value: "a",
				type: "identifier",
				storeFocus: [
					{
						index: "a",
						value: "SelectedAirport",
					},
				],
			},
			{
				value: "AirportYCoordinate",
				type: "identifier",
			},
			{
				value: "AirportXCoordinate",
				type: "identifier",
			},
			{
				value: "AirportSize",
				type: "identifier",
			}
		);

		//Verify 5 nodes from the above node-set are loaded
		map = findWidget("mapv3");
		map.getNodesCount().should.equal(5);

		//Add another node set information
		map.nodeSetsMapLeafletOptionEditor().addNodeSet(
			{
				value: "c",
				type: "identifier",
				storeFocus: [
					{
						index: "c",
						value: "SelectedCity",
					},
				],
			},
			{
				value: "YCoordinate",
				type: "identifier",
			},
			{
				value: "XCoordinate",
				type: "identifier",
			}
		);

		//Verify additional 25 nodes from the above node-set are loaded
		map = findWidget("mapv3");
		map.getNodesCount().should.equal(30);
	}
);
