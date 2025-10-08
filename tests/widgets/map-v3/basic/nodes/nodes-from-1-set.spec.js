/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying nodes from 1 node set are loaded on the map.", () => {
	loadPage("Main Project/MapV3 Page/zoomTests");

	findWidget("zoomMapTests")
		.getNodesCount()
		.should.equal(25);
});
