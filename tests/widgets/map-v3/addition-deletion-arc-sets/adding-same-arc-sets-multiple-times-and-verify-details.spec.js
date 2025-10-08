/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying actions of adding same arc sets multiple times to Map V3 Widget, and verifying that respective arcs are shown on Map.",
	() => {
		loadPage("Main Project/StepsV3/Two node layers");

		//Verify there are no arcs loaded on the map.
		let map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(0);

		//Add 1 Arcs sets information
		map.arcSetsOptionEditor().addArcSet(
			{
				value: "NumTrains",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

		//Verify 17 Arcs are loaded from the above Arcs-set
		map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(17);

		//Add same Arcs sets information again
		map.arcSetsOptionEditor().addArcSet(
			{
				value: "NumTrains",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

		//Verify 34 Arcs are loaded from the above 2 Arcs-sets
		map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(34);
	}
);
