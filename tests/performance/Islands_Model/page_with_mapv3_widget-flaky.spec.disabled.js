/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Islands_Model_2021-04-08/Islands_Model_2021-04-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// First page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Third page load is second measurement for warm start

scenario("Islands Test Model - Measuring Performance of a page with MapV3 widget.", () => {
	loadPage("Main Project/MapV3 Test Page/MapV3");
	findWidget("mapv3_1");
	getCurrentPage().should.be.equal("Main Project/MapV3 Test Page/MapV3");

	loadPage("Main Project/MapV3 Test Page/MapV3");
	findWidget("mapv3_1");
	getCurrentPage().should.be.equal("Main Project/MapV3 Test Page/MapV3");

	loadPage("Main Project/MapV3 Test Page/MapV3");
	findWidget("mapv3_1");
	getCurrentPage().should.be.equal("Main Project/MapV3 Test Page/MapV3");
});
