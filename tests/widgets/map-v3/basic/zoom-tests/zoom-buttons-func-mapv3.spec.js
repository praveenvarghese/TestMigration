/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifies the default step size (of 1) of zooming on the map.", () => {
	loadPage("Main Project/MapV3 Page/zoomTests");

	findWidget("zoom")
		.getValue()
		.should.eql("7.00");

	findWidget("zoomMapTests")
		.zoomIn()
		.click();

	findWidget("zoomMapTests")
		.zoomIn()
		.click();

	findWidget("zoomMapTests")
		.zoomIn()
		.click();

	findWidget("zoom")
		.getValue()
		.should.eql("10.00");

	findWidget("zoomMapTests")
		.zoomOut()
		.click();

	findWidget("zoomMapTests")
		.zoomOut()
		.click();

	findWidget("zoomMapTests")
		.zoomOut()
		.click();

	findWidget("zoom")
		.getValue()
		.should.eql("7.00");
});
