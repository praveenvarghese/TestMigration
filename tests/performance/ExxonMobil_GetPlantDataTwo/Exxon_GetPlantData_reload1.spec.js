/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/GetPlantDataTwo-ExxonMobil-2021-07-01/GetPlantDataTwo.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("Exxon GetPlantDataTwo Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");
	loadPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");
	loadPage("Main Project/Welcome!");
	findWidget("welcome");
	getCurrentPage().should.be.equal("Main Project/Welcome!");

	loadPage("Main Project/Welcome!/SRA Access Help");
	findWidget("sra_access_help");
	getCurrentPage().should.be.equal("Main Project/Welcome!/SRA Access Help");
	loadPage("Main Project/Welcome!/SRA Access Help");
	findWidget("sra_access_help");
	getCurrentPage().should.be.equal("Main Project/Welcome!/SRA Access Help");
	loadPage("Main Project/Welcome!/SRA Access Help");
	findWidget("sra_access_help");
	getCurrentPage().should.be.equal("Main Project/Welcome!/SRA Access Help");

	loadPage("Main Project/Discover Data/Get Data");
	findWidget("main_page");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Get Data");
	loadPage("Main Project/Discover Data/Get Data");
	findWidget("main_page");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Get Data");
	loadPage("Main Project/Discover Data/Get Data");
	findWidget("main_page");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Get Data");

	loadPage("Main Project/Discover Data/Compare PrePost Event");
	findWidget("compare_data");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Compare PrePost Event");
	loadPage("Main Project/Discover Data/Compare PrePost Event");
	findWidget("compare_data");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Compare PrePost Event");
	loadPage("Main Project/Discover Data/Compare PrePost Event");
	findWidget("compare_data");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Compare PrePost Event");

	loadPage("Main Project/Discover Data/Find UTAG from TAG");
	findWidget("convert_tag_to_utag");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Find UTAG from TAG");
	loadPage("Main Project/Discover Data/Find UTAG from TAG");
	findWidget("convert_tag_to_utag");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Find UTAG from TAG");
	loadPage("Main Project/Discover Data/Find UTAG from TAG");
	findWidget("convert_tag_to_utag");
	getCurrentPage().should.be.equal("Main Project/Discover Data/Find UTAG from TAG");
});
