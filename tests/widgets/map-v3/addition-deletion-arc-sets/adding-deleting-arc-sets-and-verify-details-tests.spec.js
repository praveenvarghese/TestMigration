/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying actions of adding and delting multiple arc sets to Map V3 Widget, and verifying that respective arcs are shown on Map.",
	() => {
		loadPage("Main Project/StepsV3/Two node layers");

		//Verify there are no arcs loaded on the map.
		let map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(0);

		//Add 1 Arcs sets information
		map.arcSetsOptionEditor().editArcSet(
			0,
			{
				value: "NumTrains",
				type: "identifier",
			},
			null,
			null,
			{
				value: "1",
				type: "literal",
			},
			null,
			null
		);

		//Verify 17 Arcs are loaded from the above Arcs-set
		map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(17);

		//Add 1 Arcs sets information
		map.arcSetsOptionEditor().addArcSet(
			{
				value: "Transport",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

		//Verify 35 Arcs are loaded from the above 2 Arcs-sets
		map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(35);

		//Add 1 Arcs sets information
		map.arcSetsOptionEditor().addArcSet(
			{
				value: "NumFlights",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

		//Verify 55 Arcs are loaded from the above 2 Arcs-sets
		findWidget("twoNodeSetMap")
			.getArcsCount()
			.should.equal(55);

		//Delete the arc set 2
		findWidget("twoNodeSetMap")
			.arcSetsOptionEditor()
			.deleteAnArcSet(2);

		//Verify 35 Arcs are loaded after deletion
		findWidget("twoNodeSetMap")
			.getArcsCount()
			.should.equal(35);

		//Delete the arc set 1
		findWidget("twoNodeSetMap")
			.arcSetsOptionEditor()
			.deleteAnArcSet(1);

		//Verify 17 Arcs are loaded after deletion
		findWidget("twoNodeSetMap")
			.getArcsCount()
			.should.equal(17);

		//Delete the arc set 0
		findWidget("twoNodeSetMap")
			.arcSetsOptionEditor()
			.deleteAnArcSet(0);

		//Verify 17 Arcs are loaded after deletion
		findWidget("twoNodeSetMap")
			.getArcsCount()
			.should.equal(0);
	}
);
