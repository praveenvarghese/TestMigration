/*!
 * @AIMMS_FILE=models/PageV2/TransNetPagev2/TransNetPagev2.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Add selectionbox-v2 widget to new page with grid", () => {
	loadPage("Main Project/Home");

	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddPage()
		.enterName("Page_V2");

	getAppManager().navigateToPage("Main Project/Page_V2");

	getMainPage().getVisibleWidgets().should.be.empty;

	openPageConfigurator().createWidget("selectionbox-v2", [], "SelBoxV2");

	getPageConfigurator()
		.dragWidget("SelBoxV2")
		.toArea("Area A");

	findWidget("SelBoxV2").should.be.a.widgetOfType("selectionbox-v2");

	findWidget("page_v2")
		.getVisibleWidgets()
		.should.eql(["SelBoxV2"]);

	loadPage("Main Project/Home");
	findWidget("home");
	getCurrentPage().should.be.equal("Main Project/Home");
});
