/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/MKG_TestModel_2019-08-20/MKG_LatestModel.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

//Model: MKG Test Model

scenario("MKG TestModel - A page with all widgets - Performance Measuring", () => {
	loadPage("Main Project/All Widgets In It");
	findWidget("all_widgets_in_it");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It");
	loadPage("Main Project/All Widgets In It");
	findWidget("all_widgets_in_it");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It");
	loadPage("Main Project/All Widgets In It");
	findWidget("all_widgets_in_it");
	getCurrentPage().should.be.equal("Main Project/All Widgets In It");
});
