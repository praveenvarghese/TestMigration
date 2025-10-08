/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Exxon GetPlantDataTwo Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");

	getPageMenu().navigateToPage("Main Project/Welcome!/SRA Access Help");
	findWidget("sra_access_help");
	getCurrentPage().should.be.equal("Main Project/Welcome!/SRA Access Help");

	getPageMenu().navigateToPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");

	getPageMenu().navigateToPage("Main Project/Discover Data/Get Data");
	findWidget("main_page");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Get Data");

	getPageMenu().navigateToPage("Main Project/Welcome!/SRA Access Help");
	findWidget("sra_access_help");
	getCurrentPage().should.be.equal("Main Project/Welcome!/SRA Access Help");

	getPageMenu().navigateToPage("Main Project/Discover Data/Get Data");
	findWidget("main_page");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Get Data");

	getPageMenu().navigateToPage("Main Project/Discover Data/Compare PrePost Event");
	findWidget("compare_data");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Compare PrePost Event");

	getPageMenu().navigateToPage("Main Project/Discover Data/Find UTAG from TAG");
	findWidget("convert_tag_to_utag");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Find UTAG from TAG");

	getPageMenu().navigateToPage("Main Project/Discover Data/Compare PrePost Event");
	findWidget("compare_data");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Compare PrePost Event");

	getPageMenu().navigateToPage("Main Project/Discover Data/Find UTAG from TAG");
	findWidget("convert_tag_to_utag");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Find UTAG from TAG");

	getPageMenu().navigateToPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");
});
