/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Data_Navigator_2020-12-21/Data_Navigator_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Data Navigator Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Import Dataset");
	findWidget("import_dataset");
	getCurrentPage().should.be.equal("Main Project/Import Dataset");
	loadPage("Main Project/Import Dataset");
	findWidget("import_dataset");
	getCurrentPage().should.be.equal("Main Project/Import Dataset");
	loadPage("Main Project/Import Dataset");
	findWidget("import_dataset");
	getCurrentPage().should.be.equal("Main Project/Import Dataset");

	loadPage("Main Project/Import Dataset/Configuration Summary");
	findWidget("configuration_summary");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Configuration Summary");
	loadPage("Main Project/Import Dataset/Configuration Summary");
	findWidget("configuration_summary");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Configuration Summary");
	loadPage("Main Project/Import Dataset/Configuration Summary");
	findWidget("configuration_summary");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Configuration Summary");

	loadPage("Main Project/Import Dataset/Generate Template");
	findWidget("generate_template");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Generate Template");
	loadPage("Main Project/Import Dataset/Generate Template");
	findWidget("generate_template");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Generate Template");
	loadPage("Main Project/Import Dataset/Generate Template");
	findWidget("generate_template");
	getCurrentPage().should.be.equal("Main Project/Import Dataset/Generate Template");

	loadPage("Main Project/Settings/Dataset Type");
	findWidget("attribute_management");
	getCurrentPage().should.be.equal("Main Project/Settings/Dataset Type");
	loadPage("Main Project/Settings/Dataset Type");
	findWidget("attribute_management");
	getCurrentPage().should.be.equal("Main Project/Settings/Dataset Type");
	loadPage("Main Project/Settings/Dataset Type");
	findWidget("attribute_management");
	getCurrentPage().should.be.equal("Main Project/Settings/Dataset Type");
});
