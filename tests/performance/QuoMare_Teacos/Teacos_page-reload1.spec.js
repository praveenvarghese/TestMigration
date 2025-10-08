/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("Teacos Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Home/Output (Scenarios)");
	findWidget("output_v2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)");
	loadPage("Main Project/Home/Output (Scenarios)");
	findWidget("output_v2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)");
	loadPage("Main Project/Home/Output (Scenarios)");
	findWidget("output_v2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)");

	loadPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	findWidget("supply_demand_overview");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	loadPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	findWidget("supply_demand_overview");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	loadPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	findWidget("supply_demand_overview");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Supply Demand Overview");

	loadPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	findWidget("constraint_analyser");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	loadPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	findWidget("constraint_analyser");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	loadPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	findWidget("constraint_analyser");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Constraint Analyser");

	loadPage("Main Project/Home/Output (Scenarios)/Graphs");
	findWidget("graphs_2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Graphs");
	loadPage("Main Project/Home/Output (Scenarios)/Graphs");
	findWidget("graphs_2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Graphs");
	loadPage("Main Project/Home/Output (Scenarios)/Graphs");
	findWidget("graphs_2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Graphs");
});
