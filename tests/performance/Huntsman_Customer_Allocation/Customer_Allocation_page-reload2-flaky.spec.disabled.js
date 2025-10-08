/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Customer_Allocation_Model_2019-03-11/Customer_Allocation_Model_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start
scenario("Customer_Allocation_Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");
	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");
	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");

	loadPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");
	loadPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");
	loadPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	loadPage("Main Project/Upload Data/Manual Overrides");
	findWidget("manual_overrides");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Manual Overrides");
	loadPage("Main Project/Upload Data/Manual Overrides");
	findWidget("manual_overrides");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Manual Overrides");
	loadPage("Main Project/Upload Data/Manual Overrides");
	findWidget("manual_overrides");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Manual Overrides");

	loadPage("Main Project/Upload Data/Data Validation");
	findWidget("data_validation");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Data Validation");
	loadPage("Main Project/Upload Data/Data Validation");
	findWidget("data_validation");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Data Validation");
	loadPage("Main Project/Upload Data/Data Validation");
	findWidget("data_validation");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Data Validation");

	loadPage("Main Project/Detailed Run Output");
	findWidget("output_1");
	getCurrentPage().should.be.equal("Main Project/Detailed Run Output");
	loadPage("Main Project/Detailed Run Output");
	findWidget("output_1");
	getCurrentPage().should.be.equal("Main Project/Detailed Run Output");
	loadPage("Main Project/Detailed Run Output");
	findWidget("output_1");
	getCurrentPage().should.be.equal("Main Project/Detailed Run Output");
});
