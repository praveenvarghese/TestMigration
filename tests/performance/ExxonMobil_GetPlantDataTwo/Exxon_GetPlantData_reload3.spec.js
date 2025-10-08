/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("Exxon GetPlantDataTwo Page Reload - Performance Measuring", () => {
	loadPage("Main Project/My Mappings/Create & Edit Mapping");
	findWidget("new_grid_page_2");
	getCurrentPage().should.be.equal("Main Project/My Mappings/Create & Edit Mapping");
	loadPage("Main Project/My Mappings/Create & Edit Mapping");
	findWidget("new_grid_page_2");
	getCurrentPage().should.be.equal("Main Project/My Mappings/Create & Edit Mapping");
	loadPage("Main Project/My Mappings/Create & Edit Mapping");
	findWidget("new_grid_page_2");
	getCurrentPage().should.be.equal("Main Project/My Mappings/Create & Edit Mapping");

	loadPage("Main Project/Data Ownership/My Data Quality Reports");
	findWidget("my_data_quality_reports_1");
	getCurrentPage().should.be.equal("Main Project/Data Ownership/My Data Quality Reports");
	loadPage("Main Project/Data Ownership/My Data Quality Reports");
	findWidget("my_data_quality_reports_1");
	getCurrentPage().should.be.equal("Main Project/Data Ownership/My Data Quality Reports");
	loadPage("Main Project/Data Ownership/My Data Quality Reports");
	findWidget("my_data_quality_reports_1");
	getCurrentPage().should.be.equal("Main Project/Data Ownership/My Data Quality Reports");

	loadPage("Main Project/PIMS Data Management/Winning and Depth Analysis Cases");
	findWidget("winning_and_depth_analysis_cases");
	getCurrentPage().should.be.equal(
		"Main Project/PIMS Data Management/Winning and Depth Analysis Cases"
	);
	loadPage("Main Project/PIMS Data Management/Winning and Depth Analysis Cases");
	findWidget("winning_and_depth_analysis_cases");
	getCurrentPage().should.be.equal(
		"Main Project/PIMS Data Management/Winning and Depth Analysis Cases"
	);
	loadPage("Main Project/PIMS Data Management/Winning and Depth Analysis Cases");
	findWidget("winning_and_depth_analysis_cases");
	getCurrentPage().should.be.equal(
		"Main Project/PIMS Data Management/Winning and Depth Analysis Cases"
	);

	loadPage("Main Project/PIMS Data Management/View Winning Case Data");
	findWidget("view_winning_case_data");
	getCurrentPage().should.be.equal("Main Project/PIMS Data Management/View Winning Case Data");
	loadPage("Main Project/PIMS Data Management/View Winning Case Data");
	findWidget("view_winning_case_data");
	getCurrentPage().should.be.equal("Main Project/PIMS Data Management/View Winning Case Data");
	loadPage("Main Project/PIMS Data Management/View Winning Case Data");
	findWidget("view_winning_case_data");
	getCurrentPage().should.be.equal("Main Project/PIMS Data Management/View Winning Case Data");
});
