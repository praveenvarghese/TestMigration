/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNavigatorWithWorkflowV2/WorkflowSCNavigator/SC Navigator/SC Navigator.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("SCN Page Load by using Workflow V2 - Performance Measuring", () => {
	loadPage("Main Project/Control Panel");
	getCurrentPage().should.be.equal("Main Project/Control Panel");
	loadPage("Main Project/Control Panel");
	getCurrentPage().should.be.equal("Main Project/Control Panel");
	loadPage("Main Project/Control Panel");
	getCurrentPage().should.be.equal("Main Project/Control Panel");

	loadPage("Main Project/Results");
	getCurrentPage().should.be.equal("Main Project/Results");
	loadPage("Main Project/Results");
	getCurrentPage().should.be.equal("Main Project/Results");
	loadPage("Main Project/Results");
	getCurrentPage().should.be.equal("Main Project/Results");

	loadPage("Main Project/Results/Customer");
	getCurrentPage().should.be.equal("Main Project/Results/Customer");
	loadPage("Main Project/Results/Customer");
	getCurrentPage().should.be.equal("Main Project/Results/Customer");
	loadPage("Main Project/Results/Customer");
	getCurrentPage().should.be.equal("Main Project/Results/Customer");

	loadPage("Main Project/Scenario Management");
	getCurrentPage().should.be.equal("Main Project/Scenario Management");
	loadPage("Main Project/Scenario Management");
	getCurrentPage().should.be.equal("Main Project/Scenario Management");
	loadPage("Main Project/Scenario Management");
	getCurrentPage().should.be.equal("Main Project/Scenario Management");
});
