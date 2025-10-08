/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=medium
 */

scenario("Verifying arc label functionality via toggle", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	//Verify by default Arc label is disabled
	findWidget("step2_1").isHideLabelOptionApplied("0").should.be.false;

	//Enable Arc label and validate Arc label has been changed.
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null,
			null
		);

	findWidget("step2_1").isHideLabelOptionApplied(0).should.be.true;

	// Validate user navigates to different page and comes back the changed Arc label is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1").isHideLabelOptionApplied().should.be.true;

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

	findWidget("step2_1").isHideLabelOptionApplied(1).should.be.false;

	findWidget("step2_1").isHideLabelOptionApplied(0).should.be.true;

	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null,
			null
		);

	findWidget("step2_1").isHideLabelOptionApplied(1).should.be.true;

	findWidget("step2_1").isHideLabelOptionApplied(0).should.be.true;

	//Disable Arc label and validate Arc label has been changed and also Arc label other map is not effected
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			{
				value: "false",
				type: "LITERAL",
			},
			null,
			null,
			null
		);

	findWidget("step2_1").isHideLabelOptionApplied(0).should.be.true;

	findWidget("step2_1").isHideLabelOptionApplied(1).should.be.false;

	findWidget("anothermap").isHideLabelOptionApplied(0).should.be.false;

	//Enable Arc label and validate Arc label has been changed and also Arc label other map is not effected
	findWidget("anothermap")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null,
			null
		);

	findWidget("step2_1").isHideLabelOptionApplied(0).should.be.true;

	findWidget("step2_1").isHideLabelOptionApplied(1).should.be.false;

	findWidget("anothermap").isHideLabelOptionApplied(0).should.be.true;
});
