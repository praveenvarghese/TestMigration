/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/QuoMare_Teacos_2021-04-08/ProjectSelection.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("Teacos Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home/Model Info");
	findWidget("model_info");
	getCurrentPage().should.be.equal("Main Project/Home/Model Info");
	loadPage("Main Project/Home/Model Info");
	findWidget("model_info");
	getCurrentPage().should.be.equal("Main Project/Home/Model Info");
	loadPage("Main Project/Home/Model Info");
	findWidget("model_info");
	getCurrentPage().should.be.equal("Main Project/Home/Model Info");

	loadPage("Main Project/Home/Network Design");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Home/Network Design");
	loadPage("Main Project/Home/Network Design");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Home/Network Design");
	loadPage("Main Project/Home/Network Design");
	findWidget("input_1");
	getCurrentPage().should.be.equal("Main Project/Home/Network Design");

	loadPage("Main Project/Home/Network Results");
	findWidget("network_results");
	getCurrentPage().should.be.equal("Main Project/Home/Network Results");
	loadPage("Main Project/Home/Network Results");
	findWidget("network_results");
	getCurrentPage().should.be.equal("Main Project/Home/Network Results");
	loadPage("Main Project/Home/Network Results");
	findWidget("network_results");
	getCurrentPage().should.be.equal("Main Project/Home/Network Results");

	loadPage("Main Project/Home/Network Info Arcs");
	findWidget("network_info_arcs");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Arcs");
	loadPage("Main Project/Home/Network Info Arcs");
	findWidget("network_info_arcs");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Arcs");
	loadPage("Main Project/Home/Network Info Arcs");
	findWidget("network_info_arcs");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Arcs");

	loadPage("Main Project/Home/Network Info Nodes");
	findWidget("network_info_nodes");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Nodes");
	loadPage("Main Project/Home/Network Info Nodes");
	findWidget("network_info_nodes");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Nodes");
	loadPage("Main Project/Home/Network Info Nodes");
	findWidget("network_info_nodes");
	getCurrentPage().should.be.equal("Main Project/Home/Network Info Nodes");
});
