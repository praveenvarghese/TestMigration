/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/Heineken_BCM_v2_With_Grid_Layout_2020-06-30/Heineken_BCM_v2_With_Grid_Layout_2020-06-30.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("BCM Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Validation & Tools");
	findWidget("optimize");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Checks");
	findWidget("checks_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Checks");

	getPageMenu().navigateToPage("Main Project/Validation & Tools");
	findWidget("optimize");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Checks");
	findWidget("checks_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Checks");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Validation");
	findWidget("calculate_validation_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Validation");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Manual Allocation");
	findWidget("manual_allocation_2_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Manual Allocation");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Validation");
	findWidget("calculate_validation_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Validation");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Manual Allocation");
	findWidget("manual_allocation_2_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Manual Allocation");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Download Input & Output");
	findWidget("download_input_files_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Download Input & Output");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/1 Production Unit Mode");
	findWidget("1brewery_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/1 Production Unit Mode");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/Download Input & Output");
	findWidget("download_input_files_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/Download Input & Output");

	getPageMenu().navigateToPage("Main Project/Validation & Tools/1 Production Unit Mode");
	findWidget("1brewery_1");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools/1 Production Unit Mode");

	getPageMenu().navigateToPage("Main Project/Validation & Tools");
	findWidget("optimize");
	getCurrentPage().should.be.equal("Main Project/Validation & Tools");
});
