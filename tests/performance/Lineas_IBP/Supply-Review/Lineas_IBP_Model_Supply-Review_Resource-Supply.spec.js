/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Lineas_IBP_Model_2021-04-16/Lineas IBP.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// First page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// Third page load is second measurement for warm start

//Model: Lineas IBP Model

scenario(
	"Lineas IBP Model - Performance Measurement on 'Supply Review/Resource Supply' page.",
	() => {
		loadPage("Main Project/Supply Review/Resource Supply");
		findWidget("resou_1");
		getCurrentPage().should.be.equal("Main Project/Supply Review/Resource Supply");

		loadPage("Main Project/Supply Review/Resource Supply");
		findWidget("resou_1");
		getCurrentPage().should.be.equal("Main Project/Supply Review/Resource Supply");

		loadPage("Main Project/Supply Review/Resource Supply");
		findWidget("resou_1");
		getCurrentPage().should.be.equal("Main Project/Supply Review/Resource Supply");
	}
);
