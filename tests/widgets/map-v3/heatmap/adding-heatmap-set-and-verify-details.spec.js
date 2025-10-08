/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying actions of adding heatmap and deleting.", () => {
	loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1").isHeatMapDisplayed().should.be.false;

	//Add 1 Node sets information
	findWidget("step2_1")
		.getHeatMapOptionEditor()
		.addSet(
			{
				value: "a",
				type: "identifier",
				storeFocus: "",
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
			null
		);

	findWidget("step2_1").isHeatMapDisplayed().should.be.true;

	// Validate user navigates to different page and comes back the changed Arc label is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

	findWidget("step2_1").isHeatMapDisplayed().should.be.true;
});
