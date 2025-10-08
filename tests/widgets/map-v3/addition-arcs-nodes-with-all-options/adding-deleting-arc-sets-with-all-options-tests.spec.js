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
			{
				value: "true",
				type: "LITERAL",
			},
			{
				value: "true",
				type: "LITERAL",
			},
			{
				value: "true",
				type: "LITERAL",
			},
			null
		);

		//Verify 17 Arcs are loaded from the above Arcs-set
		map = findWidget("twoNodeSetMap");
		map.getArcsCount().should.equal(17);

		findWidget("twoNodeSetMap")
			.getArcSet(0)
			.isDynamicWidthOptionApplied().should.be.true;

		findWidget("twoNodeSetMap").isHideLabelOptionApplied().should.be.true;

		findWidget("twoNodeSetMap")
			.getArcSet(0)
			.isStraightLineOptionApplied().should.be.true;
	}
);
