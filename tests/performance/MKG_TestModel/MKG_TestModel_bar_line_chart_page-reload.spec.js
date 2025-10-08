/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/MKG_TestModel_2019-08-20/MKG_LatestModel.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

//Model: MKG Test Model

scenario("MKG TestModel - A page with 4 BarLine Widgets - Performance Measuring", () => {
	loadPage("Main Project/All Widgets In It/Bar-Line Chart");
	findWidget("bar-line_chart");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It/Bar-Line Chart");
	loadPage("Main Project/All Widgets In It/Bar-Line Chart");
	findWidget("bar-line_chart");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It/Bar-Line Chart");
	loadPage("Main Project/All Widgets In It/Bar-Line Chart");
	findWidget("bar-line_chart");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It/Bar-Line Chart");
});
