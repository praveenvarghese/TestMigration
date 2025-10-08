/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying arc width functionality via toggle", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	//Verify by default arc width is disabled
	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.false;

	//Enable Arc width and validate arc width has been changed
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

	// Validate user navigates to different page and comes back the changed arc width is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

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
		.isDynamicWidthOptionApplied().should.be.false;

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isDynamicWidthOptionApplied().should.be.true;

	//Disable Arc width and validate arc width has been changed and also arc width other map is not effected
	findWidget("step2_1")
		.arcSetsOptionEditor()
		.editArcSet(
			1,
			null,
			null,
			null,
			{
				value: "false",
				type: "LITERAL",
			},
			null,
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isDynamicWidthOptionApplied().should.be.false;

	findWidget("anothermap")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.false;

	//Enable Arc width and validate arc width has been changed and also arc width other map is not effected
	findWidget("anothermap")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			null,
			null,
			{
				value: "true",
				type: "LITERAL",
			},
			null,
			null
		);

	findWidget("step2_1")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;

	findWidget("step2_1")
		.getArcSet(1)
		.isDynamicWidthOptionApplied().should.be.false;

	findWidget("anothermap")
		.getArcSet(0)
		.isDynamicWidthOptionApplied().should.be.true;
});
