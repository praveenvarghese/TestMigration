/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying arc straightline functionality", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	//Verify by default Arc Straight line is disabled
	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.false;

	//Enable Arc Straight line and validate Arc Straight line has been changed
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	// Validate user navigates to different page and comes back the changed Arc Straight line is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	//Validate arc functionality when multiple maps arc sets are configured in the page
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.addArcSet(
			{
				value: "Transport",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

	findWidget("step2_1")
		.getArcSet(1)
		.isStraightLineOptionApplied().should.be.false;

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isStraightLineOptionApplied().should.be.true;

	//Disable Arc Straight line and validate Arc Straight line has been changed and also Arc Straight line other map is not effected
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			null,
			null,
			{
				value: "false",
				type: "LITERAL",
			},
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isStraightLineOptionApplied().should.be.false;

	findWidget("anothermap")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.false;

	//Enable Arc Straight line and validate Arc Straight line has been changed and also Arc Straight line other map is not effected
	findWidget("anothermap")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isStraightLineOptionApplied().should.be.false;

	findWidget("anothermap")
		.getArcSet(0)
		.isStraightLineOptionApplied().should.be.true;
});
