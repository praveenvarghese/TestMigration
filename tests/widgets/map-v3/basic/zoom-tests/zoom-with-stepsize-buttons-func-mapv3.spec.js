/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifies a non-default step size (of 0.2) of zooming on the map.", () => {
	loadPage("Main Project/MapV3 Page/zoomTests");

	findWidget("zoom")
		.getValue("zoom2")
		.should.eql("7.00");

	findWidget("zoomMapTests_1")
		.zoomIn()
		.clickWithShift();

	findWidget("zoomMapTests_1")
		.zoomIn()
		.clickWithShift();

	findWidget("zoomMapTests_1")
		.zoomIn()
		.clickWithShift();

	findWidget("zoom")
		.getValue("zoom2")
		.should.eql("8.80");

	findWidget("zoomMapTests_1")
		.zoomOut()
		.clickWithShift();

	findWidget("zoomMapTests_1")
		.zoomOut()
		.clickWithShift();

	findWidget("zoomMapTests_1")
		.zoomOut()
		.clickWithShift();

	findWidget("zoom")
		.getValue("zoom2")
		.should.eql("7.00");
});
