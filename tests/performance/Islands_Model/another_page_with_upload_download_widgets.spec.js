/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Islands_Model_2021-04-08/Islands_Model_2021-04-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// First page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Third page load is second measurement for warm start

scenario(
	"Islands Test Model - Measuring Performance of another page having Upload and Download widgets.",
	() => {
		loadPage("Main Project/THird Page");
		findWidget("third_page");
		getCurrentPage().should.be.equal("Main Project/THird Page");

		loadPage("Main Project/THird Page");
		findWidget("third_page");
		getCurrentPage().should.be.equal("Main Project/THird Page");

		loadPage("Main Project/THird Page");
		findWidget("third_page");
		getCurrentPage().should.be.equal("Main Project/THird Page");
	}
);
