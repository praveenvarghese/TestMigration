/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Customer_Allocation_Model_With_Grid_Layout_2019-03-11/Customer_Allocation_Model_With_Grid_Layout_2019-03-11.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Customer_Allocation_Model Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");

	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");

	loadPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");

	getPageMenu().navigateToPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	getPageMenu().navigateToPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");

	getPageMenu().navigateToPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	getPageMenu().navigateToPage("Main Project/Upload Data/Manual Overrides");
	findWidget("manual_overrides");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Manual Overrides");

	getPageMenu().navigateToPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	getPageMenu().navigateToPage("Main Project/Upload Data/Manual Overrides");
	findWidget("manual_overrides");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Manual Overrides");

	getPageMenu().navigateToPage("Main Project/Upload Data/Data Validation");
	findWidget("data_validation");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Data Validation");

	getPageMenu().navigateToPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	getPageMenu().navigateToPage("Main Project/Upload Data/Data Validation");
	findWidget("data_validation");
	getCurrentPage().should.be.equal("Main Project/Upload Data/Data Validation");

	getPageMenu().navigateToPage("Main Project/Detailed Run Output");
	findWidget("output_1");
	getCurrentPage().should.be.equal("Main Project/Detailed Run Output");

	getPageMenu().navigateToPage("Main Project/Upload Data");
	findWidget("upload_data");
	getCurrentPage().should.be.equal("Main Project/Upload Data");

	getPageMenu().navigateToPage("Main Project/Detailed Run Output");
	findWidget("output_1");
	getCurrentPage().should.be.equal("Main Project/Detailed Run Output");

	getPageMenu().navigateToPage("Main Project/Input");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Input");
});
