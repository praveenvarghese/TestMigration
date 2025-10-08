/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Move from home to dialog page v2 and assert no side panel is displayed", () => {
	loadPage("Main Project/home");

	openAppManager().getFlyoutMenu({
		pagePath: "Main Project/large dp v2",
	});

	getAppManager().navigateToPage("Main Project/large dp v2");

	findWidget("large_dp_v2").isSidepanelsDisplayed().should.be.false;

	loadPage("Main Project/home");

	openAppManager().getFlyoutMenu({
		pagePath: "Main Project/custom size dp v2",
	});

	getAppManager().navigateToPage("Main Project/custom size dp v2");

	findWidget("custom_size_dp_v2").isSidepanelsDisplayed().should.be.false;

	loadPage("Main Project/home");

	getCurrentPage().should.be.equal("Main Project/home");
});
