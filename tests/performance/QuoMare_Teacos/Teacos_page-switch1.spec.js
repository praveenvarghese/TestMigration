/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Teacos Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)");
	findWidget("output_v2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	findWidget("supply_demand_overview");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Supply Demand Overview");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)");
	findWidget("output_v2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Supply Demand Overview");
	findWidget("supply_demand_overview");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Supply Demand Overview");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	findWidget("constraint_analyser");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Constraint Analyser");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Graphs");
	findWidget("graphs_2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Graphs");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Constraint Analyser");
	findWidget("constraint_analyser");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Constraint Analyser");

	getPageMenu().navigateToPage("Main Project/Home/Output (Scenarios)/Graphs");
	findWidget("graphs_2");
	getCurrentPage().should.be.equal("Main Project/Home/Output (Scenarios)/Graphs");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");
});
