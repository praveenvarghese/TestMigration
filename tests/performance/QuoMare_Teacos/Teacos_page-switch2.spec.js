/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Teacos Page Switch - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Home/Model Info");
	findWidget("model_info");
	getCurrentPage().should.be.equal("Main Project/Home/Model Info");

	getPageMenu().navigateToPage("Main Project/Home");
	findWidget("tno_1");
	getCurrentPage().should.be.equal("Main Project/Home");

	getPageMenu().navigateToPage("Main Project/Home/Model Info");
	findWidget("model_info");
	getCurrentPage().should.be.equal("Main Project/Home/Model Info");

	getPageMenu().navigateToPage("Main Project/Home/Network Design");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Home/Network Design");

	getPageMenu().navigateToPage("Main Project/Home/Network Results");
	findWidget("network_results");
	getCurrentPage().should.be.equal("Main Project/Home/Network Results");

	getPageMenu().navigateToPage("Main Project/Home/Network Design");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Home/Network Design");

	getPageMenu().navigateToPage("Main Project/Home/Network Results");
	findWidget("network_results");
	getCurrentPage().should.be.equal("Main Project/Home/Network Results");

	getPageMenu().navigateToPage("Main Project/Home/Network Info Arcs");
	findWidget("network_info_arcs");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Arcs");

	getPageMenu().navigateToPage("Main Project/Home/Network Info Nodes");
	findWidget("network_info_nodes");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Nodes");

	getPageMenu().navigateToPage("Main Project/Home/Network Info Arcs");
	findWidget("network_info_arcs");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Arcs");

	getPageMenu().navigateToPage("Main Project/Home/Network Info Nodes");
	findWidget("network_info_nodes");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Nodes");
});
