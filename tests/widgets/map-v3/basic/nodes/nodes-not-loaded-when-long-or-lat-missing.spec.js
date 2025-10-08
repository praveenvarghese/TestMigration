/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Nodes are loaded only when both Longitude and Latitude are provided", () => {
	loadPage("Main Project/StepsV3/map with incomplete data v3");

	findWidget("Map with only Longitude_1")
		.getNodesCount()
		.should.equal(0);

	findWidget("Map with only Latitude_1")
		.getNodesCount()
		.should.equal(0);
});
