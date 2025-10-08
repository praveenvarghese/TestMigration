/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario("Bug 5375 - buttons specified in old(er) models suddenly stopped working", () => {
	loadPage("Main Project/home");

	// Make sure the TotalCost is 0.00 at the start of the model
	findWidget("Results")
		.getValue("TotalCost")
		.should.equal("0.00");

	// Click the button to start optimization (which in this model is partly hidden behind the 'Main' button, so using a negative x-offset here)
	findWidget("Optimize Schedule").click();

	// As a result of the optimization, the total cost should have changed
	findWidget("Results")
		.getValue("TotalCost")
		.should.equal("522,060.00");
});
