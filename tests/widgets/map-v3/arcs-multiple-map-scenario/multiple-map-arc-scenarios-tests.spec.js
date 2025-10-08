/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying arcs count when multiple maps are configured in the same page", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	//Verify count of arcs in two maps
	findWidget("step2_1")
		.getArcsCount()
		.should.equal(3);

	findWidget("anothermap")
		.getArcsCount()
		.should.equal(8);

	//Add 1 Arcs set information to one of the map
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.addArcSet(
			{
				value: "NumTrains",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

	//Verify count of arcs loaded on multiple widgets
	findWidget("step2_1")
		.getArcsCount()
		.should.equal(9);

	findWidget("anothermap")
		.getArcsCount()
		.should.equal(8);

	//Delete the arc set on one of the map widget
	findWidget("anothermap")
		.arcSetsOptionEditor()
		.deleteAnArcSet(0);

	//Verify count of arcs loaded on multiple widgets
	findWidget("step2_1")
		.getArcsCount()
		.should.equal(9);

	findWidget("anothermap")
		.getArcsCount()
		.should.equal(0);
});
