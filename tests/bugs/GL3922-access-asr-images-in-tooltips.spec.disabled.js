/*!
 * @AIMMS_FILE=models/Bugs/GL3922-AccessASR/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Accessing ASR images for use in tooltips", () => {
	loadPage("Main Project/Second Page");

	findWidget("TotalCostPerIsland").findWedgeWithTooltip("La Palma");
	findWidget("TotalCostPerIsland").getTooltip();
	findWidget("TotalCostPerIsland")
		.pickColor(95, 95)
		.should.beSameColorAs([204, 77, 58]);
});
