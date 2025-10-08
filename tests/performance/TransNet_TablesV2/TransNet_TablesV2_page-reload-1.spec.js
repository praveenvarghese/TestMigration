/*!
 * @AIMMS_FILE=models/TransNet_TablesV2/TransNet.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("TransNet_TablesV2 - Performance Measuring", () => {
	loadPage("Main Project/TablesV2/TableV2_0");
	findWidget("UC_Many_WithUnits");
	getCurrentPage().should.be.equal("Main Project/TablesV2/TableV2_0");
	loadPage("Main Project/TablesV2/TableV2_0");
	findWidget("UC_Many_WithUnits");
	getCurrentPage().should.be.equal("Main Project/TablesV2/TableV2_0");
	loadPage("Main Project/TablesV2/TableV2_0");
	findWidget("UC_Many_WithUnits");
	getCurrentPage().should.be.equal("Main Project/TablesV2/TableV2_0");
});
