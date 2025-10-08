/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying hide heatmap functionality via identifier", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	//Verify by default hide heatmap is disabled
	findWidget("twoNodeSetMap").isHeatMapDisplayed().should.be.true;

	//Enable hide heatmap and validate hide heatmap has been changed
	findWidget("twoNodeSetMap")
		.getHeatMapOptionEditor()
		.editSet(null, null, null, null, {
			value: "flagTrue",
			type: "identifier",
		});

	findWidget("twoNodeSetMap").isHeatMapDisplayed().should.be.false;

	// Validate user navigates to different page and comes back the changed hide heatmap is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/Two node layers");

	findWidget("twoNodeSetMap").isHeatMapDisplayed().should.be.false;

	//Enable hide heatmap and validate hide heatmap has been changed
	findWidget("twoNodeSetMap")
		.getHeatMapOptionEditor()
		.editSet(null, null, null, null, {
			value: "flagFalse",
			type: "identifier",
		});

	findWidget("twoNodeSetMap").isHeatMapDisplayed().should.be.true;

	// Validate user navigates to different page and comes back the changed hide heatmap is retained
	openAppManager().navigateToPage("Main Project/StepsV3");

	openAppManager().navigateToPage("Main Project/StepsV3/Two node layers");

	findWidget("twoNodeSetMap").isHeatMapDisplayed().should.be.true;
});
