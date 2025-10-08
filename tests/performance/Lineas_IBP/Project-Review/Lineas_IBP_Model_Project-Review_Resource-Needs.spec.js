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
	"Lineas IBP Model - Performance Measurement on 'Project Review/Resource Needs' page.",
	() => {
		loadPage("Main Project/Project Review/Resource Needs");
		findWidget("new_page");
		getCurrentPage().should.be.equal("Main Project/Project Review/Resource Needs");

		loadPage("Main Project/Project Review/Resource Needs");
		findWidget("new_page");
		getCurrentPage().should.be.equal("Main Project/Project Review/Resource Needs");

		loadPage("Main Project/Project Review/Resource Needs");
		findWidget("new_page");
		getCurrentPage().should.be.equal("Main Project/Project Review/Resource Needs");
	}
);
