/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying actions of editing arc sets to Map V3 Widget, and verifying that respective arcs are shown on Map.",
	() => {
		loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

		//Verify there are 3 arcs loaded on the map
		const map = findWidget("step2_1");
		map.getArcsCount().should.equal(3);

		//Editing 1 Arcs sets information
		map.arcSetsOptionEditor().editArcSet(
			0,
			{
				value: "Transport",
				type: "Identifier",
			},
			null,
			null,
			null,
			null,
			null
		);

		//Verify 17 Arcs are loaded from the above Arcs-set
		findWidget("step2_1")
			.getArcsCount()
			.should.equal(18);
	}
);
