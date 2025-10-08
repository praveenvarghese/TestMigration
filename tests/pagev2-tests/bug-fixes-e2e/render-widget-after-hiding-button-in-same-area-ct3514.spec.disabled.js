/*!
 * @AIMMS_FILE=models/PageV2/HideButton/HideButton.aimms
 */

scenario("Rendering a widget after hiding other widgets in the same grid area", () => {
	loadPage("Main Project/home");

	findWidget("table")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	findWidget("button_toggle").click();

	findWidget("table")
		.getNumRowsInGridViewport()
		.should.be.equal(4);

	findWidget("button_toggle").click();

	findWidget("table")
		.getNumRowsInGridViewport()
		.should.be.equal(2);
});
