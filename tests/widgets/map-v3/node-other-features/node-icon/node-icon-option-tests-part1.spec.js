/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Verifying node icon functionality", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	//Verify by default node icon is disabled
	findWidget("step2_1")
		.getIconPointSet(0)
		.isIconClassApplied().should.be.false;

	//Enable node icon and validate node icon has been changed
	findWidget("step2_1")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(0, null, null, null, null, null, {
			value: "nodeIcon",
			type: "identifier",
		});

	findWidget("step2_1")
		.getIconPointSet(0)
		.isIconClassApplied().should.be.true;

	// Validate user navigates to different page and comes back the changed node icon is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1")
		.getIconPointSet(0)
		.isIconClassApplied().should.be.true;

	//Validate node icon functionality when multiple maps node sets are configured in the page
	findWidget("step2_1")
		.nodeSetsMapLeafletOptionEditor()
		.addNodeSet(
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
			},
			null,
			null
		);

	findWidget("step2_1")
		.getIconPointSet(1)
		.isIconClassApplied().should.be.false;

	findWidget("step2_1")
		.getIconPointSet(0)
		.isIconClassApplied().should.be.true;

	findWidget("step2_1")
		.nodeSetsMapLeafletOptionEditor()
		.editNodeSet(1, null, null, null, null, null, {
			value: "nodeIconForAirport",
			type: "identifier",
		});

	findWidget("step2_1")
		.getIconPointSet(1)
		.isIconClassApplied().should.be.true;

	findWidget("step2_1")
		.getIconPointSet(0)
		.isIconClassApplied().should.be.true;
});
