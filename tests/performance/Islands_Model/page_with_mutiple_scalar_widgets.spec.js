/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Islands_Model_2021-04-08/Islands_Model_2021-04-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// First page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Third page load is second measurement for warm start

scenario(
	"Islands Test Model - Measuring Performance of a page with multiple Scalar widgets.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");
		findWidget("scalar_data");
		getCurrentPage().should.be.equal("Main Project/Item Actions/Scalar Data");

		loadPage("Main Project/Item Actions/Scalar Data");
		findWidget("scalar_data");
		getCurrentPage().should.be.equal("Main Project/Item Actions/Scalar Data");

		loadPage("Main Project/Item Actions/Scalar Data");
		findWidget("scalar_data");
		getCurrentPage().should.be.equal("Main Project/Item Actions/Scalar Data");
	}
);
